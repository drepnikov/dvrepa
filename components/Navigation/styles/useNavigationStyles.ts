import { useMemo } from "react";
import classNames from "classnames";
import css from "./Navigation.module.scss";

const useNavigationStyles = () => {
  return useMemo(() => {
    return {
      navigation: classNames(css.navigation),
    };
  }, []);
};

export { useNavigationStyles };
