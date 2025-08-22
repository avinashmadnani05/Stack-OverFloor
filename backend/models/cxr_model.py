import torch
import torchxrayvision as xrv
import torchvision.transforms as T

# Load pretrained chest X-ray model (multi-label)
model = xrv.models.DenseNet(weights="densenet121-res224-all")
model.eval()

# preprocessing transform
xrv_transform = T.Compose([
    xrv.datasets.XRayCenterCrop(),
    xrv.datasets.XRayResizer(224)
])

def get_model():
    return model

def get_transform():
    return xrv_transform
