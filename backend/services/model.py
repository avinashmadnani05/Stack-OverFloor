import torch
import torchvision.transforms as transforms
from PIL import Image
from io import BytesIO

# Load pretrained ResNet (dummy, later fine-tune on medical dataset)
model = torch.hub.load("pytorch/vision:v0.10.0", "resnet18", pretrained=True)
model.fc = torch.nn.Linear(model.fc.in_features, 2)  # 2 classes: Normal / Anomaly
model.eval()

# Preprocessing
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

async def predict_image(file):
    contents = await file.read()
    image = Image.open(BytesIO(contents)).convert("RGB")
    img_tensor = transform(image).unsqueeze(0)

    with torch.no_grad():
        outputs = model(img_tensor)
        _, predicted = torch.max(outputs, 1)

    classes = ["Normal", "Anomaly"]
    return classes[predicted.item()]
