import * as React from "react";
import Head from "next/head";
import { Navigation } from "components/Navigation/Navigation";
import { usePageContainerStyles } from "components/PageContainer/styles/usePageContainerStyles";

interface IPageContainerProps {}

const PageContainer: React.FC<IPageContainerProps> = ({ children }) => {
  const styles = usePageContainerStyles();

  return (
    <>
      <Head>
        <title>d.v.repnikov</title>
      </Head>
      <header className={styles.header}>
        <Navigation />
      </header>
      <section className={styles.document}>{children}</section>
    </>
  );
};

export { PageContainer };
