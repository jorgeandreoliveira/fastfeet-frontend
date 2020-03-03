import React, { Component } from 'react';
import api from '../../../services/api';
import history from '../../../services/history';
import ModalSetup from '../../../components/Modal';
import DetailDelivery from './components/DetailDelivery';

import {
  Container,
  Titulo,
  Content,
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
      isModalOpen: false,
      delivery: {},
    };

    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  dismissable = () => {
    console.log('entrei');
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

  renderTableData(isModalOpen, children) {
    return this.state.deliveries.map(delivery => {
      const { id } = delivery;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{delivery.Recipient.name}</td>
          <td>{delivery.DeliveryMan.name}</td>
          <td>{delivery.Recipient.city}</td>
          <td>{delivery.Recipient.state}</td>
          <td>{delivery.status}</td>
          <td>
            <button onClick={() => this.handleModalOpen({ delivery })}>
              Visualizar
            </button>
            <ModalSetup
              visible={isModalOpen}
              dismiss={this.dissmissable}
              children={children}
            />
          </td>
          <td>
            <LinkEditar to={`/DeliveryStore/${id}`}>Editar</LinkEditar>
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
            <input
              onChange={this.handleChange}
              placeholder="Buscar por encomendas"
            />
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
