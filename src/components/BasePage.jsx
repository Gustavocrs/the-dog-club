import Footer from "@/components/Footer";
import Header from "@/components/Header";

/**
 * BasePage Unificada Systech para The Dog Club.
 * Define o layout base com Header e Footer.
 */
export const BasePage = ({ children }) => {
  return (
    <div className="bg-background text-on-background w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default BasePage;
