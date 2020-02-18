import React, { Component } from 'react';
import api from '../../../services/api';
import history from '../../../services/history';

import {
  Container,
  Titulo,
  Busca,
  List,
  LinkEditar,
  LinkApagar,
} from './styles';

export default class DeliveryList extends Component {
  constructor() {
    super();
    this.state = {
      deliveries: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    const response = await api.get('/deliveries');

    this.setState({
      deliveries: response.data,
    });
  }

  handleDelete(id) {
    api.delete(`/delivery/${id}`);
  }

  handleChange(e) {
    const filter = e.target.value;

    if (filter === '') {
      // this.setState({ alunos: ALUNOS_INITAL_STATE });
      return;
    }

    const listDeliveries = this.state.deliveries.filter(
      el => el.product.indexOf(filter) > -1
    );

    console.log(listDeliveries.length);

    if (listDeliveries.length > 0)
      this.setState({ deliveries: listDeliveries });
  }

  renderTableHeader() {
    return (
      <tr>
        <th>ID</th>
        <th>Destinatário</th>
        <th>Entregador</th>
        <th>Cidade</th>
        <th>Estado</th>
        <th>Status</th>
        <th>Visualizar</th>
        <th>Editar</th>
        <th>Excluir</th>
      </tr>
    );
  }

  renderTableData() {
    return this.state.deliveries.map(delivery => {
      return (
        <tr key={delivery.id}>
          <td>{delivery.id}</td>
          <td>{delivery.Recipient.name}</td>
          <td>{delivery.DeliveryMan.name}</td>
          <td>{delivery.Recipient.city}</td>
          <td>{delivery.Recipient.state}</td>
          <td>{delivery.status}</td>
          <td>
            <LinkEditar to={`/delivery/${delivery.id}`}>Visualizar</LinkEditar>
          </td>
          <td>
            <LinkEditar to={`/delivery/${delivery.id}`}>Editar</LinkEditar>
          </td>
          <td>
            <LinkApagar
              to=""
              onClick={() => this.handleDelete(`${delivery.id}`)}
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
        <Titulo>
          <h1>Gerenciando encomendas</h1>
        </Titulo>
        <Busca>
          <input
            onChange={this.handleChange}
            placeholder="Buscar por encomendas"
          />
        </Busca>
        <List>
          <tbody>
            {this.renderTableHeader()}
            {this.renderTableData()}
          </tbody>
        </List>
      </Container>
    );
  }
}
