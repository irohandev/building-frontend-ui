import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './App.css';

function App() {
  const gsapRef = useRef(); // Create a reference for the element

  useEffect(() => {
    // Initialize GSAP animation inside useEffect
    gsap.to(gsapRef.current, {
      x: 1000, // Move the element 1000px along the x-axis
      duration: 2, // Duration of the animation
      delay: 1, // Delay before the animation starts
      rotate:720
    });
  }, []); // Empty dependency array to run this effect once

  return (
    <main>
      <div ref={gsapRef} className="box">
        {/* This div will be animated */}
      </div>
    </main>
  );
}

export default App;
