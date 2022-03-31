import * as React from "react";
import css from "./Navigation.module.scss";

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = () => {
  return (
    <nav className={css.navigation}>
      <ul>
        <li>
          <a href="#about">Обо мне</a>
        </li>
        <li>
          <a href="#contacts">Контакты</a>
        </li>
        <li>
          <a href="#contacts">Блог</a>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
