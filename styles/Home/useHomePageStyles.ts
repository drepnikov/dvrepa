import { useMemo } from "react";
import classNames from "classnames";
import css from "./Home.module.scss";

const useHomePageStyles = () => {
  return useMemo(() => {
    return {
      helloContainer: classNames(css.helloContainer),
      header: classNames(css.header),
      fio: classNames(css.fio),
      description: classNames(css.description),
      sayHiBtn: classNames(css.sayHiBtn),
      logos: classNames(css.logos),
      firstRowLogoContainer: classNames(css.firstRowLogoContainer),
      tsLogo: classNames(css.logo, css.tsLogo),
      jsLogo: classNames(css.logo, css.jsLogo),
      reactLogo: classNames(css.logo, css.reactLogo),
    };
  }, []);
};

export { useHomePageStyles };
