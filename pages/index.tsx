import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Drunkiel's website</title>
        <link rel="icon" href="/icons/code.svg" />
        <meta name="author" content="Drunkiel" />
        <meta name="keywords" content="Junior, Game developer, Games" />
        <meta name="description" content="Junior game developer" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Drunkiel's website" />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">Drunkiel's website</title>
        <meta data-rh="true" property="og:type" content="website" />
        <meta data-rh="true" property="og:title" content="Drunkiel's website" />
        <meta
          data-rh="true"
          property="og:image"
          content="/images/drunkiel.png"
        />
      </Head>

      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
};

export default Home;
