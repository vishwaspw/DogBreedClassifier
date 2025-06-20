# Dog Breed Classifier Web App

A modern web application to classify dog breeds from images using a deep learning model (MobileNetV2) served by Flask. The app features a drag-and-drop UI, beautiful background, and instant predictions.

---

## Features
- Upload a dog image and get the breed prediction instantly
- Clean, responsive UI with drag-and-drop and preview
- All-in-one Flask backend (serves both API and frontend)
- MobileNetV2-based model, fine-tuned on Stanford Dogs
- Docker support for easy deployment

---

## Project Structure
```
app/
  app.py              # Flask app (API + static frontend)
  model_loader.py     # Model loading and prediction logic
  model.h5            # Trained Keras model
  dog_names.txt       # List of dog breed names
  requirements.txt    # Backend dependencies
  static/
    index.html        # Main UI
    js/main.js        # Frontend logic
    Background.jpg    # UI background image
    uploads/          # Temporary image storage
```

---

## Setup & Usage

### 1. Install Requirements
```bash
cd app
pip install -r requirements.txt
```

### 2. Run the App
```bash
python app.py
```
- Visit [http://localhost:5000/](http://localhost:5000/) in your browser.
- Upload a dog image and see the prediction.

---

## Docker Usage

### 1. Build the Image
```bash
docker build -t dog-breed-classifier .
```

### 2. Run the Container
```bash
docker run -p 5000:5000 dog-breed-classifier
```
- Visit [http://localhost:5000/](http://localhost:5000/)

---

## License
See [LICENSE](LICENSE) for details. 