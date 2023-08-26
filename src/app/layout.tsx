import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import Container from '../components/Container';
import SideBar from '../components/SideBar';
import PageHeader from '@/components/PageHeader';
import './globals.css';
import AppProvider from '@/components/providers';

const jost = Jost({
  weight: ['400', '500'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PetsPaw',
  description: 'Pets paw web-site',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jost.className} w-full h-screen bg-light dark:bg-dark text-primary`}>
        <Container className="flex w-full h-full">
          <SideBar />
          <main className="w-[740px] page">
            <PageHeader />
            <AppProvider>{children}</AppProvider>
          </main>
        </Container>
      </body>
    </html>
  );
}
