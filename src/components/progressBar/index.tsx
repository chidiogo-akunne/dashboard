import React, { CSSProperties } from 'react';

interface ProgressProps {
  progress_container: string;
  progress_bar: string;
  style?: CSSProperties;
}

export default (props: ProgressProps) => {
  const { progress_bar, progress_container } = props;
  return (
    <div className={progress_container}>
      <div className={progress_bar} style={props.style}></div>
    </div>
  );
};
