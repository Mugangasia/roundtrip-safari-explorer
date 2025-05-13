
import { Toaster } from "sonner";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="h-2 bg-red-600 w-full"></div>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default Layout;
