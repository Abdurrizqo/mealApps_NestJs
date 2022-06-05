import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mt-20 mb-10 mx-4 sm:mx-8 sm:mt-24 sm:mb-16 md:mx-12 lg:mx-24 xl:mx-32">
        {children}
      </main>
      <Footer />
    </>
  );
}
