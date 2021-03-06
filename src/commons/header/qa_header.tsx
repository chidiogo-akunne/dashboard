import React from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiLogout } from "@mdi/js";

import HamburgerMenu from "./hamburger_menu";
import { useAuthContext } from '../../commons/auth/context';

import './styles.scss';

export default () => {
  const auth = useAuthContext();
  const { logout } = auth;
  return (
    <div className="header_container">
      <img src="/assets/images/logo.png" alt="logo" />
      <ul className="web_nav">
        <li>
          <Link to="/qa">Home</Link>
        </li>
      </ul>
      <Link to="/login" onClick={logout}>
          <Icon
            path={mdiLogout}
            size={0.8}
            color=" #234DDD"
            className="web_nav"
          />
        </Link>
      <HamburgerMenu
        burger_class="burger_class"
        keywords="Categorized Keywords"
        keywordLink="/categorized-keywords"
        home="Home"
        homeLink="/qa"
      />
    </div>
  );
};
