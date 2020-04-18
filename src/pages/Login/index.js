import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '~/services/api';
import history from '~/services/history';
import { login } from '~/services/auth';

import Logo from '../assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  async function handleSubmit(data) {
    const { email, password } = data;

    const response = await api.post('/sessions', { email, password });

    const { token } = response.data;

    login(token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    history.push('/DeliveryList');
  }

  return (
    <>
      <img src={Logo} alt="Logo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <h2>SEU E-MAIL</h2>
        <Input
          name="email"
          autoFocus
          type="email"
          defaultValue="admin@fastfeet.com"
          placeholder="exemplo@email.com"
        />
        <h2>SUA SENHA</h2>
        <Input
          name="password"
          type="password"
          defaultValue="123456"
          placeholder="********"
        />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
