import React, { Component } from 'react';
import api from '../../../services/api';
import history from '../../../services/history';
import Icon from '../../assets/search.png';
import Menu from './components/Menu';
import { Container, Titulo, Content, Busca, List } from './styles';

let DELIVERIES_INITAL_STATE = [];

export default class DeliveryList extends Component {
  constructor() {
    super();
    this.state = {
      deliveries: [],
      delivery: {},
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const response = await api.get('/deliveries');

    this.setState({
      deliveries: response.data,
    });

    DELIVERIES_INITAL_STATE = this.state.deliveries;
  }

  dismissable = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleChange(e) {
    const filter = e.target.value;

    if (filter === '') {
      this.setState({ deliveries: DELIVERIES_INITAL_STATE });
      return;
    }

    const listDeliveries = this.state.deliveries.filter(
      delivery => delivery.product.indexOf(filter) > -1
    );

    if (listDeliveries.length > 0)
      this.setState({ deliveries: listDeliveries });
    else this.setState({ deliveries: DELIVERIES_INITAL_STATE });
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
        <th>Ações</th>
      </tr>
    );
  }

  renderTableData() {
    return this.state.deliveries.map(delivery => {
      const { id } = delivery;
      return (
        <tr key={id}>
          <td>{id < 10 ? `#0${id}` : `#${id}`}</td>
          <td>{delivery.Recipient.name}</td>
          <td>{delivery.DeliveryMan.name}</td>
          <td>{delivery.Recipient.city}</td>
          <td>{delivery.Recipient.state}</td>
          <td>{delivery.status}</td>
          <td>
            <Menu delivery={delivery} />
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
            <h1>Gerenciando encomendas</h1>
          </Titulo>
          <Busca>
            <div style={{ border: '0px', position: 'relative' }}>
              <img src={Icon} alt="Pesquisar" />
              <input
                onChange={this.handleChange}
                placeholder="Buscar por encomendas"
              />
            </div>
            <button
              type="button"
              onClick={() => history.push('/DeliveryStore/0')}
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
