var tl = gsap.timeline();  // Create a new timeline for the animations


tl.from("h2", {
  y: -30,  // Start 30 pixels higher on the y-axis
  opacity: 0,  // Start with 0 opacity (fully transparent)
  duration: 1,  // Duration of the animation (1 second)
  delay: 1,  // Delay before the animation starts (1 second)
});

// The animation for <h3> will start after the above one finishes, and so on.
tl.from("h3", {
  y: -30,  // Start 30 pixels higher on the y-axis
  opacity: 0,  // Start with 0 opacity (fully transparent)
  duration: 0.5,  // Duration of the animation (0.5 seconds)
  delay: 1,  // Delay before the animation starts (1 second)
  stagger: 0.3,  // Stagger the animation of each <h3> element by 0.3 seconds
});

// The animation for <h1> will start after the above one finishes.
tl.from("h1", {
  y: 20,  // Start 20 pixels lower on the y-axis
  opacity: 0,  // Start with 0 opacity (fully transparent)
  duration: 0.5,  // Duration of the animation (0.5 seconds)
  scale: 1.5,  // Start with a scale of 1.5 (larger than the original size)
});

/*
Notes:

- A timeline in GSAP is used to sequence multiple animations together. 
- It allows you to control the order and timing of multiple animations, making it easier to create complex animations.
- By using the timeline, you can chain animations in a way that each one starts after the previous one ends, ensuring smooth transitions.


- All animations in the timeline are played in the order they are added to the timeline.
- The animations for <h2>, <h3>, and <h1> happen sequentially.
- Each element has a delay before starting, and the stagger option applies to multiple <h3> elements, delaying each animation by 0.3 seconds.
*/

