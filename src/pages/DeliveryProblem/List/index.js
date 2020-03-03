import React, { Component } from 'react';
import api from '../../../services/api';
import DetailDeliveryProblem from './components/DetailDeliveryProblem';

import {
  Container,
  Titulo,
  Content,
  List,
  LinkEditar,
  LinkApagar,
} from './styles';

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
    console.log(response.data);
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
        <th>Visualizar</th>
        <th>Cancelar encomenda</th>
      </tr>
    );
  }

  renderTableData() {
    return this.state.deliveryProblems.map(deliveryProblem => {
      const { id } = deliveryProblem;
      return (
        <tr key={id}>
          <td>{deliveryProblem.delivery_id}</td>
          <td>{deliveryProblem.description}</td>
          <td>
            <LinkEditar onClick={() => this.handleModalOpen({ id })}>
              Visualizar
            </LinkEditar>
          </td>
          <td>
            <LinkApagar
              to=""
              onClick={() =>
                this.handleDelete(`${deliveryProblem.delivery_id}`)
              }
            >
              Cancelar encomenda
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
