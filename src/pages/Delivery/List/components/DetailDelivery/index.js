import React, { Component } from 'react';
import { Container, Header } from './styles';

export default class DetailDelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <>
        <Container>
          <Header>Informações da encomenda</Header>
          <label>
            `${this.props.delivery.question.street}, $
            {this.props.delivery.question.number}`
          </label>
          <label>
            `${this.props.delivery.question.city} - $
            {this.props.delivery.question.state}`
          </label>
          <label>{this.props.delivery.question.zipcode}</label>
          <Header>Datas</Header>
          <Header>Retirada</Header>
          <label>{this.props.delivery.question.start_date}</label>
          <Header>Entrega</Header>
          <label>{this.props.delivery.question.end_date}</label>
          <Header>Assinatura do destinatário</Header>
        </Container>
      </>
    );
  }
}
