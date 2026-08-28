import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ariviya - Premium Pet Shop & Care",
  description:
    "Ariviya – your one-stop destination for premium pet products and care essentials.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/slicknav.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/mousecursor.css" />
        <link rel="stylesheet" href="/css/custom.css" />
      </head>
      <body className="min-h-full" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
