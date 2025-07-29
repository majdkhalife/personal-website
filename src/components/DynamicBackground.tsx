import { useEffect, useRef } from "react";

export const DynamicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = window.innerWidth,
      height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const numParticles = 80,
      maxDist = 120;
    for (let i = 0; i < numParticles; i++)
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    const animate = () => {
      ctx.fillStyle = "hsl(222,47%,11%)";
      ctx.fillRect(0, 0, width, height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#00ffff";
        ctx.shadowColor = "#00ffff";
        ctx.shadowBlur = 8;
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j],
            dx = p.x - q.x,
            dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,255,255,${1 - dist / maxDist})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };
    animate();
    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);
  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
  );
};

//optical-flow inspired background for autonomous driving perception
export const LightBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    type Flow = {
      x: number;
      y: number;
      len: number;
      vy: number;
      slant: number;
    };
    const numFlows = 120;
    const flows: Flow[] = [];

    for (let i = 0; i < numFlows; i++) {
      flows.push({
        x: Math.random() * width,
        y: Math.random() * height,
        len: Math.random() * 20 + 10,
        vy: Math.random() * 2 + 1,
        slant: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      // white background
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, width, height);

      // draw optical flow streaks
      ctx.strokeStyle = "rgba(100,100,100,0.2)";
      ctx.lineWidth = 2;
      flows.forEach((f) => {
        ctx.beginPath();
        ctx.moveTo(f.x, f.y);
        ctx.lineTo(f.x + f.slant * f.len, f.y + f.len);
        ctx.stroke();
        f.y += f.vy;
        if (f.y - f.len > height) {
          f.y = -f.len;
          f.x = Math.random() * width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
  );
};
