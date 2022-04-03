import type { NextPage } from "next";
import { useHomePageStyles } from "styles/Home/useHomePageStyles";
import { PageContainer } from "components/PageContainer/PageContainer";
import { MyLink } from "components/MyLink/MyLink";
import { CodePlace } from "components/Codeplace/Codeplace";

const Home: NextPage = () => {
  const s = useHomePageStyles();

  return (
    <PageContainer>
      <main>
        <section className={s.helloContainer}>
          <div>
            <h1 className={s.fio}>Репников.Дмитрий</h1>
            <CodePlace stringToCode={"Frontend-Разработчик"} />
            <p>
              <MyLink
                to={"/#contacts"}
                title={"Поздороваться"}
                className={s.sayHiBtn}
              />
            </p>
          </div>
          <div className={s.logos}>
            <div className={s.firstRowLogoContainer}>
              <object
                className={s.jsLogo}
                type={"image/svg+xml"}
                data={"/js_logo.svg"}
              />
            </div>
            <div>
              <object
                className={s.tsLogo}
                type={"image/svg+xml"}
                data={"/ts_logo.svg"}
              />
              <object
                className={s.reactLogo}
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
