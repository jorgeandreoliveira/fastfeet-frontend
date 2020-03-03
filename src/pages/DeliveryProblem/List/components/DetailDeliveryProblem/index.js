import React, { Component } from 'react';
import { Container, Header } from './styles';

export default class DetailDeliveryProblem extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <>
        <Container>
          <Header>VISUALIZAR PROBLEMA</Header>
          <label>{this.props.deliveryProblem.descrption}</label>
        </Container>
      </>
    );
  }
}
