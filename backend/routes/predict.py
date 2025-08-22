from fastapi import APIRouter, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
import torch

from models.cxr_model import get_model, get_transform
from utils.image import load_and_preprocess_image

router = APIRouter()

# Load model and preprocessing once
model = get_model()
transform = get_transform()

@router.post("/")
async def predict(file: UploadFile = File(...)):
    """
    Predict anomalies in uploaded medical images.
    Returns top-3 findings and an overall anomaly score.
    """
    try:
        # Read and preprocess image
        data = await file.read()
        x = load_and_preprocess_image(data, transform)

        # Inference
        with torch.no_grad():
            logits = model(x)
            probs = torch.sigmoid(logits)[0]

        labels = model.pathologies  # list of pathology labels
        scores = [(labels[i], float(probs[i])) for i in range(len(labels))]
        scores.sort(key=lambda z: z[1], reverse=True)

        # Prepare top-3 predictions
        top_findings = [{"type": lbl, "confidence": round(p, 4)} for lbl, p in scores[:3]]

        # Anomaly score = max probability
        anomaly_score = round(max(p for _, p in scores), 4)

        return JSONResponse({
            "filename": file.filename,
            "top_findings": top_findings,
            "anomaly_score": anomaly_score,
            "confidence": int(anomaly_score * 100),  # for frontend display
            "findings": [
                {"type": f"{lbl}", "description": f"Predicted probability for {lbl}", "severity": "medium"}
                for lbl, _ in scores[:3]
            ],
            "recommendations": [
                "Consult a radiologist for confirmation.",
                "Repeat imaging if necessary.",
                "Follow-up according to clinical guidelines."
            ],
            "disclaimer": "This AI analysis is for educational purposes only and should not replace professional medical diagnosis."
        })

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
