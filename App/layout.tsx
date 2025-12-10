import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Zenzoro | Futuristic Crypto Platform",
  description: "Next-generation neon crypto dashboard and portfolio."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zenblack text-white">
        <Navbar />
        <main className="px-6 py-10 max-w-6xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}