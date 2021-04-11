import React from 'react';

import Button from '../../shared/Button';
import FormField from '../../shared/FormField';

import './LoginForm.css';

function LoginForm() {

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
  return (
    <form className="loginForm">
      <FormField
        type="text"
        name="email"
        label="phone, email or username"
        className="loginForm-field"
        value={credentials.username}
        onChange={handleChange}
      />
      <FormField
        type="password"
        name="password"
        label="password"
        className="loginForm-field"
        value={credentials.username}
        onChange={handleChange}
      />
      <Button type="submit" className="loginForm-submit" variant="primary">
        Log in
      </Button>
    </form>
  );
}
export default LoginForm;
