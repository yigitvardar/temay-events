'use client';

import { motion } from 'framer-motion';

interface FloatingShapesProps {
  variant?: 'orbs' | 'grid' | 'rings' | 'mixed';
  intensity?: 'subtle' | 'medium';
}

export function FloatingShapes({ variant = 'orbs', intensity = 'subtle' }: FloatingShapesProps) {
  const dotOpacity = intensity === 'subtle' ? 0.12 : 0.18;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Orbs */}
      {(variant === 'orbs' || variant === 'mixed') && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
            transition={{
              opacity: { duration: 1.4, ease: 'easeOut' },
              scale: { duration: 1.4, ease: 'easeOut' },
              y: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
              x: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
            }}
            viewport={{ once: true, margin: '-80px' }}
            className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(36,99,197,0.22) 0%, rgba(36,99,197,0.06) 50%, transparent 70%)',
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ y: [0, 20, 0], x: [0, -16, 0] }}
            transition={{
              opacity: { duration: 1.4, ease: 'easeOut', delay: 0.3 },
              scale: { duration: 1.4, ease: 'easeOut', delay: 0.3 },
              y: { duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 },
              x: { duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
            }}
            viewport={{ once: true, margin: '-80px' }}
            className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(36,99,197,0.16) 0%, rgba(36,99,197,0.04) 50%, transparent 70%)',
            }}
          />
          {/* Third smaller orb for depth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ y: [0, 16, 0] }}
            transition={{
              opacity: { duration: 1.4, ease: 'easeOut', delay: 0.6 },
              scale: { duration: 1.4, ease: 'easeOut', delay: 0.6 },
              y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 },
            }}
            viewport={{ once: true, margin: '-80px' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(91,155,213,0.10) 0%, transparent 70%)',
            }}
          />
        </>
      )}

      {/* Dot Grid */}
      {(variant === 'grid' || variant === 'mixed') && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(36,99,197,${dotOpacity}) 1.5px, transparent 1.5px)`,
            backgroundSize: '28px 28px',
          }}
        />
      )}

      {/* SVG Rings */}
      {(variant === 'rings' || variant === 'mixed') && (
        <>
          <motion.svg
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
            className="absolute -top-20 -left-20 w-[500px] h-[500px]"
            viewBox="0 0 500 500"
            fill="none"
          >
            <circle cx="250" cy="250" r="200" stroke="rgba(36,99,197,0.18)" strokeWidth="1.5" />
            <circle cx="250" cy="250" r="150" stroke="rgba(36,99,197,0.12)" strokeWidth="1" />
            <circle cx="250" cy="250" r="100" stroke="rgba(36,99,197,0.08)" strokeWidth="1" />
            <circle cx="250" cy="250" r="50" stroke="rgba(36,99,197,0.06)" strokeWidth="1" />
          </motion.svg>

          <motion.svg
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true, margin: '-80px' }}
            className="absolute -bottom-24 -right-24 w-[400px] h-[400px]"
            viewBox="0 0 400 400"
            fill="none"
          >
            <circle cx="200" cy="200" r="160" stroke="rgba(36,99,197,0.15)" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="110" stroke="rgba(36,99,197,0.10)" strokeWidth="1" />
            <circle cx="200" cy="200" r="60" stroke="rgba(36,99,197,0.07)" strokeWidth="1" />
          </motion.svg>
        </>
      )}

      {/* Diagonal accent lines */}
      {variant === 'mixed' && (
        <motion.svg
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true, margin: '-80px' }}
          className="absolute top-1/4 right-0 w-80 h-80 opacity-[0.12]"
          viewBox="0 0 320 320"
          fill="none"
        >
          <motion.line
            x1="0" y1="320" x2="320" y2="0"
            stroke="rgba(36,99,197,1)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut', delay: 0.6 }}
            viewport={{ once: true }}
          />
          <motion.line
            x1="50" y1="320" x2="320" y2="50"
            stroke="rgba(36,99,197,0.7)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut', delay: 0.9 }}
            viewport={{ once: true }}
          />
          <motion.line
            x1="100" y1="320" x2="320" y2="100"
            stroke="rgba(36,99,197,0.4)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut', delay: 1.1 }}
            viewport={{ once: true }}
          />
        </motion.svg>
      )}
    </div>
  );
}
