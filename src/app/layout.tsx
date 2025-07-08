import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { Metadata } from 'next';
import SessionProviderWrapper from '@/components/SessionProviderWrapper';

export const metadata: Metadata = {
  title: 'Car Blog',
  description: 'Explore car reviews, tips, and news!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-100">
        <SessionProviderWrapper>
          <Header />
          <main className="flex-grow container mx-auto px-4">{children}</main>
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}