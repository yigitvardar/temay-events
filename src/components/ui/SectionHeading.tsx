import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold text-tmtext-primary sm:text-4xl leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-tmtext-secondary leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
