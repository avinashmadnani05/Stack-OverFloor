import requests

OLLAMA_API_URL = "http://localhost:11434/api/generate"  # default ollama endpoint

def get_explanation(result: str):
    """
    Ask Ollama to explain medical prediction in simple terms.
    """
    prompt = f"""
    You are a helpful medical AI assistant.
    The CNN detected: {result}.
    Explain this to a non-doctor in simple language, and suggest next steps.
    """

    payload = {
        "model": "llama2",   # or "mistral", "llava" if multimodal
        "prompt": prompt,
        "stream": False
    }

    try:
        response = requests.post(OLLAMA_API_URL, json=payload)
        return response.json().get("response", "No explanation available.")
    except Exception as e:
        return f"Ollama error: {e}"
