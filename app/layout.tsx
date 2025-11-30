import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper"; // ✅ custom wrapper

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "StudyBee — Full-Service Digital Agency",
    template: "%s"
  },
  description:
    "Strategy, design, and development that deliver measurable business outcomes.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-roboto relative bg-white">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
