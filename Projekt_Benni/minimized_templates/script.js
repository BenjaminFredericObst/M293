// List of image filenames
const imageList = [
  'csm_241222-gerhardt-dortmund-vfl-wolfsburg_e72ecf42e2.jpg',
  'csm_241222-maehle-dortmund-vfl-wolfsburg_a5d25baa04.jpg',
  'csm_241222-nmecha-dortmund-vfl-wolfsburg_a220edf02a.jpg',
  'csm_241222-svanberg-dortmund-vfl-wolfsburg_c3d3cfc478.jpg',
  'csm_241222-tomas-dortmund-vfl-wolfsburg_49be745c32.jpg',
  'csm_241222-vavro-dortmund-vfl-wolfsburg_149a49994d.jpg',
  'csm_241222-vavro-dortmund-vfl-wolfsburg-1_3fc75add87.jpg',
  'csm_241222-vavro-dortmund-vfl-wolfsburg-2_2e69bb2214.jpg',
  'csm_241222-wind-dortmund-vfl-wolfsburg_470c61350e.jpg'
];

// Path to the images folder
const imageFolder = './img/photo-site/';

let currentIndex = 0;

// Get the elements
const photoViewer = document.getElementById('photoViewer');
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');
const imageCounter = document.getElementById('imageCounter');

// Function to update the image and the counter
function updateImage() {
  if (imageList.length > 0) {
    // Update image src
    photoViewer.src = imageFolder + imageList[currentIndex];

    // Update counter (current image index + 1, total images)
    imageCounter.textContent = `${currentIndex + 1} / ${imageList.length}`;
  }
}

// Event listeners for buttons
backButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length; // Wrap around to last image
  updateImage();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imageList.length; // Wrap around to first image
  updateImage();
});

// Initialize with the first image
updateImage();
