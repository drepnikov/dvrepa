import * as React from "react";
import Head from "next/head";
import { Navigation } from "components/Navigation/Navigation";
import { usePageContainerStyles } from "components/PageContainer/styles/usePageContainerStyles";

interface IPageContainerProps {}

const PageContainer: React.FC<IPageContainerProps> = ({ children }) => {
  const s = usePageContainerStyles();

  return (
    <>
      <Head>
        <title>dvrepa</title>
      </Head>
      <header className={s.header}>
        <Navigation />
      </header>
      <section className={s.document}>{children}</section>
    </>
  );
};

export { PageContainer };
