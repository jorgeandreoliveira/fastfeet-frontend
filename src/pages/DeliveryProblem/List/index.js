import React, { Component } from 'react';
import api from '../../../services/api';
import DetailDeliveryProblem from './components/DetailDeliveryProblem';

import { Container, Titulo, Content, List } from './styles';

import Menu from './components/Menu';

export default class DeliveryProblemList extends Component {
  constructor() {
    super();
    this.state = {
      deliveryProblems: [],
      deliveryProblem: {},
      isModalOpen: false,
    };

    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    const response = await api.get('/deliveryproblem');
    this.setState({
      deliveryProblems: response.data,
    });
  }

  dismissable = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  async handleModalOpen(deliveryProblem) {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });

    const response = await api.get(`/deliveryproblem/${deliveryProblem.id}`);

    this.setState({
      deliveryProblem: response.data,
    });
  }

  handleDelete(id) {
    api.delete(`/deliveryproblem/${id}`);
  }

  renderTableHeader() {
    return (
      <tr>
        <th>Encomenda</th>
        <th>Problema</th>
        <th>Ações</th>
      </tr>
    );
  }

  renderTableData() {
    return this.state.deliveryProblems.map(deliveryProblem => {
      const { id } = deliveryProblem;
      const { delivery_id } = deliveryProblem;
      return (
        <tr key={id}>
          <td>{delivery_id < 10 ? `#0${delivery_id}` : { delivery_id }}</td>
          <td>{deliveryProblem.description}</td>
          <td>
            <Menu id={id} />
          </td>
        </tr>
      );
    });
  }

  render() {
    const { isModalOpen } = this.state;

    let children;
    if (isModalOpen) {
      children = (
        <DetailDeliveryProblem delivery={this.state.deliveryProblem} />
      );
    }
    return (
      <Container>
        <Content>
          <Titulo>
            <h1>Problemas na entrega</h1>
          </Titulo>
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
