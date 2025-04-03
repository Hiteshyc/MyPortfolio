import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Handle high DPI displays for crisp rendering
    const setupCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(pixelRatio, pixelRatio);
      
      // Reinitialize particles when canvas resizes
      initParticles();
    };

    // Match colors from your CSS theme
    const primaryColor = '#8a2be2'; // accent-color from CSS
    const secondaryColor = '#9d4edd'; // accent-hover from CSS
    
    // Particle configuration
    let particles = [];
    const particleCount = Math.floor(window.innerWidth / 12);
    const connectionDistance = 150;
    const maxLineOpacity = 0.4;

    // Create particles with properties matching your theme
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          color: Math.random() > 0.5 ? primaryColor : secondaryColor,
          alpha: Math.random() * 0.6 + 0.2
        });
      }
    };

    // Animation function
    const draw = () => {
      // Use primary background color from your CSS
      ctx.fillStyle = '#121212'; // primary-bg from CSS
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw and update particles
      particles.forEach((particle, index) => {
        // Draw particle with proper opacity
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(')', `, ${particle.alpha})`).replace('rgb', 'rgba');
        ctx.fill();

        // Update position with boundary check
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x > window.innerWidth || particle.x < 0) {
          particle.speedX = -particle.speedX;
        }
        if (particle.y > window.innerHeight || particle.y < 0) {
          particle.speedY = -particle.speedY;
        }

        // Connect particles with lines that match theme
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Calculate opacity based on distance
            const opacity = maxLineOpacity * (1 - distance / connectionDistance);
            
            // Draw connection line
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(138, 43, 226, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      });

      // Add subtle pulse effect to some particles
      particles.forEach(particle => {
        if (Math.random() < 0.005) {
          particle.size = Math.random() * 3 + 1.5; // Temporarily increase size
          setTimeout(() => {
            particle.size = Math.random() * 2.5 + 0.5; // Return to normal size
          }, 1000);
        }
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    // Initialize and start animation
    setupCanvas();
    window.addEventListener('resize', setupCanvas);
    animationRef.current = requestAnimationFrame(draw);

    // Clean up
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', setupCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="code-animation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        display: 'block'
      }}
    />
  );
};

export default BackgroundAnimation;