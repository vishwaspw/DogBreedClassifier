document.addEventListener('DOMContentLoaded', function() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const previewContainer = document.getElementById('previewContainer');
    const uploadForm = document.getElementById('uploadForm');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const resultContainer = document.getElementById('resultContainer');

    // Drag and drop logic
    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        fileInput.files = e.dataTransfer.files;
        showPreview();
    });
    fileInput.addEventListener('change', showPreview);

    function showPreview() {
        previewContainer.innerHTML = '';
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.className = 'preview-img img-fluid rounded';
                previewContainer.appendChild(img);
            }
            reader.readAsDataURL(fileInput.files[0]);
        }
    }

    function formatBreedName(breed) {
        // Remove leading ID if present (e.g., n02086240-Shih-Tzu -> Shih-Tzu)
        const match = breed.match(/^[a-zA-Z0-9]+-(.+)$/);
        return match ? match[1].replace(/_/g, ' ') : breed.replace(/_/g, ' ');
    }

    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        resultContainer.innerHTML = '';
        if (!fileInput.files[0]) return;
        loadingSpinner.style.display = 'inline-block';
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);
        fetch('/predict', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            loadingSpinner.style.display = 'none';
            if (data.breed) {
                const breedName = formatBreedName(data.breed);
                resultContainer.innerHTML = `<div class='alert alert-info'><strong>Prediction:</strong> ${breedName}</div>`;
            } else {
                resultContainer.innerHTML = `<div class='alert alert-danger'>${data.error || 'Prediction failed.'}</div>`;
            }
        })
        .catch(() => {
            loadingSpinner.style.display = 'none';
            resultContainer.innerHTML = `<div class='alert alert-danger'>Prediction failed.</div>`;
        });
    });
}); 