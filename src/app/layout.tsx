import type { Metadata } from "next";
import { type_second } from "@/utils/fonts";

import { Footer, Header } from "@/components";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import ThemeProviderClient from "@/context/theme-provider-client";

export const metadata: Metadata = {
  title: "Social Sync",
  description: "Social Sync dogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <ThemeProviderClient>
          <Header />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          <Footer />
        </ThemeProviderClient>
      </body>
    </html>
  );
}
