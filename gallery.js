// Function to update the main image
function updateMainImage(index) {
    const thumbnails = document.getElementById('thumbnails').children;
    const mainImage = document.getElementById('mainImage');
    mainImage.src = thumbnails[index].src;
    updateThumbnails(index);
}

// Function to update the thumbnail selection
function updateThumbnails(selectedIndex) {
    const thumbnails = document.getElementById('thumbnails').children;
    for (let i = 0; i < thumbnails.length; i++) {
        if (i === selectedIndex) {
            thumbnails[i].classList.add('selected');
        } else {
            thumbnails[i].classList.remove('selected');
        }
    }
}
// Function to go to the next image
function nextImage() {
    const thumbnails = document.getElementById('thumbnails').children;
    let currentIndex = Array.from(thumbnails).findIndex(img => img.classList.contains('selected'));
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updateMainImage(currentIndex);
}

// Function to go to the previous image
function previousImage() {
    const thumbnails = document.getElementById('thumbnails').children;
    let currentIndex = Array.from(thumbnails).findIndex(img => img.classList.contains('selected'));
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateMainImage(currentIndex);
}

// Load thumbnails and add event listeners
function loadThumbnails() {
    const thumbnails = document.getElementById('thumbnails').children;
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].onclick = () => updateMainImage(i);
    }
}

// Initialize gallery
document.addEventListener('DOMContentLoaded', () => {
    loadThumbnails();
    updateMainImage(0); // Initialize with the first image
});
