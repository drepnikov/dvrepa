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
                {/* Основное */}
                <section className={s.helloContainer}>
                    <div>
                        <h1 className={s.fio}>Репников.Дмитрий</h1>
                        <div className={s.codePlaceContainer}>
                            <CodePlace stringToCode={"Frontend-Разработчик"} />
                        </div>
                        <p className={s.sayHiContainer}>
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

                {/* Обо мне */}
                <section className={s.aboutMeContainer}>
                    <div>
                        <div className={s.aboutMeArticle}>
                            Why do we use it? It is a long established fact that
                            a reader will be distracted by the readable content
                            of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less
                            normal distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English. Many desktop publishing
                        </div>
                        <div className={s.aboutMeShortInfo}>
                            <div className={s.photoAndAbout}>
                                <img src="/me.jpg" className={s.myPhoto} />
                                <div className={s.about}>
                                    <div>
                                        <div>Репников Дмитрий</div>
                                        <div>Frontend-разрабочик</div>
                                    </div>
                                </div>
                            </div>

                            <div className={s.quoteOfGreatest}>
                                Цитата великого
                            </div>
                        </div>
                    </div>
                </section>

                {/* Контакты */}
                <section></section>
            </main>
        </PageContainer>
    );
};

export default Home;
