import Footer from '@/components/organism/Footer';
import Navbar from '@/components/organism/Navbar';

export default function Layout({ children }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col min-h-screen w-screen">
        <Navbar />
        <div className="flex justify-center">
          <div className="w-[1440px] flex justify-center">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
