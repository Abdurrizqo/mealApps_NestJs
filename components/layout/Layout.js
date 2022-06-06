import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>MyRecipes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />
      <main className="mt-20 mb-10 mx-4 sm:mx-8 sm:mt-24 sm:mb-16 md:mx-12 lg:mx-24 xl:mx-32">
        {children}
      </main>
      <Footer />
    </>
  );
}
