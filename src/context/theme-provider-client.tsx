"use client";
import { theme } from "@/styles/theme";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

export default function ThemeProviderClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  if (!isHydrated) return null;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
