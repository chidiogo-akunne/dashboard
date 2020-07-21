import React from 'react';
import Styled from 'styled-components';
import Card from '../Card';
import ProgressBar from '../ProgressBa';

interface StatsProps extends React.PropsWithChildren<unknown> {
  currentFigure: number;
  target: number;
  title: string;
}

function Stats(props: StatsProps) {
  const PROGRESS = (props.currentFigure / props.target) * 100;
  return (
    <Card style={{ marginBottom: '10px' }}>
      <StatsContent>
        <StatsHeading>
          <p className="stats-title">{props.title}</p>
          <p>
            <span className="current-figure">{props.currentFigure}</span>
            <span> / {props.target}</span>
          </p>
        </StatsHeading>
        <ProgressBar width={PROGRESS} />
      </StatsContent>
    </Card>
  );
}

export default Stats;

const StatsContent = Styled.div`
  padding: 20px 15px;
`;

const StatsHeading = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: #1C1D21;
    font-size: 14px;
    padding: 0;
    margin: 0;
    margin-bottom: 15px;
    span {
      color: #8181A5;
    }
    span.current-figure {
      color: #000;
      font-weight: 600;
    }
  }
  p.stats-title {
    font-weight: 600;
  }
`;
