import tensorflow as tf
import numpy as np
from PIL import Image
import os

MODEL_PATH = os.path.join(os.path.dirname(__file__), 'model.h5')
DOG_NAMES_PATH = os.path.join(os.path.dirname(__file__), 'dog_names.txt')
IMG_SIZE = 224

class ModelLoader:
    def __init__(self):
        self.model = tf.keras.models.load_model(MODEL_PATH)
        with open(DOG_NAMES_PATH, 'r') as f:
            self.dog_names = [line.strip() for line in f.readlines()]

    def preprocess_image(self, image_file):
        img = Image.open(image_file).convert('RGB').resize((IMG_SIZE, IMG_SIZE))
        arr = np.array(img) / 255.0
        arr = np.expand_dims(arr, axis=0)
        return arr

    def predict(self, image_file):
        arr = self.preprocess_image(image_file)
        preds = self.model.predict(arr)[0]
        idx = np.argmax(preds)
        confidence = float(preds[idx])
        return self.dog_names[idx], confidence 