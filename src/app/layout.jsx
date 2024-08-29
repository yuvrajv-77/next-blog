
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import AuthContextProvider from "../../lib/context/AuthContext";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Header />
          {children}
        </AuthContextProvider>
      </body>

    </html>
  );
}
