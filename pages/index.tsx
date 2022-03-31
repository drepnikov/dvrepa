import type { NextPage } from "next";
import Head from "next/head";
import { Navigation } from "components/Navigation/Navigation";
import css from "styles/Home.module.scss";
import classNames from "classnames";

const Home: NextPage = () => {
  const helloContainerClassName = classNames(css.helloContainer);

  return (
    <>
      <Head>
        <title>d.v.repnikov</title>
      </Head>
      <header className={css.header}>
        <Navigation />
      </header>
      <main>
        <section className={helloContainerClassName}>
          <div>
            <h1 className={css.helloContainer__fio}>Репников.Дмитрий</h1>
            <p className={css.helloContainer__description}>
              Frontend-разработчик
            </p>
            <p>
              <a className={css.helloContainer__btn} href={"#contacts"}>
                Поздороваться
              </a>
            </p>
          </div>
          <div className={css.logos}>
            <object type={"image/svg+xml"} data={"/js_logo.svg"} />
            <object type={"image/svg+xml"} data={"/ts_logo.svg"} />
            <object type={"image/svg+xml"} data={"/react_logo.svg"} />
          </div>
        </section>
      </main>
      {/*<footer>Футер</footer>*/}
    </>
  );
};

export default Home;
