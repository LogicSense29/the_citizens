import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata = {
  title: "The Citizens",
  description: "The Citizens Church",
};

const IS_PRODUCTION = process.env.NODE_ENV === "production";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable}`}>
        {!IS_PRODUCTION && <Header />}
        <PageTransition>{children}</PageTransition>
        {!IS_PRODUCTION && <Footer />}
      </body>
    </html>
  );
}
