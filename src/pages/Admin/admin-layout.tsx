import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiLogout, mdiGauge, mdiClipboardCheckOutline, mdiToolboxOutline } from '@mdi/js';
import Styled from 'styled-components';

import HamburgerMenu from './admin-hamburger';
import { useAuthContext } from '../../commons/auth/context';

export default function AdminLayout(props: React.PropsWithChildren<unknown>){
    const auth = useAuthContext();
    const { logout } = auth;
    const {children} = props;
    return(
        <>
        <AdminHeader>
          <img src="/assets/images/logo.png" alt="logo" />
          <HamburgerMenu />
        </AdminHeader>
        <AdminMain>
          <AdminNav>
          <img src="/assets/images/logo.png" alt="logo" />
          <ul>
                <li>
                  <Link to="/admin">
                    <Icon path={mdiGauge} size={0.6} />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/admin/all-users">
                  <Icon path={mdiToolboxOutline} size={0.6} />
                  Users
                  </Link>
                </li>
                <li>
                  <Link to="/admin/all-keywords">
                  <Icon path={mdiClipboardCheckOutline} size={0.6} />
                  Keywords
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={logout}>
                    <Icon
                      path={mdiLogout}
                      size={0.6}
                    />
                    Log Out
                  </Link>
                </li>
              </ul>
          </AdminNav>
        <AdminConatiner>
          {children}
        </AdminConatiner>
        </AdminMain>
    </>
   
    )
}

const AdminHeader = Styled.div`
  display: flex;
  align-items: center;
  z-index: 999;
  position: relative;
  -webkit-box-shadow: 0px 4px 28px 0px rgba(241, 239, 239, 1);
  -moz-box-shadow: 0px 4px 28px 0px rgba(241, 239, 239, 1);
  box-shadow: 0px 4px 28px 0px rgba(241, 239, 239, 1);
  background-color: #ffffff;
  padding: 0 1rem;

  img {
    width: 9rem;
    padding: 0.8rem 0;
  }
  @media (min-width: 1024px){
    display: none;
  }
`;

const AdminMain = Styled.div`
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    position: relative;
  }
`;

const AdminNav = Styled.div`
  display: none;
  @media (min-width: 1024px){
      display: flex;
      flex-direction: column;
      position: fixed;
      flex: 0 0 20%;
      background-color: #fff;
      padding: 1rem 1rem 0;
      height: 100vh;
      width: 20%;

      img {
        width: 8rem;
        padding: 0.8rem 0;
      }

      ul {
        text-decoration: none;
        padding: 0;
        padding-top: 1rem;

        li {
          list-style-type: none;
          text-decoration: none;
          padding-bottom: 1.5rem;

          a {
            text-decoration: none;
            color: #8181A5;
            display: flex;
            align-items: center;
            font-size: 16px;

            svg {
              padding-right: 1rem;
              color: #8181A5;
            }
          }
        }

        li:hover,
        li:active,
        li:focus {
          background-color: #5E81F419;
          padding: 1rem 0;
          margin-bottom: 1rem;
          a{
            color: #1C1D21;
            font-weight: 600;
            svg{
              color: #5E81F4;
              padding-left: 0.5rem;
            }
          }
        }
      }
  }
`;

const AdminConatiner = Styled.div`
   background-color: #F5F5FA;
  padding: 0 1rem;
  @media (min-width: 1024px){
    width: 80%;
      flex: 0 0 80%;
      position: relative;
      left: 15%;
  }
`;