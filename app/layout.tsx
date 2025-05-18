import './globals.css';
import type { Metadata } from 'next';
import { Inter, Noto_Sans_SC } from 'next/font/google';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
// import { siteConfig } from '@/config/site';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

// Load fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-sans-sc',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Da Di Learning Studio',
    template: '%s | Da Di Learning Studio',
  },
  description: 'A new kind of Chinese enrichment — where language meets life.',
  keywords: [
    'Da Di',
    'Learning Studio',
    'Mandarin',
    'Chinese',
    'Mindfulness',
    'Enrichment',
    'Singapore',
    'Kids',
    'Teens',
    'Adults',
    'Language',
  ],
  authors: [
    {
      name: 'Da Di Learning Studio',
      url: 'https://dadilearning.com',
    },
  ],
  creator: 'Da Di Learning Studio',
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: 'https://dadi-learning.com',
    title: 'Da Di Learning Studio',
    description: 'A new kind of Chinese enrichment — where language meets life.',
    siteName: 'Da Di Learning Studio',
    images: [
      {
        url: 'https://dadi-learning.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Da Di Learning Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Da Di Learning Studio',
    description: 'A new kind of Chinese enrichment — where language meets life.',
    images: ['https://dadi-learning.com/og-image.png'],
    creator: '@dadilearning',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: 'https://dadi-learning.com/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansSC.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
