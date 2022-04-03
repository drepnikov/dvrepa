import { useMemo } from "react";
import css from "./Codeplace.module.scss";
import classNames from "classnames";

const useCodeplaceStyles = () => {
  return useMemo(() => {
    return {
      container: classNames(css.container),
      panel: classNames(css.panel),
      panelButtons: classNames(css.panelButtons),
      fileTabsContainer: classNames(css.fileTabsContainer),
      fileTab: classNames(css.fileTab),
      windowCloseBtn: classNames(css.windowBtn, css.windowCloseBtn),
      windowFullScreenBtn: classNames(css.windowBtn, css.windowFullScreenBtn),
      windowMinimazeBtn: classNames(css.windowBtn, css.windowMinimazeBtn),
    };
  }, []);
};

export { useCodeplaceStyles };
