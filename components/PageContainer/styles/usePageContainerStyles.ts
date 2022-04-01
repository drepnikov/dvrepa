import { useMemo } from "react";
import classNames from "classnames";
import css from "./PageContainer.module.scss";

const usePageContainerStyles = () => {
  return useMemo(() => {
    const header = classNames(css.header);
    const document = classNames(css.document);

    return {
      header,
      document,
    };
  }, []);
};

export { usePageContainerStyles };
