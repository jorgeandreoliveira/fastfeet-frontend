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

export default class RecipientStore extends Component {
  constructor() {
    super();
    this.state = {
      recipient: [],
      recipients: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;

    if (match.params.id) {
      const response = await api.get(`/recipient/${match.params.id}`);

      this.setState({
        recipient: response.data,
      });
    } else {
      const response = await api.get('/recipient');

      console.log(response.data);

      this.setState({
        recipients: response.data,
      });
    }
  }

  async handleSubmit(data) {
    const { id, name, street, number, complement, state, city, zipcode } = data;

    if (this.state.recipient.id) {
      await api.put(`/recipient/${this.state.recipient.id}`, {
        id,
        name,
        street,
        number,
        complement,
        state,
        city,
        zipcode,
      });
    } else {
      await api.post('/recipient', {
        id,
        name,
        street,
        number,
        complement,
        state,
        city,
        zipcode,
      });
    }

    history.push('/RecipientList');
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
                    {'< Voltar'}
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
                  <h1>Rua</h1>
                </td>
                <td>
                  <h1>Número</h1>
                </td>
                <td>
                  <h1>Complemento</h1>
                </td>
              </tr>
              <tr>
                <td>
                  <Input name="street" />
                </td>
                <td>
                  <Input name="number" />
                </td>
                <td>
                  <Input name="complement" />
                </td>
              </tr>
              <tr>
                <td>
                  <h1>Cidade</h1>
                </td>
                <td>
                  <h1>Estado</h1>
                </td>
                <td>
                  <h1>CEP</h1>
                </td>
              </tr>
              <tr>
                <td>
                  <Input name="city" />
                </td>
                <td>
                  <Input name="state" />
                </td>
                <td>
                  <Input name="zipcode" />
                </td>
              </tr>
            </table>
          </List>
        </Form>
      </Container>
    );
  }
}
