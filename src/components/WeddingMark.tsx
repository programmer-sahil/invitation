import type { SVGProps } from 'react';

/** A small crescent-and-intertwined-hearts ornament shared across the invitation. */
export default function WeddingMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return <svg className={className} viewBox="0 0 72 44" fill="none" aria-hidden="true" focusable="false" {...props}>
    <path d="M23.5 5.5C12.8 8.1 8.9 21.7 16.3 30c4.9 5.5 13.8 6.5 19.9 2.2-8.1 1-14.7-4.8-14.7-12.8 0-6 3.7-10.8 9-12.9-2.2-.9-4.5-1.1-7-.2Z" fill="currentColor" opacity=".88"/>
    <path d="M35.5 16.3c2.5-4.2 8.3-4.1 10.6.1 2.3-4.2 8.1-4.3 10.6-.1 3.1 5.4-2.3 10.8-10.6 16.4-8.3-5.6-13.7-11-10.6-16.4Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
    <path d="M40.4 15.1c1.2 1 2.1 2.4 2.6 4.1M51.8 15.1c-1.2 1-2.1 2.4-2.6 4.1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    <path d="M31.6 35.6c4.4 2.2 8.9 2.2 13.5 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".7"/>
  </svg>;
}
