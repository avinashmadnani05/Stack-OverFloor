from fastapi import APIRouter, UploadFile, File
from app.services.anomaly_service import analyze_image

router = APIRouter()

@router.post("/predict")
async def predict(file: UploadFile = File(...)):
    return await analyze_image(file)
