import React, { Suspense } from 'react';

function Loading() {
  return <>Loading...</>;
}

function SuspenseBoundary(props: React.PropsWithChildren<any>) {
  return <Suspense fallback={Loading()}>{props.children}</Suspense>;
}

export default SuspenseBoundary;
