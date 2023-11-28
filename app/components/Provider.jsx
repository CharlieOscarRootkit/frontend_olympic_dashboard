"use client"
import { ThemeProvider } from 'next-themes';

export function Theme({ children }) {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
}