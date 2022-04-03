import * as React from "react";
import {useCodeplaceStyles} from "components/Codeplace/styles/useCodeplaceStyles";

interface ICodePlaceProps {
  stringToCode: string;
}

const CodePlace: React.FC<ICodePlaceProps> = ({ stringToCode }) => {
  const s = useCodeplaceStyles();
  
  return <div>{stringToCode}</div>;
};

export { CodePlace };
