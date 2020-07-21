import React from 'react';

import Button from '../../commons/button';

export function DownloadCSV(props: any) {

  function handleExportKeywords() {
    console.log("successful");
    
  }
  return (
          <Button
          value="Download CSV"
          buttonClass={props.buttonClass}
          onClick={handleExportKeywords}
        />
  )
}

export function FilterCSV(props: any) {
  
  return (
      <Button
        value="Filter CSV Download"
        buttonClass={props.buttonClass}
      />
  )
}
