import requests
import base64
from io import BytesIO
from PIL import Image

OLLAMA_URL = "http://localhost:11434/api/generate"

def get_anomaly_description(image: Image.Image):
    try:
        buffered = BytesIO()
        image.save(buffered, format="JPEG")
        img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")

        payload = {
            "model": "llama3.2-vision",
            "prompt": "Describe the medical anomaly in this X-ray image.",
            "images": [img_str]
        }

        response = requests.post(OLLAMA_URL, json=payload)
        if response.status_code == 200:
            return response.json().get("response", "No description generated")
        return f"Ollama error: {response.text}"
    except Exception as e:
        return f"Error in Ollama request: {str(e)}"
