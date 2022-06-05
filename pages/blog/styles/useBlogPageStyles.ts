import { useMemo } from "react";
import css from "./blogPage.module.scss";
import classNames from "classnames";

const useBlogPageStyles = () => {
    return useMemo(() => {
        return {
            container: classNames(css.container),
        };
    }, []);
};

export { useBlogPageStyles };
