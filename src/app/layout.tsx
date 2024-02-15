import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Smm Consulting Maira Suiunyshova",
  description: "It consulting by Maira Suiunyshova",
  icons: {
    icon: "/fulllogo.ico",
    shortcut: "/fulllogo.ico",
    apple: "/fulllogo.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/fulllogo.ico",
    },
  },
  alternates: {
    canonical: "https://smm-consultinggroup.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main
          style={{
            paddingTop: "70px",
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
