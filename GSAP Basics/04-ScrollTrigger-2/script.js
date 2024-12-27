// Animating the element with the id "box" inside the element with id "page1"
gsap.from("#page1 #box", {
    scale: 0,             // Start by scaling the element from 0 (completely small)
    delay: 1,             // Add a delay of 1 second before the animation starts
    duration: 1.5,        // Set the duration of the animation to 1.5 seconds
    rotation: 360         // Rotate the element 360 degrees during the animation
});

// Animating the element with the id "box" inside the element with id "page2"
// The animation will trigger when the user scrolls to this section
gsap.from("#page2 #box", {
    scale: 0,             // Start by scaling the element from 0 (completely small)
    duration: 1.5,        // Set the duration of the animation to 1.5 seconds
    rotation: 720,        // Rotate the element 720 degrees during the animation
    scrollTrigger: {      // Scroll trigger options
        trigger: "#page2 #box",  // The animation will be triggered by the element with id "box" inside "page2"
        scroller: "body",        // The body of the document will be used as the scroll container
        markers: true,           // Show scroll markers for debugging (helpful for development)
        start: "top 60%",         // The animation will start when the top of the element reaches 60% of the viewport height
        end: "top 30%",           // The animation will end when the top of the element reaches 30% of the viewport height
        scrub: 2                  // Scrub the animation over 2 seconds. This makes the animation smoother as the user scrolls.
                                 // You can use values like `true/false` (smooth or not), or `1-5` (higher values make the rotation smoother)
    }
});
