import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Input from '../../commons/input';
import Button from '../../commons/button';
import Card from '../../commons/card';
import Layout from '../../components/layout';

import '../signup/styles.scss';

export default function ForgotPassword() {
  const route = useLocation();

  const [state, setState] = useState({
    password: '',
    confirmPassword: '',
    loading: false,
    showError: null,
  });

  const handleChange = (event: any) => {
    event.persist();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const queryString = route.search.split('=');

  async function handleSubmit(event: any) {
    event.preventDefault();
  }

  function handleClick() {
    setState({
      ...state,
      loading: true,
    });
  }

  const { password, confirmPassword, loading, showError } = state;

  return (
    <Layout logoClass="logo_class">
      {showError ? (
        <div className="error_div">
          <h2 className="error">{showError}</h2>
        </div>
      ) : null}
      <Card cardClass="cardClass">
        <p className="forgot_header">Get back into your account</p>
        <p className="forgot_p">Choose a new password</p>
        <form onSubmit={handleSubmit}>
          <Input
            label="Password"
            type="password"
            placeholder="Enter new password"
            name="password"
            value={password}
            onChange={handleChange}
            size={0.7}
            color="#464646"
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            size={0.7}
            color="#464646"
          />
          {loading ? (
            <Button value="Loading" buttonClass="confirm_button" />
          ) : (
            <Button
              value="Reset Password"
              buttonClass="confirm_button"
              onClick={handleClick}
            />
          )}
        </form>
      </Card>
    </Layout>
  );
}
