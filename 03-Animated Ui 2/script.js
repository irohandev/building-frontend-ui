// Selects the menu icon element from the DOM (used to open the sidebar)
var menu = document.querySelector("#nav i");

// Selects the cross icon element from the DOM (used to close the sidebar)
var cross = document.querySelector("#full i");

// Create a GSAP timeline to animate the elements
var tl = gsap.timeline();

// Animation: Slide the sidebar in from the right (duration: 0.6 seconds)
tl.to("#full", {
    right: 0,
    duration: 0.6
});

// Animation: Slide in the header text from the right with a stagger effect and opacity change
tl.from("#full h4", {
    x: 1500, // Start 1500px off-screen to the right
    duration: 0.5,
    stagger: 0.1, // Stagger the animations for each h4 element by 0.1 seconds
    opacity: 0 // Start with 0 opacity (invisible)
});

// Animation: Fade out the cross icon when the sidebar slides in
tl.to("#full i", {
    opacity: 0 // Fade out the cross icon (opacity 0)
});

// Pause the timeline initially so it doesn't play on page load
tl.pause();

// Add event listener to the menu icon, which plays the animation when clicked
menu.addEventListener("click", function() {
    tl.play(); // Play the timeline animation
});

// Add event listener to the cross icon, which reverses the animation when clicked
cross.addEventListener("click", function() {
    tl.reverse(); // Reverse the timeline animation (closes the sidebar)
});

