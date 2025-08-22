from fastapi import FastAPI
from routes import health, predict
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="HI04 – CXR Detector (modular)",
    description="AI-based medical image analysis for X-rays and other scans",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(health.router, prefix="/health", tags=["Health"])
app.include_router(predict.router, prefix="/predict", tags=["Prediction"])

# Run with: python main.py
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
