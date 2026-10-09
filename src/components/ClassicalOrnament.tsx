import type { SVGProps } from 'react';

type Variant = 'arabesque' | 'bloom' | 'rosette';

export default function ClassicalOrnament({ variant, className, ...props }: SVGProps<SVGSVGElement> & { variant: Variant }) {
  if (variant === 'bloom') return <svg className={className} viewBox="0 0 64 40" fill="none" aria-hidden="true" focusable="false" {...props}>
    <path d="M32 34V19M32 27c-8.5 0-13-4.2-13-10.5 6.9-.7 11.5 2.4 13 8.2M32 27c8.5 0 13-4.2 13-10.5-6.9-.7-11.5 2.4-13 8.2" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round"/>
    <path d="M32 18.5c-5.8-3.4-7.2-9.5-2.9-12.5 1.2 2 2.3 3 2.9 4.4C32.6 9 33.7 8 34.9 6c4.3 3 2.9 9.1-2.9 12.5Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round"/>
    <path d="M24 34c2.5-2.2 5.2-3.3 8-3.3s5.5 1.1 8 3.3" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>;
  if (variant === 'rosette') return <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false" {...props}>
    <path d="M24 9c2.4 6.3 8.7 7.2 13.6 4.3-.7 5.7 2.9 10.8 7.1 12.7-4.2 1.9-7.8 7-7.1 12.7-4.9-2.9-11.2-2-13.6 4.3-2.4-6.3-8.7-7.2-13.6-4.3.7-5.7-2.9-10.8-7.1-12.7 4.2-1.9 7.8-7 7.1-12.7C15.3 16.2 21.6 15.3 24 9Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <circle cx="24" cy="26" r="3.2" stroke="currentColor" strokeWidth="1.2"/>
  </svg>;
  return <svg className={className} viewBox="0 0 76 34" fill="none" aria-hidden="true" focusable="false" {...props}>
    <path d="M4 20c10 0 11-10 19-10 5.5 0 6.2 6 11 6 4.7 0 5.5-6 11-6 8 0 9 10 19 10" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round"/>
    <path d="M38 9c-2.4 4.2-6.8 5-6.8 9.5 0 3.5 3.1 5.8 6.8 5.8s6.8-2.3 6.8-5.8C44.8 14 40.4 13.2 38 9Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <path d="M8 23c4.3 0 6.8 2.2 8.3 5.5M68 23c-4.3 0-6.8 2.2-8.3 5.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>;
}
