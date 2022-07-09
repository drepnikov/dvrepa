import { useMemo } from "react";
import css from "./Home.module.scss";

const useHomePageStyles = (): typeof css => {
    return useMemo(() => {
        return {
            ...css,
        };
    }, []);
};

export { useHomePageStyles };
