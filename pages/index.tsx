import type { NextPage } from "next";
import Head from "next/head";
import { Navigation } from "components/Navigation/Navigation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>d.v.repnikov</title>
      </Head>
      <header>
        <Navigation />
      </header>
      <main>Контент</main>
      <footer>Футеры</footer>
    </>
  );
};

export default Home;
