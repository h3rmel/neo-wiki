import React from 'react';

import type { Metadata } from 'next';

import { geistMono, geistSans } from '@/assets/fonts';

import '@/assets/globals.css';

import { ThemeProvider } from '@/components/theme-provider';

import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: {
    default: 'Neo Wiki',
    template: '%s | Neo Wiki',
  },
  description: 'The Wikipedia you already know, but restyled!',
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen w-full font-sans antialiased', geistMono.variable, geistSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
