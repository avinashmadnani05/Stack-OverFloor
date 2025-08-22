import io
from fastapi import UploadFile
from PIL import Image
import torch
import torchvision.transforms as transforms
from app.utils.ollama_client import get_anomaly_description

# Load pretrained model (basic ResNet18 classifier for now)
from torchvision import models
model = models.resnet18(pretrained=True)
model.fc = torch.nn.Linear(model.fc.in_features, 2)  # Binary classifier: Normal / Anomaly
model.eval()

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
])

async def analyze_image(file: UploadFile):
    try:
        contents = await file.read()
        image = Image.open(io.BytesIO(contents)).convert("RGB")
        img_tensor = transform(image).unsqueeze(0)

        with torch.no_grad():
            outputs = model(img_tensor)
            probs = torch.nn.functional.softmax(outputs, dim=1)
            confidence, predicted_class = torch.max(probs, 1)

        prediction = "Anomaly" if predicted_class.item() == 1 else "Normal"

        # Use LLaMA to describe anomaly if detected
        description = None
        if prediction == "Anomaly":
            description = get_anomaly_description(image)

        return {
            "prediction": prediction,
            "confidence": round(confidence.item(), 4),
            "description": description or "No anomaly description available"
        }
    except Exception as e:
        return {"error": str(e)}
