import { useMemo } from "react";
import classNames from "classnames";
import css from "./Home.module.scss";

const useHomePageStyles = () => {
  return useMemo(() => {
    const helloContainer = classNames(css.helloContainer);
    const header = classNames(css.header);
    const fio = classNames(css.fio);
    const description = classNames(css.description);
    const sayHiBtn = classNames(css.sayHiBtn);
    const logos = classNames(css.logos);
    const tsLogo = classNames(css.tsLogo);
    const jsLogo = classNames(css.jsLogo);
    const reactLogo = classNames(css.reactLogo);

    return {
      helloContainer,
      header,
      fio,
      description,
      sayHiBtn,
      logos,
      tsLogo,
      jsLogo,
      reactLogo
    };
  }, []);
};

export { useHomePageStyles };
