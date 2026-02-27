import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Row from "@/components/common/Row";
import Navbar from "@/components/common/Navbar";
import HeaderSection from "@/components/feature/home/Header";
import ContactSection from "@/components/feature/home/Contant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waqar Hussain | Full-Stack MERN Developer",
  description:
    "Waqar Hussain is a Full-Stack MERN Developer building scalable SaaS platforms, multi-tenant architectures, and real-time web applications.",
  keywords: [
    "MERN Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "NestJS",
    "Tailwind CSS",
    "Full-Stack Web Developer",
    "SaaS Applications",
    "ERP Systems",
    "Real-Time Applications",
  ],
  authors: [
    { name: "Waqar Hussain", url: "https://waqar-portfolio-azure.vercel.app" },
  ],
  openGraph: {
    title: "Waqar Hussain | MERN Developer",
    description:
      "Full-Stack MERN Developer building scalable SaaS platforms, multi-tenant architectures, and real-time applications.",
    url: "https://waqar-portfolio-azure.vercel.app",
    siteName: "Waqar Hussain Portfolio",
    images: [
      {
        url: "/waqar.png",
        width: 600,
        height: 600,
        alt: "Waqar Hussain",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waqar Hussain | MERN Developer",
    description:
      "Full-Stack MERN Developer building scalable SaaS platforms, multi-tenant architectures, and real-time applications.",
    creator: "@waqarhussain",
    images: ["/waqar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
          position="bottom-right"
          richColors
          toastOptions={{
            classNames: {
              toast:
                "rounded-lg border px-4 py-3 shadow-md flex items-start gap-3 w-full max-w-sm bg-[#F6FFF9] border-[#48C1B5] text-[#2F3F53] font-[400]",
              title: "text-[#27303A] font-[600]",
              description: "text-[14px] text-[#2F3F53]",
              actionButton: "bg-transparent text-[#48C1B5]",
              cancelButton: "text-[#979FA9]",
              closeButton: "text-[#979FA9] hover:text-black",
            },
          }}
        />
        <Row className="flex-col bg-[#e1ebed]">
          <Row className="flex-col w-full  bg-[#291c3a]">
            <Navbar className="" />
            <HeaderSection />
          </Row>

          <Row className="w-[98%] md:w-[90%] mt-4">{children}</Row>
          <ContactSection />
        </Row>
      </body>
    </html>
  );
}
