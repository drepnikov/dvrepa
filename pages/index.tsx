import type { NextPage } from "next";
import { useHomePageStyles } from "styles/Home/useHomePageStyles";
import { PageContainer } from "components/PageContainer/PageContainer";
import { MyLink } from "components/MyLink/MyLink";

const Home: NextPage = () => {
  const styles = useHomePageStyles();

  return (
    <PageContainer>
      <main>
        <section className={styles.helloContainer}>
          <div>
            <h1 className={styles.fio}>Репников.Дмитрий</h1>
            <p className={styles.description}>Frontend-разработчик</p>
            <p>
              <MyLink
                to={"/#contacts"}
                title={"Поздороваться"}
                className={styles.sayHiBtn}
              />
            </p>
          </div>
          <div className={styles.logos}>
            <div>
              <object
                className={styles.jsLogo}
                type={"image/svg+xml"}
                data={"/js_logo.svg"}
              />
            </div>
            <div>
              <object
                className={styles.tsLogo}
                type={"image/svg+xml"}
                data={"/ts_logo.svg"}
              />
              <object
                className={styles.reactLogo}
                type={"image/svg+xml"}
                data={"/react_logo.svg"}
              />
            </div>
          </div>
        </section>
      </main>
    </PageContainer>
  );
};

export default Home;
