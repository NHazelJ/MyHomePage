//this imports the list of focus messages from another JavaScript file
import {focusMessages} from "./focusMessages.js";

//this finds the paragraph where the message will appear
const focusText = document.querySelector("#focusText");

//this finds the button the user clicks
const focusButton = document.querySelector("#focusButton");

//this function chooses one random message from the array
function getRandomFocusMessage() {
  const randomIndex = Math.floor(Math.random() * focusMessages.length); //I love the idea of randomly picking a message! So much fun. Maybe you can also add random color to the text！
  return focusMessages[randomIndex];
}

//this checks if the button exists on the current page
if (focusButton) {
  //this runs when the user clicks the button.
  focusButton.addEventListener("click", () => {
    focusText.textContent = getRandomFocusMessage();
  });
}

//this message helps us know the JavaScript file loaded correctly.
console.log("Najib's personal homepage JavaScript loaded");
