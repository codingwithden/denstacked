import type { Metadata, Viewport } from "next";
import ScrollOmbre from "@/components/layout/ScrollOmbre";
import SiteNav from "@/components/layout/SiteNav";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denisse Medina Flores — Order Up",
  description:
    "Founder and full-stack builder going into product management. APM / PM and product marketing, NYC, 2027.",
};

export const viewport: Viewport = {
  themeColor: "#3E000D",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} antialiased`}>
      <body>
        <ScrollOmbre />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
