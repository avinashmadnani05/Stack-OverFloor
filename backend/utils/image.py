from io import BytesIO
from PIL import Image
import numpy as np
import torch
import torchxrayvision as xrv

def load_and_preprocess_image(data: bytes, transform):
    """
    Reads image bytes, converts to grayscale, normalizes,
    and applies TorchXRayVision preprocessing.
    Returns torch tensor (1,1,224,224).
    """
    img = Image.open(BytesIO(data)).convert("L")  # grayscale
    img = np.array(img).astype(np.float32)

    # normalize to [-1024, 1024] as expected by TorchXRayVision
    img = xrv.datasets.normalize(img, 255)

    # add channel dimension
    img = img[None, ...]

    # resize & crop
    img = transform(img)

    # convert to torch tensor with batch dimension
    return torch.from_numpy(img).unsqueeze(0)  # (1,1,224,224)
