import localFont from 'next/font/local';

export const geistSans = localFont({
  src: '../app/fonts/GeistVF.woff',
  variable: '--font-inter',
  weight: '100 900',
  display: 'swap',
  preload: true,
});
