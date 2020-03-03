import React, { Component } from 'react';
import api from '../../../services/api';
import history from '../../../services/history';

import {
  Container,
  Titulo,
  Content,
  Busca,
  List,
  LinkEditar,
  LinkApagar,
} from './styles';

export default class RecipientList extends Component {
  constructor() {
    super();
    this.state = {
      recipients: [],
      recipient: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    const response = await api.get('/recipient');

    this.setState({
      recipients: response.data,
    });
  }

  handleDelete(id) {
    api.delete(`/recipient/${id}`);
  }

  handleChange(e) {
    const filter = e.target.value;

    if (filter === '') {
      // this.setState({ alunos: ALUNOS_INITAL_STATE });
      return;
    }

    const listrecipients = this.state.recipients.filter(
      el => el.name.indexOf(filter) > -1
    );

    if (listrecipients.length > 0)
      this.setState({ recipients: listrecipients });
  }

  renderTableHeader() {
    return (
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Endereço</th>
        <th>Editar</th>
        <th>Excluir</th>
      </tr>
    );
  }

  renderTableData() {
    return this.state.recipients.map(recipient => {
      const { id } = recipient;
      return (
        <tr key={id}>
          <td>{recipient.id}</td>
          <td>{recipient.name}</td>
          <td>
            {recipient.street},{recipient.city} - {recipient.state}
          </td>
          <td>
            <LinkEditar to={`/recipient/${id}`}>Editar</LinkEditar>
          </td>
          <td>
            <LinkApagar to="" onClick={() => this.handleDelete(`${id}`)}>
              Excluir
            </LinkApagar>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <Titulo>
            <h1>Gerenciando destinatários</h1>
          </Titulo>
          <Busca>
            <input
              onChange={this.handleChange}
              placeholder="Buscar por destinatários"
            />
            <button
              type="button"
              onClick={() => history.push('/RecipientStore')}
            >
              + CADASTRAR
            </button>
          </Busca>
          <List>
            <tbody>
              {this.renderTableHeader()}
              {this.renderTableData()}
            </tbody>
          </List>
        </Content>
      </Container>
    );
  }
}
