import type { Metadata } from "next";
import "./globals.scss";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Machado Pizza - A melhor pizzaria",
  description: "A melhor pizzaria da cidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-roboto">
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              backgroundColor: "#f1f1f1",
              color: "#131313",
              borderColor: "rgba(255, 255, 255, 0.5)",
            }
          }}
        />
        {children}
      </body>
    </html>
  );
}
