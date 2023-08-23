import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import Container from '../components/Container';
import SideBar from '../components/SideBar';
import './globals.css';

const jost = Jost({
  weight: ['400', '500'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PetsPaw',
  description: 'Pets paw web-site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jost.className} w-full h-screen bg-light dark:bg-dark text-primary`}>
        <Container className="flex w-full h-full">
          <SideBar />
          <main className="w-full">{children}</main>
        </Container>
      </body>
    </html>
  );
}
