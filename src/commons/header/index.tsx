import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiLogout } from '@mdi/js';

import { useAuthContext } from '../../commons/auth/context';
import HamburgerMenu from './hamburger_menu';

import './styles.scss';
import WithIsAuthorized, {
  AutorizedHOC,
} from '../../components/AuthComponent/WithIsAutorized';

interface HeaderProps extends AutorizedHOC {}

function Header(props: HeaderProps) {
  const auth = useAuthContext();
  const { logout } = auth;

  useEffect(() => {
    if (!props.isAuthorized) {
      window.location.href = '/login';
    }

  }, [props.decodedToken, props.isAuthorized]);

  return (
    <div className="header_container">
      <img src="/assets/images/logo.png" alt="logo" />
      <ul className="web_nav">
        <li>
         <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/rejected">Rejected Keywords</Link>
          </li>

        <Link to="/login" onClick={logout}>
          <Icon
            path={mdiLogout}
            size={0.8}
            color=" #234DDD"
            className="web_nav"
          />
        </Link>
      </ul>
      <HamburgerMenu
        burger_class="burger_class"
        keywordLink="/rejected"
        home="Home"
        homeLink="/"
        keywords="Rejected keywords"
      />
    </div>
  );
}

export default WithIsAuthorized(Header);
