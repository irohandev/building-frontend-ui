// Function to handle wheel scroll animation
function wheelAnimation(){
    // Add an event listener to the window for the 'wheel' event (mouse scroll)
    window.addEventListener("wheel",function(dets){
        
        // Check if the scroll is downward (deltaY > 0)
        if(dets.deltaY > 0){
    
            // Animate the element with class '.marque' by translating it 200% to the left
            gsap.to(".marque", {
                transform: "translatex(-200%)",  // Move the element to the left
                repeat: -1,                      // Repeat the animation infinitely
                duration: 4,                     // Duration of the animation in seconds
                ease: "none"                     // Linear animation (no easing)
            });
            
            // Rotate all images inside the element with class '.marque' by 180 degrees
            gsap.to(".marque img", {
                rotate: 180,  // Rotate the image by 180 degrees
            });
    
        } else {
            // If the scroll is upward (deltaY <= 0), reverse the animation
    
            // Reset the position of the element with class '.marque' to its original position (0%)
            gsap.to(".marque", {
                transform: "translatex(0%)",    // Reset the translate position
                repeat: -1,                      // Repeat the animation infinitely
                duration: 4,                     // Duration of the animation in seconds
                ease: "none"                     // Linear animation (no easing)
            });
            
            // Reset the rotation of images inside the '.marque' element to 0 degrees
            gsap.to(".marque img", {
                rotate: 0,   // Reset the rotation of the image to 0 degrees
            });
        }
    });
}

// Call the wheelAnimation function to initialize the event listener
wheelAnimation();
