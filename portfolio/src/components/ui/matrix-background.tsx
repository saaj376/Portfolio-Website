'use client'

import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters: Katakana + Latin + Numerals
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    // Array to keep track of the y-coordinate of each column
    const rainDrops: number[] = [];
    for (let i = 0; i < columns; i++) {
      rainDrops[i] = 1;
    }

    const draw = () => {
      // 1. Fade Effect: Increased opacity to 0.1 (was 0.05)
      // This makes the trails fade faster, resulting in a "darker" overall screen.
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Set Text Style (Slightly deeper Neon Blue)
      ctx.fillStyle = '#2563eb'; // Tailwind Blue-600 (Darker than previous Blue-500)
      ctx.font = fontSize + 'px monospace';

      // 3. Subtle Glow Effect (Reduced blur)
      ctx.shadowBlur = 2; // Was 5
      ctx.shadowColor = '#2563eb'; 

      // 4. Draw Characters
      for (let i = 0; i < rainDrops.length; i++) {
        // Random character
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        // Occasional white flash for the "leading" character (reduced frequency)
        if (Math.random() > 0.99) {
            ctx.fillStyle = '#ffffff'; 
        } else {
            ctx.fillStyle = '#2563eb'; 
        }

        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        // Reset drop to top randomly
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
      
      // Reset shadow to avoid affecting the fade rectangle
      ctx.shadowBlur = 0; 
    };

    // Loop animation
    const intervalId = setInterval(draw, 33); // ~30FPS

    // Handle Resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-20 bg-black"
    />
  );
};

export default MatrixBackground;