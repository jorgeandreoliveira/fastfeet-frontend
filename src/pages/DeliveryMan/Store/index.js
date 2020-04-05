import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import history from '../../../services/history';
import api from '../../../services/api';

import {
  Container,
  Content,
  Profile,
  ButtonVoltar,
  ButtonSalvar,
  List,
} from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('e-mail é obrigatório'),
});

export default class DeliveryManStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveryMan: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;

    if (match.params.id && match.params.id > 0) {
      const response = await api.get(`/deliveryman/${match.params.id}`);

      this.setState({
        deliveryMan: response.data,
      });
    }
  }

  async handleSubmit(data) {
    const { id, avatar_id, name, email } = data;

    const { deliveryMan } = this.state;
    if (deliveryMan.id) {
      await api.put(`/deliveryman/${deliveryMan.id}`, {
        id,
        avatar_id,
        name,
        email,
      });
    } else {
      await api.post('/deliveryman', {
        id,
        avatar_id,
        name,
        email,
      });
    }

    history.push('/DeliveryManList');
  }

  render() {
    const { deliveryMan } = this.state;
    return (
      <Container>
        <Form
          schema={schema}
          onSubmit={this.handleSubmit}
          initialData={deliveryMan}
        >
          <Content>
            <h1>Edição de entregadores</h1>
            <aside>
              <Profile>
                <div>
                  <ButtonVoltar
                    onClick={() => history.push('/DeliveryManList')}
                  >
                    {'< Voltar'}
                  </ButtonVoltar>
                  <ButtonSalvar type="submit">Salvar</ButtonSalvar>
                </div>
              </Profile>
            </aside>
          </Content>
          <List>
            <table>
              <thead>
                <tr>
                  <td>
                    <h1>Nome</h1>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Input name="name" initialdata={deliveryMan.name} />
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <td>
                    <h1>Email</h1>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Input name="email" initialdata={deliveryMan.email} />
                  </td>
                </tr>
              </tbody>
            </table>
          </List>
        </Form>
      </Container>
    );
  }
}

DeliveryManStore.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }),
};
