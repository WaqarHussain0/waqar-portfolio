import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'sonner';
import Row from '@/components/common/Row';
import Navbar from '@/components/common/Navbar';
import HeaderSection from '@/components/feature/home/Header';
import ProofStrip from '@/components/feature/home/ProofStrip';
import ContactSection from '@/components/feature/home/Contant';
import WhatsAppButton from '@/components/common/WhatsAppButton';

import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const cotoris = localFont({
  src: '../assets/fonts/CotorisBold.ttf',
  variable: '--font-cotoris',
  display: 'swap',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Waqar Hussain | Full-Stack Software Engineer',
  description:
    'Waqar Hussain — Full-Stack Software Engineer building multi-tenant SaaS platforms (Tickato, Friday) and real-time systems in production.',
  keywords: [
    'Full-Stack Software Engineer',
    'React.js',
    'Next.js',
    'Node.js',
    'NestJS',
    'Tailwind CSS',
    'Multi-Tenant SaaS',
    'Real-Time Systems',
    'TypeScript',
  ],
  authors: [
    { name: 'Waqar Hussain', url: 'https://waqar-portfolio-azure.vercel.app' },
  ],
  openGraph: {
    title: 'Waqar Hussain | Full-Stack Software Engineer',
    description:
      'Full-Stack Software Engineer building multi-tenant SaaS platforms and real-time systems in production.',
    url: 'https://waqar-portfolio-azure.vercel.app',
    siteName: 'Waqar Hussain Portfolio',
    images: [
      {
        url: '/waqar.png',
        width: 600,
        height: 600,
        alt: 'Waqar Hussain',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waqar Hussain | Full-Stack Software Engineer',
    description:
      'Full-Stack Software Engineer building multi-tenant SaaS platforms and real-time systems in production.',
    creator: '@waqarhussain',
    images: ['/waqar.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${cotoris.variable} antialiased`}>
        <Toaster
          position="bottom-right"
          richColors
          toastOptions={{
            classNames: {
              toast:
                'rounded-lg border px-4 py-3 shadow-md flex items-start gap-3 w-full max-w-sm bg-[#F6FFF9] border-[#48C1B5] text-[#2F3F53] font-[400]',
              title: 'text-[#27303A] font-[600]',
              description: 'text-[14px] text-[#2F3F53]',
              actionButton: 'bg-transparent text-[#48C1B5]',
              cancelButton: 'text-[#979FA9]',
              closeButton: 'text-[#979FA9] hover:text-black',
            },
          }}
        />

        <WhatsAppButton />
        <Row className="flex-col justify-center bg-[#e1ebed]">
          <Row className="w-full flex-col bg-[#291c3a]">
            <Navbar className="" />
            <HeaderSection />
          </Row>

          <ProofStrip />

          <main className="mt-4 w-[98%] md:w-[90%]">{children}</main>
          <ContactSection />
        </Row>
      </body>
    </html>
  );
}
