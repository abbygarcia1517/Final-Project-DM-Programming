// Get the image element
const img = document.getElementById('myImage');

// When mouse is over the image
img.addEventListener('mouseover', function() {
  img.style.transform = 'scale(1.2)'; // Grow the image
});

// When mouse leaves the image
img.addEventListener('mouseout', function() {
  img.style.transform = 'scale(1)'; // Return to normal
});
