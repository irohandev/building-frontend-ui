/* Function to break the text of an <h1> into two halves and wrap each character in a span */
function breakTheText() {
    var h1 = document.querySelector("h1"); // Select the first <h1> element in the document
    var h1Text = h1.textContent; // Get the text content of the <h1>

    var splittedText = h1Text.split(""); // Split the text into an array of individual characters
    var halfValue = Math.floor(splittedText.length / 2); // Calculate the midpoint of the text

    var clutter = ""; // Initialize an empty string to store the modified HTML

    /* Loop through each character in the array and wrap it in a span */
    splittedText.forEach(function (element, id) {
        if (id < halfValue) {
            // For characters in the first half, wrap in a span with class "firsthalf"
            clutter += `<span class="firsthalf">${element}</span>`;
        } else {
            // For characters in the second half, wrap in a span with class "secondhalf"
            clutter += `<span class="secondhalf">${element}</span>`;
        }
    });

    h1.innerHTML = clutter; // Replace the original <h1> text with the new HTML containing spans
}

breakTheText(); // Call the function to modify the <h1> content

/* Animate the first half of the text using GSAP */
gsap.from("h1 .firsthalf", {
    y: 100, // Start 100px below the original position
    duration: 0.5, // Animation duration of 0.5 seconds
    opacity: 0, // Start with opacity set to 0 (invisible)
    stagger: 0.1 // Stagger the animation of each character by 0.1 seconds
});

/* Animate the second half of the text using GSAP */
gsap.from("h1 .secondhalf", {
    y: 100, // Start 100px below the original position
    duration: 0.5, // Animation duration of 0.5 seconds
    opacity: 0, // Start with opacity set to 0 (invisible)
    stagger: -0.1 // Stagger the animation of each character negatively (overlapping)
});
