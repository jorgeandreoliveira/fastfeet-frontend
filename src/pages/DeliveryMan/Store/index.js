import React, { Component } from 'react';
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
      deliveryMen: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;

    if (match.params.id) {
      const response = await api.get(`/deliveryman/${match.params.id}`);

      this.setState({
        deliveryMan: response.data,
      });
    } else {
      const response = await api.get('/deliveryman');

      this.setState({
        deliveryMen: response.data,
      });
    }
  }

  async handleSubmit(data) {
    const { id, avatar_id, name, email } = data;

    if (this.state.deliveryMan.id) {
      await api.put(`/deliveryman/${this.state.deliveryMan.id}`, {
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
    return (
      <Container>
        <Form
          schema={schema}
          onSubmit={this.handleSubmit}
          initialData={this.state.deliveryMan}
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
                    <Input
                      name="name"
                      initialData={this.state.deliveryMan.name}
                    />
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
                    <Input
                      name="email"
                      initialData={this.state.deliveryMan.email}
                    />
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
