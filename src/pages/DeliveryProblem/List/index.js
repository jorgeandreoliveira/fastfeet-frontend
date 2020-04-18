import React, { Component } from 'react';
import api from '~/services/api';
import { Container, Titulo, Content, List } from './styles';
import Menu from './components/Menu';

export default class DeliveryProblemList extends Component {
  constructor() {
    super();
    this.state = {
      deliveryProblems: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/deliveryproblem');
    this.setState({
      deliveryProblems: response.data,
    });
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
    const { deliveryProblems } = this.state;
    return deliveryProblems.map(deliveryProblem => {
      const { id } = deliveryProblem;
      const { delivery_id } = deliveryProblem;
      return (
        <tr key={id}>
          <td>{delivery_id < 10 ? `#0${delivery_id}` : `#${delivery_id}`}</td>
          <td>{deliveryProblem.description}</td>
          <td>
            <Menu
              id={delivery_id}
              deliveryProblemDescription={deliveryProblem.description}
            />
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
