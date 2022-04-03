import * as React from "react";
import { MyLink } from "components/MyLink/MyLink";
import { useNavigationStyles } from "components/Navigation/styles/useNavigationStyles";

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = () => {
  const s = useNavigationStyles();

  return (
    <nav className={s.navigation}>
      <ul>
        <li>
          <MyLink to={"/#about"} title={"Обо мне"} />
        </li>
        <li>
          <MyLink to={"/#contacts"} title={"Контакты"} />
        </li>
        <li>
          <MyLink to={"/blog"} title={"Блог"} />
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
