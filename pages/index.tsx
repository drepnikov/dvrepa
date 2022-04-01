import type { NextPage } from "next";
import Head from "next/head";
import { Navigation } from "components/Navigation/Navigation";
import { useHomePageStyles } from "styles/Home/useHomePageStyles";

const Home: NextPage = () => {
  const styles = useHomePageStyles();

  return (
    <>
      <Head>
        <title>d.v.repnikov</title>
      </Head>
      <header className={styles.header}>
        <Navigation />
      </header>
      <main>
        <section className={styles.helloContainer}>
          <div>
            <h1 className={styles.fio}>Репников.Дмитрий</h1>
            <p className={styles.description}>Frontend-разработчик</p>
            <p>
              <a className={styles.sayHiBtn} href={"#contacts"}>
                Поздороваться
              </a>
            </p>
          </div>
          <div className={styles.logos}>
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
