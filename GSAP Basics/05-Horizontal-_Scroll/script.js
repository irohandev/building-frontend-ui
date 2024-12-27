// Animating the h1 element inside the element with id "page2"
// The animation will trigger when the user scrolls to this section
gsap.to("#page2 h1", {
    transform: "translateX(-150%)",  // Move the h1 element 150% to the left on the X-axis
    scrollTrigger: {                // Scroll trigger options
        trigger: "#page2 h1",       // The animation will be triggered by the h1 element inside "page2"
        scroller: "body",           // The body of the document will be used as the scroll container
        markers: true,              // Show scroll markers for debugging (helpful for development)
        start: "top 0%",            // The animation will start when the top of the h1 element is at the top of the viewport
        end: "top -200%",           // The animation will end when the top of the h1 element has moved 200% above the viewport
        scrub: 2,                   // Scrub the animation over 2 seconds. The progress of the animation will be linked to the scroll position
                                     // You can use `true/false` or values like 1-5 for smoothness. Higher values make the movement smoother.
        pin: true                   // Pin the h1 element in place while the animation runs (it will stay fixed as the user scrolls)
    }
});
