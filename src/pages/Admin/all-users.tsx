import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import Styled from 'styled-components';

import Layout from './admin-layout';
import Card from '../../commons/card';
import Button from '../../commons/button';
import Popup from './create-account';
import UserTable from './users-table';

export default function AllKEywords() {
  const [openToggle, setOpenToggle] = useState<boolean>(false);

  function togglePopupHandler() {
    setOpenToggle(!openToggle);
  }

  function closePopup() {
    setOpenToggle(false);
  }
  return (
    <>
      {openToggle ? <Popup onClick={closePopup} /> : null}
      <Layout>
        <ProgressMetrics>
          <MenuBurger>
            <Icon path={mdiMenu} size={0.5} color="#8181A5" />
          </MenuBurger>
          <h4>All Users</h4>
        </ProgressMetrics>
        <Card style={{backgroundColor: "#ffffff", padding: "1rem"}}>
          <UserTitle>
            <CreateAccount>
              <Button
                value="Create Account"
                buttonClass="addKeyword_button"
                onClick={togglePopupHandler}
              />
            </CreateAccount>
          </UserTitle>
          <UserTable />
        </Card>
      </Layout>
    </>
  );
}

const ProgressMetrics = Styled.div`
  display: flex;
    align-items: center;
    h4 {
      color: #1C1D21;
    }
`;

const MenuBurger = Styled.div`
  width: 1.5rem;
      height: 1.5rem;
      border-radius: 5px;
      background-color: #D5D5E0A5;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
`;

const UserTitle = Styled.div`
    display: flex;
      justify-content: space-between;
      padding: 0 1rem 1rem;
      align-items: center;
      flex-wrap: wrap;
`;

const CreateAccount = Styled.div`
    display: flex;
        align-items: center;
        @media (min-width: 1024px){
            margin-left: auto;
        }
        svg{
          margin-right: 0.1rem;
        }
        p{
          margin: 0 0.2rem;
          color: #8181A5;
          font-size: 12px;
        }
        .addKeyword_button {
        background-color: #5E81F4;
        color: #ECECF2;
        border: #ECECF2;
        border-radius: 10px;
        padding: 10px 20px;
        margin-right: 1rem;
      }
`;
