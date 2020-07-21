import React, { useState, ChangeEvent } from 'react';
import Axios from 'axios';
import Button from '../../commons/button';
import Layout from '../Admin/admin-layout';

import './styles.scss';

interface Event<T = EventTarget> {
  target: T;
}

//Test component to upload csv file
export default function AdminKeyword() {
  const [showForm, setShowForm] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);


  function onChangeHandler(e: Event<HTMLInputElement>) {
    console.log("Changing");
    
  }

  function onInputChangehandler(e: ChangeEvent<HTMLInputElement>) {
    console.log("changing");
    
  }

  async function submitKeywordHandler() {
    console.log("Successful")
  }

  function fileUploadHandler() {
    setLoading(true);
    return;
  }

  function toggleFormType() {
    setShowForm(!showForm);
  }

  return (
      <Layout>
      <div className="form-area">
        <div className="toggle-menu">
          <ul>
            <li className={showForm ? 'active' : ''} onClick={toggleFormType}>
              Manual
            </li>
            <li className={!showForm ? 'active' : ''} onClick={toggleFormType}>
              Upload CSV
            </li>
          </ul>
        </div>
        {!showForm ? (
          <div className="upload-area">
            <input type="file" name="file" onChange={onChangeHandler} />
            <Button
              value="Upload"
              buttonClass="button_class"
              disabled={loading}
              onClick={fileUploadHandler}
            />
          </div>
        ) : (
          <div className="keyword-form">
            <label>Enter Keyword</label>
            <input
              type="text"
              placeholder="Type here"
              onChange={onInputChangehandler}
            />
            <Button
              value="Add Keyword"
              buttonClass="button_class"
              disabled={loading}
              onClick={submitKeywordHandler}
            />
          </div>
        )}
      </div>
      </Layout>
  );
}
