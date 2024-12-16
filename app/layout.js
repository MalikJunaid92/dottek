import './globals.css'; // Import global Tailwind styles
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Dottek',
  description: 'Empowering business with cloud expertise',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#160C31] text-white flex flex-col min-h-screen justify-between">
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
