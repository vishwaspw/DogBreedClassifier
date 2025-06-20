# Dog Breed Classifier Web App

A modern web application to classify dog breeds from images using a deep learning model (MobileNetV2) served by Flask. The app features a drag-and-drop UI, beautiful background, and instant predictions.

---

## 🚀 Live Demo
Try the app here: [https://dogbreedclassifier-p14q.onrender.com](https://dogbreedclassifier-p14q.onrender.com)

---

## Features
- Upload a dog image and get the breed prediction instantly
- Clean, responsive UI with drag-and-drop and preview
- All-in-one Flask backend (serves both API and frontend)
- MobileNetV2-based model, fine-tuned on Stanford Dogs
- Docker support for easy deployment

---

## Project Structure (Detailed)

```
app/
│
├── app.py              # Main Flask app: serves API endpoints and static frontend
├── model_loader.py     # Loads the trained model and handles image preprocessing & prediction
├── model.h5            # Trained Keras model (MobileNetV2, fine-tuned on Stanford Dogs)
├── dog_names.txt       # List of dog breed names (one per line, matches model output)
├── requirements.txt    # Python dependencies for the backend
├── Procfile            # (For Railway/Heroku) Tells the platform how to start the app
│
├── static/             # All frontend assets (served by Flask)
│   ├── index.html      # Main HTML UI (drag-and-drop, preview, prediction display)
│   ├── Background.jpg  # Background image for the UI
│   └── js/
│       └── main.js     # Frontend JavaScript: handles drag-and-drop, AJAX, and UI updates
│
├── uploads/            # Temporary storage for uploaded images (auto-cleaned after prediction)
└── __pycache__/        # Python bytecode cache (can be ignored)
```

### **File/Folder Details**
- **app.py**: Flask app with `/predict` (POST) and `/breeds` (GET) endpoints, and static file serving.
- **model_loader.py**: Loads `model.h5` and `dog_names.txt`, preprocesses images, and returns predictions.
- **model.h5**: The trained MobileNetV2 model (do not push large datasets to GitHub).
- **dog_names.txt**: List of breed names, one per line, in the same order as model output.
- **requirements.txt**: All Python dependencies needed to run the backend.
- **Procfile**: For cloud platforms (like Railway/Heroku) to start the app with `python app.py`.
- **static/index.html**: The main user interface, styled with Bootstrap and a custom background.
- **static/js/main.js**: Handles drag-and-drop, image preview, AJAX upload, and result display.
- **static/Background.jpg**: The background image for a modern look.
- **uploads/**: Temporary folder for uploaded images (auto-deleted after prediction).

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

## Cloud Deployment

### **Render.com**
- This app is live at: [https://dogbreedclassifier-p14q.onrender.com](https://dogbreedclassifier-p14q.onrender.com)
- Render automatically builds and serves the app from the `app` directory.
- No Dockerfile needed for Render, but one is included for portability.

### **Railway/Heroku**
- Uses the `Procfile` to start the app: `web: python app.py`
- Set the root directory to `app` if prompted.

---

## License
See [LICENSE](LICENSE) for details. 