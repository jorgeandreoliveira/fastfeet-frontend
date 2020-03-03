import React, { Component } from 'react';
import { Form, Input } from '@rocketseat/unform';
// import * as Yup from 'yup';
import api from '../../../services/api';
import history from '../../../services/history';

import {
  Container,
  Content,
  Profile,
  ButtonVoltar,
  ButtonSalvar,
  List,
} from './styles';

/* const schema = Yup.object().shape({
  nome: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('e-mail é obrigatório'),
  idade: Yup.number()
    .integer()
    .required('Idade é obrigatória')
    .positive('Idade inválida'),
}); */

export default class DeliveryManStore extends Component {
  constructor() {
    super();
    this.state = {
      deliveryMan: [],
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
          /* schema={schema} */
          onSubmit={this.handleSubmit}
          /* initialData={this.state.recipient} */
        >
          <Content>
            <h1>Edição de destinatário</h1>
            <aside>
              <Profile>
                <div>
                  <ButtonVoltar onClick={() => history.push('/RecipientList')}>
                    Voltar
                  </ButtonVoltar>
                  <ButtonSalvar type="submit">Salvar</ButtonSalvar>
                </div>
              </Profile>
            </aside>
          </Content>
          <List>
            <table>
              <tr>
                <td>
                  <h1>Nome</h1>
                </td>
              </tr>
              <tr>
                <td>
                  <Input name="name" />
                </td>
              </tr>
              <tr>
                <td>
                  <h1>Email</h1>
                </td>
              </tr>
              <tr>
                <td>
                  <Input name="email" />
                </td>
              </tr>
            </table>
          </List>
        </Form>
      </Container>
    );
  }
}
