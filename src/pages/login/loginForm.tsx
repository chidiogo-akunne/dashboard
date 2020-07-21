import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiEmailOpenOutline, mdiLockOutline } from '@mdi/js';
import ClipLoader from 'react-spinners/ClipLoader';

import Layout from '../../components/layout';
import Card from '../../commons/card';
import Input from '../../commons/input';
import Button from '../../commons/button';

import './styles.scss';

export default ({
  onSubmit,
  loading,
}: {
  onSubmit: (payload: { email: string; password: string }) => void;
  loading: boolean;
}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const { email, password } = state;

  const handleChange = (event: any) => {
    event.persist();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <Layout logoClass="login_logo">
      <Card cardClass="cardClass">
        <form onSubmit={handleSubmit}>
          <p>Sign in to your account.</p>
          <Input
            label="Email"
            type="email"
            placeholder="mail@email.com"
            name="email"
            value={email}
            onChange={handleChange}
            path={mdiEmailOpenOutline}
            size={0.7}
            color="#464646"
          />
          <Input
            label="Password"
            type="password"
            placeholder="********"
            name="password"
            value={password}
            onChange={handleChange}
            path={mdiLockOutline}
            size={0.7}
            color="#464646"
          />
          {loading ? (
            <div className="button_spinner">
              <ClipLoader size={30} color={'#123abc'} />
            </div>
          ) : (
            <Button
              value="Login"
              buttonClass="button_class"
              disabled={loading}
            />
          )}
        </form>
        <p className="account forgot_password">
          <Icon path={mdiLockOutline} size={0.7} color="#1b51e5" />
          <Link to="/forgot-password">Forgot password?</Link>
        </p>
      </Card>
    </Layout>
  );
};
