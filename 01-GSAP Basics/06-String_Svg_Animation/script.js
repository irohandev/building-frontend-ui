// Define the initial and final paths for the SVG
const initialPath = `M 0 100 Q 500 100 990 100`;
const finalPath = `M 0 100 Q 500 100 990 100`;

// Select the element with the id 'string'
const stringElement = document.querySelector('#string');

// Event listener for mouse movement
stringElement.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX; // X-coordinate of the mouse pointer
    const mouseY = event.clientY; // Y-coordinate of the mouse pointer

    // Update the path dynamically based on mouse position
    const dynamicPath = `M 0 100 Q ${mouseX} ${mouseY} 990 100`;

    // Animate the path to the new dynamic path
    gsap.to("svg path", {
        attr: { d: dynamicPath }, // Update the 'd' attribute of the path
        duration: 0.2, // Smooth animation duration
        ease: "power3.out" // Smooth easing effect
    });
});

// Event listener for mouse leaving the element
stringElement.addEventListener("mouseleave", () => {
    // Animate the path back to the finalPath
    gsap.to("svg path", {
        attr: { d: finalPath }, // Reset the 'd' attribute to the final path
        duration: 1.5, // Longer duration for elastic effect
        ease: "elastic.out(1, 0.2)" // Elastic easing effect
    });
});
