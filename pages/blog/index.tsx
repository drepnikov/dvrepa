import type { NextPage } from "next";
import { PageContainer } from "components/PageContainer/PageContainer";
import { useBlogPageStyles } from "./styles/useBlogPageStyles";

const Blog: NextPage = () => {
    const s = useBlogPageStyles();

    return (
        <PageContainer>
            <main className={s.container}>
                <img src={"/under_construction.gif"} alt={"Ремонтные работы"} />
                <div>Очень скоро...</div>
            </main>
        </PageContainer>
    );
};

export default Blog;
