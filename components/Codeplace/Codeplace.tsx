import * as React from "react";
import { useCodeplaceStyles } from "components/Codeplace/styles/useCodeplaceStyles";

interface ICodePlaceProps {
  stringToCode: string;
}

const CodePlace: React.FC<ICodePlaceProps> = ({ stringToCode }) => {
  const s = useCodeplaceStyles();

  return (
    <div className={s.container}>
      <div className={s.panel}>
        <div className={s.panelButtons}>
          <span className={s.windowCloseBtn} />
          <span className={s.windowMinimazeBtn} />
          <span className={s.windowFullScreenBtn} />
        </div>
        <div className={s.fileTabsContainer}>
          <div className={s.fileTab}>
            <span>index.js</span>
          </div>
        </div>
      </div>
      {stringToCode}
    </div>
  );
};

export { CodePlace };
