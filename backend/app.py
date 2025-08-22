# import torch
# import torch.nn as nn
# import torchvision.transforms as transforms
# from torchvision import models
# from fastapi import FastAPI, File, UploadFile, HTTPException
# from fastapi.responses import JSONResponse, HTMLResponse
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi.staticfiles import StaticFiles
# from fastapi.templating import Jinja2Templates
# from fastapi import Request
# from PIL import Image
# import requests
# import io
# import logging
# import os
# from typing import Optional
# import uuid

# # Set up logging
# logging.basicConfig(level=logging.INFO)
# logger = logging.getLogger(__name__)

# app = FastAPI(
#     title="Medical Anomaly Detection API",
#     description="API for detecting medical anomalies in chest X-ray images using deep learning",
#     version="1.0.0"
# )

# # Add CORS middleware
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # In production, specify actual origins
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Create uploads directory if it doesn't exist
# os.makedirs("uploads", exist_ok=True)

# # Load pre-trained model
# try:
#     model = models.resnet18(pretrained=True)
#     model.fc = nn.Linear(model.fc.in_features, 2)  # Binary: Normal / Anomaly
#     model.load_state_dict(torch.load("anomaly_model.pth", map_location="cpu"))
#     model.eval()
#     logger.info("Model loaded successfully")
# except Exception as e:
#     logger.error(f"Error loading model: {str(e)}")
#     model = None

# # Define anomaly categories
# ANOMALY_CLASSES = ["Pneumonia", "Tuberculosis", "COVID-19", "Lung Opacity"]

# # Image preprocessing
# transform = transforms.Compose([
#     transforms.Resize((224, 224)),
#     transforms.ToTensor(),
#     transforms.Normalize(mean=[0.485, 0.456, 0.406],
#                          std=[0.229, 0.224, 0.225])
# ])

# async def call_ollama(anomaly_type: str) -> str:
#     """Ask LLaMA (via Ollama) for medical explanation of anomaly"""
#     try:
#         response = requests.post(
#             "http://localhost:11434/api/generate",
#             json={
#                 "model": "llama2",
#                 "prompt": f"Explain the medical anomaly '{anomaly_type}' in simple terms, "
#                           f"including possible causes, symptoms, and treatment options. "
#                           f"Keep the explanation concise and patient-friendly."
#             },
#             timeout=30
#         )
#         if response.status_code == 200:
#             return response.json().get("response", "No explanation available.")
#     except Exception as e:
#         logger.error(f"Ollama error: {str(e)}")
#         return f"Could not generate explanation. Error: {str(e)}"
#     return "No explanation available."

# def save_upload_file(upload_file: UploadFile) -> str:
#     """Save uploaded file and return file path"""
#     file_extension = os.path.splitext(upload_file.filename)[1]
#     file_name = f"{uuid.uuid4()}{file_extension}"
#     file_path = os.path.join("uploads", file_name)
    
#     with open(file_path, "wb") as buffer:
#         content = upload_file.file.read()
#         buffer.write(content)
    
#     return file_path

# @app.get("/", response_class=HTMLResponse)
# async def read_root():
#     """Serve a simple HTML interface for testing"""
#     return """
#     <!DOCTYPE html>
#     <html>
#     <head>
#         <title>Medical Anomaly Detection</title>
#         <style>
#             body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
#             .upload-form { margin: 20px 0; padding: 20px; border: 2px dashed #ccc; border-radius: 10px; }
#             .result { margin: 20px 0; padding: 20px; background: #f5f5f5; border-radius: 10px; }
#             .loading { display: none; color: #007bff; }
#         </style>
#     </head>
#     <body>
#         <h1>Medical Anomaly Detection API</h1>
#         <p>Upload a chest X-ray image to detect potential anomalies</p>
        
#         <div class="upload-form">
#             <input type="file" id="fileInput" accept="image/*">
#             <button onclick="uploadFile()">Analyze Image</button>
#             <div id="loading" class="loading">Processing...</div>
#         </div>
        
#         <div id="result" class="result"></div>
        
#         <script>
#             async function uploadFile() {
#                 const fileInput = document.getElementById('fileInput');
#                 const resultDiv = document.getElementById('result');
#                 const loadingDiv = document.getElementById('loading');
                
#                 if (!fileInput.files[0]) {
#                     alert('Please select a file first');
#                     return;
#                 }
                
#                 loadingDiv.style.display = 'block';
#                 resultDiv.innerHTML = '';
                
#                 const formData = new FormData();
#                 formData.append('file', fileInput.files[0]);
                
#                 try {
#                     const response = await fetch('/predict/', {
#                         method: 'POST',
#                         body: formData
#                     });
                    
#                     const data = await response.json();
                    
#                     if (data.error) {
#                         resultDiv.innerHTML = `<h3>Error</h3><p>${data.error}</p>`;
#                     } else {
#                         let resultHTML = `
#                             <h3>Results</h3>
#                             <p><strong>Prediction:</strong> ${data.prediction}</p>
#                             <p><strong>Confidence:</strong> ${data.confidence}%</p>
#                         `;
                        
#                         if (data.anomaly_type) {
#                             resultHTML += `
#                                 <p><strong>Anomaly Type:</strong> ${data.anomaly_type}</p>
#                                 <p><strong>Description:</strong> ${data.description}</p>
#                             `;
#                         }
                        
#                         resultDiv.innerHTML = resultHTML;
#                     }
#                 } catch (error) {
#                     resultDiv.innerHTML = `<h3>Error</h3><p>${error.message}</p>`;
#                 } finally {
#                     loadingDiv.style.display = 'none';
#                 }
#             }
#         </script>
#     </body>
#     </html>
#     """

# @app.post("/predict/")
# async def predict(file: UploadFile = File(...)):
#     """
#     Predict medical anomalies from chest X-ray images
    
#     - **file**: Upload a chest X-ray image (JPEG, PNG, etc.)
#     """
#     try:
#         # Validate file type
#         if not file.content_type.startswith('image/'):
#             raise HTTPException(status_code=400, detail="File must be an image")
        
#         # Read and validate image
#         contents = await file.read()
#         if len(contents) == 0:
#             raise HTTPException(status_code=400, detail="Empty file")
        
#         # Save uploaded file
#         file_path = save_upload_file(file)
#         logger.info(f"File saved: {file_path}")
        
#         # Process image
#         image = Image.open(io.BytesIO(contents)).convert("RGB")
        
#         # Validate image dimensions
#         if image.size[0] < 50 or image.size[1] < 50:
#             raise HTTPException(status_code=400, detail="Image dimensions too small")
        
#         img_tensor = transform(image).unsqueeze(0)

#         # Model prediction
#         if model is None:
#             raise HTTPException(status_code=500, detail="Model not loaded")
        
#         with torch.no_grad():
#             outputs = model(img_tensor)
#             probs = torch.nn.functional.softmax(outputs, dim=1)
#             confidence, pred_class = torch.max(probs, 1)

#         prediction = "Normal" if pred_class.item() == 0 else "Anomaly"

#         anomaly_type = None
#         description = None

#         if prediction == "Anomaly":
#             # For demo purposes, pick random anomaly type
#             # In production, you'd use a multi-class model
#             anomaly_type = ANOMALY_CLASSES[torch.randint(0, len(ANOMALY_CLASSES), (1,)).item()]
#             description = await call_ollama(anomaly_type)

#         return {
#             "prediction": prediction,
#             "confidence": round(confidence.item() * 100, 2),
#             "anomaly_type": anomaly_type,
#             "description": description,
#             "file_saved": file_path
#         }

#     except HTTPException:
#         raise
#     except Exception as e:
#         logger.error(f"Prediction error: {str(e)}")
#         raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

# @app.get("/health")
# async def health_check():
#     """Health check endpoint"""
#     return {
#         "status": "healthy",
#         "model_loaded": model is not None,
#         "ollama_available": await check_ollama_availability()
#     }

# async def check_ollama_availability() -> bool:
#     """Check if Ollama service is available"""
#     try:
#         response = requests.get("http://localhost:11434/api/tags", timeout=5)
#         return response.status_code == 200
#     except:
#         return False

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)

from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from io import BytesIO
from PIL import Image
import numpy as np
import torch
import torch.nn.functional as F
import torchvision.transforms as T
import torchxrayvision as xrv  # pretrained CXR models
import uvicorn

app = FastAPI(title="HI04 – CXR Detector (minimal)")

# ---- load pretrained chest X-ray model (multi-label) ----
# "all" is a good general model across datasets
# docs: https://mlmed.org/torchxrayvision/models.html
model = xrv.models.DenseNet(weights="densenet121-res224-all")
model.eval()

# preprocessing: center-crop + resize to 224 like the model expects
xrv_transform = T.Compose([
    xrv.datasets.XRayCenterCrop(),
    xrv.datasets.XRayResizer(224)
])

@app.get("/health")
def health():
    return {"ok": True}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # read image
        data = await file.read()
        img = Image.open(BytesIO(data)).convert("L")  # grayscale
        img = np.array(img).astype(np.float32)

        # normalize to [-1024, 1024] as expected by TorchXRayVision
        img = xrv.datasets.normalize(img, 255)

        # model expects shape [C,H,W] with C=1
        img = img[None, ...]  # (1,H,W)

        # apply center crop + resize
        img = xrv_transform(img)  # -> (1,224,224)

        # to torch tensor with batch dim
        x = torch.from_numpy(img).unsqueeze(0)  # (1,1,224,224)

        with torch.no_grad():
            logits = model(x)                   # (1, num_labels)
            probs = torch.sigmoid(logits)[0]    # (num_labels,)

        labels = model.pathologies              # list of label names
        scores = [(labels[i], float(probs[i])) for i in range(len(labels))]
        scores.sort(key=lambda z: z[1], reverse=True)

        # pick top-3
        topk = [{"label": lbl, "confidence": round(p, 4)} for lbl, p in scores[:3]]

        # simple "anomaly score" = max probability across findings
        anomaly_score = round(max(p for _, p in scores), 4)

        return JSONResponse({
            "filename": file.filename,
            "top_findings": topk,
            "anomaly_score": anomaly_score
        })

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

if __name__ == "__main__":
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
