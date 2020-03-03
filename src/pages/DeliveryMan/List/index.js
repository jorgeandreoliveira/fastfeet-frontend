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

export default class DeliveryManList extends Component {
  constructor() {
    super();
    this.state = {
      deliverymen: [],
      deliveryman: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    const response = await api.get('/deliveryman');

    this.setState({
      deliverymen: response.data,
    });
  }

  handleDelete(id) {
    api.delete(`/deliveryman/${id}`);
  }

  handleChange(e) {
    const filter = e.target.value;

    if (filter === '') {
      // this.setState({ alunos: ALUNOS_INITAL_STATE });
      return;
    }

    const listDeliveryMan = this.state.deliverymen.filter(
      el => el.name.indexOf(filter) > -1
    );

    if (listDeliveryMan.length > 0)
      this.setState({ deliverymen: listDeliveryMan });
  }

  renderTableHeader() {
    return (
      <tr>
        <th>ID</th>
        <th>Foto</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Editar</th>
        <th>Excluir</th>
      </tr>
    );
  }

  renderTableData() {
    return this.state.deliverymen.map(deliveryMan => {
      const { id } = deliveryMan;
      return (
        <tr key={id}>
          <td>{deliveryMan.id}</td>
          <td>{deliveryMan.avatar_id}</td>
          <td>{deliveryMan.name}</td>
          <td>{deliveryMan.email}</td>
          <td>
            <LinkEditar to={`/deliveryman/${id}`}>Editar</LinkEditar>
          </td>
          <td>
            <LinkApagar
              to=""
              onClickvdeliveryMan={() => this.handleDelete(`${deliveryMan.id}`)}
            >
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
            <h1>Gerenciando entregadores</h1>
          </Titulo>
          <Busca>
            <input
              onChange={this.handleChange}
              placeholder="Buscar por entregadores"
            />
            <button
              type="button"
              onClick={() => history.push('/DeliveryManStore')}
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
