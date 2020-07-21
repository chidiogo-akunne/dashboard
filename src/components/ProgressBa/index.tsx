import React from 'react';
import Styled from 'styled-components';

interface BarProps {
  width: number;
}

function ProgressBar(props: BarProps) {
  return (
    <BarContainer>
      <BarGuage width={props.width || 0} />
    </BarContainer>
  );
}

export default ProgressBar;

const BarContainer = Styled.div`
    width: 100%;
    background-color: #f6f6f6;
    height: 0.3rem;
    border-radius: 10px;
`;

const BarGuage = Styled.div`
    width: ${(props: BarProps) => (props.width ? props.width : 0)}%;
    background: ${(props: BarProps) =>
      props.width > 70 ? '#7ce7ac' : props.width < 33 ? '#ff808b' : '#f4be5e'};
    height: 100%;
    border-radius: 10px;
`;
