import React from 'react';
import {Link} from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import Styled from 'styled-components';

import Layout from './admin-layout';
import Card from '../../commons/card';
import Button from '../../commons/button';
import KeywordTable from './keyword-table';
import {DownloadCSV, FilterCSV} from './csv';

export default function AllKEywords() {
  return (
    <Layout>
      <ProgressMetrics>
        <MenuBurger>
          <Icon path={mdiMenu} size={0.5} color="#8181A5" />
        </MenuBurger>
        <h4>All Keywords</h4>
      </ProgressMetrics>
      <Card cardClass="keyword_class">
        <KeywordTitle>
          <h4>Keywords</h4>
          <div>
            <Link to="/admin/addkeywords">
              <Button value="Add keyword" buttonClass="keyword_button" />
            </Link>
            <DownloadCSV buttonClass="csv_button" />
            <FilterCSV buttonClass="keyword_button" />
          </div>
        </KeywordTitle>
        <KeywordTable />
      </Card>
    </Layout>
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

const KeywordTitle = Styled.div`
      display: flex;
      justify-content: space-between;
      padding: 0 1rem 1rem;
      align-items: center;
      flex-wrap: wrap;

      h4 {
        color: #1C1D21;
      }

      .csv_button {
        color: #5E81F4;
        background-color: #ECECF2;
        border: #ECECF2;
        border-radius: 10px;
        padding: 10px 20px;
        margin-right: 1rem;
      }
      .keyword_button {
        background-color: #5E81F4;
        color: #ECECF2;
        border: #ECECF2;
        border-radius: 10px;
        padding: 10px 20px;
        margin-right: 1rem;
      }
`;
