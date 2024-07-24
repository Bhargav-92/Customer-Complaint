import { Form } from '@/components/ui/form';
import React from 'react';

const Login = () => {
  return (
    <div>
      <Form>
        <Form.Input label="Username" name="username" />
        <Form.Input label="Password" name="password" type="password" />
        <Form.Submit label="Login" />
      </Form>
    </div>
  );
};

export default Login;
