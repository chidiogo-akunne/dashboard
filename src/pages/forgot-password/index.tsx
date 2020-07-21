import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mdiEmailOpenOutline } from '@mdi/js';
import Input from '../../commons/input';
import Button from '../../commons/button';
import Card from '../../commons/card';
import Layout from '../../components/layout';

import '../signup/styles.scss';

export default function ForgotPassword() {

  const [state, setState] = useState({
    email: '',
    loading: false,
    showError: null,
  });

  const handleChange = (event: any) => {
    event.persist();
    setState({
      ...state,
      email: event.target.value,
    });
  };

  async function handleSubmit(event: any) {
    event.preventDefault();
  }
  function handleClick() {
    setState({
      ...state,
      loading: true,
    });
  }

  const { email, loading, showError } = state;
  return (
    <Layout logoClass="logo_class">
      {showError ? (
        <div className="error_div">
          <h2 className="error">{showError}</h2>
        </div>
      ) : null}
      <Card cardClass="cardClass">
        <p className="forgot_header">Get back into your account</p>
        <p className="forgot_p">Enter your email address below.</p>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email Address"
            type="email"
            placeholder="mail@email.com"
            name="email"
            value={email}
            onChange={handleChange}
            path={mdiEmailOpenOutline}
            size={0.7}
            color="#464646"
          />
          <div className="verify_div">
            {loading ? (
              <Button value="Loading..." buttonClass="verify_button" />
            ) : (
              <Button
                value="Confirm"
                buttonClass="button_class"
                onClick={handleClick}
              />
            )}
            <p className="forgot_password">
              <Link to="/login">Remember now? Login</Link>
            </p>
          </div>
        </form>
      </Card>
    </Layout>
  );
}
