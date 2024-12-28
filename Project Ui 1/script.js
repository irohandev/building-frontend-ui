// Select the element with the ID "main"
var main = document.querySelector("#main");

// Select the element with the ID "cursor"
var cursor = document.querySelector("#cursor");

// Add an event listener to the "main" element that listens for mouse movement
main.addEventListener("mousemove", function (dets) {
    // Use the GSAP animation library to move the "cursor" element
    gsap.to(cursor, {
        // Set the x-coordinate to the current mouse x-position
        x: dets.clientX,
        // Set the y-coordinate to the current mouse y-position
        y: dets.clientY,
        // Set the duration of the animation to 1.5 seconds
        duration: 1.5,
    });
});
