import React, { Component } from 'react';
import { Container, Header } from './styles';

export default class DetailDelivery extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
  }

  handleClose() {
    //this.props.visible = false;
  }

  render() {
    return (
      <>
        <Container>
          <Header>Informações da encomenda</Header>
          <label>
            {this.props.delivery.Recipient.street},
            {this.props.delivery.Recipient.number}
          </label>
          <label>
            {this.props.delivery.Recipient.city} -
            {this.props.delivery.Recipient.state}
          </label>
          <label>{this.props.delivery.Recipient.zipcode}</label>
          <Header>Datas</Header>
          <Header>Retirada</Header>
          <label>{this.props.delivery.start_date}</label>
          <Header>Entrega</Header>
          <label>{this.props.delivery.end_date}</label>
          <Header>Assinatura do destinatário</Header>
          <button type="submit" onClick={() => this.handleClose()}></button>
        </Container>
      </>
    );
  }
}
