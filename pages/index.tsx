import type { NextPage } from "next";
import Head from "next/head";
import { Navigation } from "components/Navigation/Navigation";
import css from "styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>d.v.repnikov</title>
      </Head>
      <header className={css.header}>
        <Navigation />
      </header>
      <main>
        <section className={css.helloContainer}>
          <div>
            <h1 className={css.helloContainer__fio}>Репников.Дмитрий</h1>
            <p className={css.helloContainer__description}>
              Frontend-разработчик
            </p>
            <a className={css.helloContainer__btn} href={"#contacts"}>
              Поздороваться
            </a>
          </div>
          <div className={css.logos}>
            <object type={"image/svg+xml"} data={"/js_logo.svg"} />
            <object type={"image/svg+xml"} data={"/react_logo.svg"} />
            <object type={"image/svg+xml"} data={"/ts_logo.svg"} />
          </div>
        </section>
      </main>
      <footer>Футеры</footer>
    </>
  );
};

export default Home;
