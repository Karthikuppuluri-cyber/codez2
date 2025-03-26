import { Toaster } from "sonner";
import ConvexClientProvider from "./ConvexClientProvider";
import "./globals.css";
import Provider from "./provider";

export const metadata = {
  title: "DaaP AI Coder",
  description: "Created by DaaP",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <ConvexClientProvider>
          <Provider>{children}</Provider>
          <Toaster />

        </ConvexClientProvider>
      </body>
    </html>
  );
}
