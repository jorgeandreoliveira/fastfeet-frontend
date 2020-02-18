import React, { Component } from 'react';
import api from '../../../services/api';
import history from '../../../services/history';

import {
  Container,
  Content,
  Profile,
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

    console.log('entrei');

    this.setState({
      deliveries: response.data,
    });

    console.log(this.state.deliveries);
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
    return this.state.deliveries.map((delivery, index) => {
      // const { id, recipient, deliveryman, city, state, status } = delivery;
      const { id, city, state } = delivery;
      return (
        <tr key={id}>
          {/* <td>{recipient}</td>
          <td>{deliveryman}</td> */}
          <td>{city}</td>
          <td>{state}</td>
          {/* <td>{status}</td> */}
          <td>
            <LinkEditar to={`/delivery/${delivery.id}`}>Visualizar</LinkEditar>
          </td>
          <td>
            <LinkEditar to={`/delivery/${delivery.id}`}>editar</LinkEditar>
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
      delivery => delivery.product.indexOf(filter) > -1
    );

    if (listDeliveries.length > 0)
      this.setState({ deliveries: listDeliveries });
  }

  render() {
    return (
      <Container>
        <Content>
          <nav>
            <h1>Gerenciando encomendas</h1>
          </nav>
          <aside>
            <Profile>
              <div>
                <button onClick={() => history.push('/CreateDelivery')}>
                  + CADASTRAR
                </button>
                <input
                  onChange={this.handleChange}
                  placeholder="Buscar por encomendas"
                />
              </div>
            </Profile>
          </aside>
        </Content>
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
