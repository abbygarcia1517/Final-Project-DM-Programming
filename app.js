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



let entryCounter = 0; // variable to track number of entries

const addEntryButton = document.getElementById('addEntryButton');
const entryCount = document.getElementById('entryCount');
const journalEntries = document.getElementById('journalEntries');

addEntryButton.addEventListener('click', function() {
  // increase the counter
  entryCounter++;

  // create a new journal entry
  const newEntry = document.createElement('p');
  newEntry.innerText = `Journal Entry #${entryCounter}: New journal entry.`;
  newEntry.style.fontFamily = "Helvetica, Arial, sans-serif"; 
  newEntry.style.fontSize = '15px';
  newEntry.style.textAlign = 'center';
  newEntry.style.marginTop = '10px';

  // add the new entry to the page
  journalEntries.appendChild(newEntry);

  // update the count text
  entryCount.innerText = `Entries added: ${entryCounter}`;
});
