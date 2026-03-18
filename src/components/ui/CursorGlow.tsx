'use client';

import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only activate on mouse devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    setIsPointer(true);

    function handleMove(e: MouseEvent) {
      setPos({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  if (!isPointer) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        width: 500,
        height: 500,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(36,99,197,0.10) 0%, rgba(36,99,197,0.04) 40%, transparent 70%)',
        transition: 'left 0.08s ease, top 0.08s ease',
      }}
    />
  );
}
