import type { Metadata } from "next";
import { auth } from "../../../auth";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <div className="mx-auto text-2xl gap-2">
            <Navbar session={session}/>
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
