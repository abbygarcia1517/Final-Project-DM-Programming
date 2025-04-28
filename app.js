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



// Select the button and output paragraph
const loadTextButton = document.getElementById('loadTextButton');
const textOutput = document.getElementById('textOutput');

// When button is clicked, fetch the text file
loadTextButton.addEventListener('click', function() {
  fetch('message.txt')
    .then(response => response.text())
    .then(data => {
      textOutput.innerText = data; // Put the text into the paragraph
    })
    .catch(error => {
      console.error('Error loading the text file:', error);
    });
});
