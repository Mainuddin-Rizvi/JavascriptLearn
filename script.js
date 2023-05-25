// Import the 'jsdom' package
const { JSDOM } = require('jsdom');

// Create a new DOM instance
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="myDiv">Hello, World!</div></body></html>');

// Access the DOM document
const document = dom.window.document;

// Get the existing element by its ID
const myDiv = document.getElementById('myDiv');

// Update the text content of the element
myDiv.textContent = 'Modified Text';

// Create a new element
const newElement = document.createElement('p');
newElement.textContent = 'This is a new paragraph.';

// Append the new element to the body
document.body.appendChild(newElement);

// Create a new attribute for the existing element
const newAttribute = document.createAttribute('class');
newAttribute.value = 'highlight';

// Add the attribute to the element
myDiv.setAttributeNode(newAttribute);

// Remove the element
myDiv.remove();

// Serialize the modified DOM to a string
const modifiedHTML = dom.serialize();

console.log(modifiedHTML);
