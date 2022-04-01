import * as React from "react";
import css from "./Navigation.module.scss";
import { MyLink } from "components/MyLink/MyLink";

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = () => {
  return (
    <nav className={css.navigation}>
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
