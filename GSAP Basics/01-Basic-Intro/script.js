/*
Notes:
GSAP is a JavaScript library used for animations. 
To write animations, we use gsap.to or gsap.from and provide a class name or ID inside it. 
- gsap.to means going from the initial state to the final state.
- gsap.from means coming from the final state to the initial state.
*/

// Animate the element with the ID "box1"
gsap.to("#box1", {
    x: 1000,  // Move the box 1000 pixels along the x-axis
    duration: 2,  // Duration of the animation (2 seconds)
    delay: 1,  // Delay before the animation starts (1 second)
    rotate: 360,  // Rotate the box 360 degrees
    backgroundColor: "blue",  // Change the background color to blue
    borderRadius: "25%",  // Set the border radius to 25% (making the box rounder)
    scale: 0.5,  // The box will shrink to 50% of its original size; if set to 2, it will double in size
    repeat: -1,  // The animation will repeat infinitely
    yoyo: true,  // The animation will reverse after completing (go from initial to final, then final to initial)
});

// Animate all <h1> elements
gsap.from("h1", {
    color: "red",  // Start with red text color
    opacity: 0,  // Start with 0 opacity (fully transparent)
    y: 40,  // Start 40 pixels lower on the y-axis
    duration: 2,  // Duration of the animation (2 seconds)
    delay: 1,  // Delay before the animation starts (1 second)
    stagger: 1,  // The animation will be applied one by one to each <h1> element (1-second delay between each)
    // stagger: -1; // This would make the animation reverse order, starting from the bottom and moving upwards
    // stagger: 0.3; // This would make the animation faster, with a 0.3-second delay between each <h1> element
});
