import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Manrope, Noto_Naskh_Arabic } from 'next/font/google';
import './globals.css';
const serif = Cormorant_Garamond({ subsets:['latin'], variable:'--serif', weight:['400','500','600','700'] });
const sans = Manrope({ subsets:['latin'], variable:'--sans', weight:['400','500','600','700'] });
const arabic = Noto_Naskh_Arabic({ subsets:['arabic'], variable:'--arabic', weight:['400','500','600','700'] });
export const metadata: Metadata = { title:'SK Sahil & Zameema Ghousia | Walima Invitation', description:'Join us in celebrating the Walima reception of SK Sahil and Zameema Ghousia on 23 November 2026 at Jashn-E-Bengal, Bandel.', metadataBase:new URL('https://walima-invitation.vercel.app'), openGraph:{title:'SK Sahil & Zameema Ghousia | Walima Invitation',description:'Join us in celebrating the Walima reception of SK Sahil and Zameema Ghousia on 23 November 2026 at Jashn-E-Bengal, Bandel.',type:'website'}, twitter:{card:'summary_large_image'} };
export const viewport: Viewport = { themeColor: '#641F32' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body className={`${serif.variable} ${sans.variable} ${arabic.variable}`}>{children}</body></html> }
