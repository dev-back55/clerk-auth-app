import { ClerkProvider } from "@clerk/nextjs/app-beta";

import Footer from "./components/layout/footer.jsx";
import Header from "./components/layout/header.jsx";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clerk Auth App",
  description: "Demo auth width Clerk lib",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.className}>
        <body>
          <ThemeProvider>
            <div className="container">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
