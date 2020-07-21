import React from 'react';
import Styled from 'styled-components';

export default function KeywordTable(){
    return(
        <KeywordTableContainer style={{overflowX: "auto"}}>
        <table>
          <thead>
          <tr className="table_header">
            <th>Keywords</th>
            <th>Category</th>
            <th>Sub Category</th>
            <th>Modifier</th>
            <th>Approved By</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>Frontend jobs in lagos</td>
              <td>Job search</td>
              <td>Location</td>
              <td>none</td>
              <td>Tolu Adesina</td>
            </tr>
          </tbody>
        </table>
      </KeywordTableContainer>
   
    )
}

const KeywordTableContainer = Styled.div`
    table{
        margin-bottom: 1rem;
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse; 
      th{
        background-color: #F5F5FA66;
      }
      th,
        td {
          padding: 1rem;
          text-align: left;
        }
        .bold_text {
          font-size: 16px;
          color: #1C1D21;
          font-weight: 600;
        }

        .light_text {
          font-size: 16px;
          color: #1C1D21;
          font-weight: 400;
        }
    }
`;