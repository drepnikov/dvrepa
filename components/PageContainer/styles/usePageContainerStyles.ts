import { useMemo } from "react";
import classNames from "classnames";
import css from "./PageContainer.module.scss";

const usePageContainerStyles = () => {
  return useMemo(() => {
    return {
      header: classNames(css.header),
      document: classNames(css.document),
    };
  }, []);
};

export { usePageContainerStyles };
