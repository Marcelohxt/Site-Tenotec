import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#d9822b',
}

export const metadata: Metadata = {
  title: "TenoTec - Reformas e Construções de Alto Padrão",
  description: "Transformando sonhos em realidade com manutenções, reformas e construções de alto padrão. Manutenções, reformas completas e muito mais.",
  keywords: "construção, reforma, alto padrão, engenharia, arquitetura, projetos, São Paulo",
  authors: [{ name: "TenoTec" }],
  creator: "TenoTec",
  publisher: "TenoTec",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL('https://tenotec.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TenoTec - Reformas e Construções de Alto Padrão",
    description: "Transformando sonhos em realidade com reformas e construções de alto padrão.",
    url: 'https://tenotec.com.br',
    siteName: 'TenoTec',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TenoTec - Reformas e Construções',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="google-site-verification" content="seu-código-de-verificação" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
