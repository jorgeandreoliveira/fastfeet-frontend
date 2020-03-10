import React, { Component } from 'react';
import api from '../../../services/api';
import history from '../../../services/history';
import ModalSetup from '../../../components/Modal';
import DetailDelivery from './components/DetailDelivery';
import Icon from '../../assets/search.png';

import { Container, Titulo, Content, Busca, List } from './styles';

import Menu from '../../Menu';

let DELIVERIES_INITAL_STATE = [];

export default class DeliveryList extends Component {
  constructor() {
    super();
    this.state = {
      deliveries: [],
      isModalOpen: false,
      delivery: {},
    };

    this.handleModalOpen = this.handleModalOpen.bind(this);
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

  handleModalOpen(selectedDelivery) {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      delivery: selectedDelivery.delivery,
    });
  }

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
        <th>Visualizar</th>
      </tr>
    );
  }

  renderTableData(isModalOpen, children) {
    return this.state.deliveries.map(delivery => {
      const { id } = delivery;
      return (
        <tr key={id}>
          <td>{id < 10 ? `#0${id}` : { id }}</td>
          <td>{delivery.Recipient.name}</td>
          <td>{delivery.DeliveryMan.name}</td>
          <td>{delivery.Recipient.city}</td>
          <td>{delivery.Recipient.state}</td>
          <td>{delivery.status}</td>
          <td>
            <Menu id={id} />
          </td>
          <td>
            <button
              type="button"
              onClick={() => this.handleModalOpen({ delivery })}
            >
              Visualizar
            </button>
            <ModalSetup
              visible={isModalOpen}
              dismiss={this.dissmissable}
              children={children}
            />
          </td>
        </tr>
      );
    });
  }

  render() {
    const { isModalOpen } = this.state;
    let children;
    if (isModalOpen) {
      children = <DetailDelivery delivery={this.state.delivery} />;
    }
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
              onClick={() => history.push('/DeliveryStore')}
            >
              + CADASTRAR
            </button>
          </Busca>
          <List>
            {this.renderTableHeader()}
            {this.renderTableData(this.state.isModalOpen, children)}
          </List>
        </Content>
      </Container>
    );
  }
}
