
import classNames from 'classnames';
import React from 'react';

import Button from '../../shared/Button';
import FormField from '../../shared/FormField';

import './LoginForm.css';

function LoginForm({ onSubmit, isLoading }) {

    const [credentials, setCredentials] = React.useState({
        email: '',
        password: '',
    });

    const handleChange = event => {
        setCredentials(oldCredentials => {
            const newCredentials = {
                ...oldCredentials,
                [event.target.name]: event.target.value,
            };
            return newCredentials;
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(credentials);
    }

    const { email, password} = credentials;

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <FormField
        type="text"
        name="email"
        label="phone, email or username"
        className="loginForm-field"
        value={email}
        onChange={handleChange}
      />
      <FormField
        type="password"
        name="password"
        label="password"
        className="loginForm-field"
        value={password}
        onChange={handleChange}
      />
      <Button 
        type="submit"
        className="loginForm-submit"
        variant="primary"
        disabled={isLoading || !email || !password}
        >
        Log in
      </Button>
    </form>
  );
}
export default LoginForm;
