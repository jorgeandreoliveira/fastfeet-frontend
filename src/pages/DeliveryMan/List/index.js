import React, { Component } from 'react';
import api from '../../../services/api';
import history from '../../../services/history';
import Icon from '../../assets/search.png';
import Menu from './components/Menu';

import { Container, Titulo, Content, Busca, List } from './styles';

let DELIVERYMEN_INITAL_STATE = [];

export default class DeliveryManList extends Component {
  constructor() {
    super();
    this.state = {
      deliverymen: [],
      isModalOpen: false,
      deliveryman: {},
    };

    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const response = await api.get('/deliveryman');

    this.setState({
      deliverymen: response.data,
    });

    DELIVERYMEN_INITAL_STATE = this.state.deliverymen;
  }

  dismissable = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleModalOpen(selectedDeliveryMan) {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      deliveryman: selectedDeliveryMan.deliveryMan,
    });
  }

  handleChange(e) {
    const filter = e.target.value;

    if (filter === '') {
      this.setState({ deliverymen: DELIVERYMEN_INITAL_STATE });
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
        <th>Ações</th>
      </tr>
    );
  }

  renderTableData() {
    return this.state.deliverymen.map(deliveryMan => {
      const { id } = deliveryMan;
      return (
        <tr key={id}>
          <td>{id < 10 ? `#0${id}` : { id }}</td>
          <td>{deliveryMan.avatar_id}</td>
          <td>{deliveryMan.name}</td>
          <td>{deliveryMan.email}</td>
          <td>
            <Menu id={id} />
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
            <div style={{ border: '0px', position: 'relative' }}>
              <img src={Icon} alt="Search" />
              <input
                onChange={this.handleChange}
                placeholder="Buscar por entregadores"
              />
            </div>
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
