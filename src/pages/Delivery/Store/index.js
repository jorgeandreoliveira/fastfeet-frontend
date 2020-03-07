import React, { Component } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import history from '../../../services/history';
import api from '../../../services/api';

import {
  Container,
  Content,
  Profile,
  ButtonVoltar,
  ButtonSalvar,
  List,
  Wrapper,
  Left,
  Right,
  Product,
} from './styles';

const schema = Yup.object().shape({
  recipient_id: Yup.string().required('Destinatário é obrigatório'),
  deliveryman_id: Yup.string().required('Entregador é obrigatório'),
  product: Yup.string().required('Nome do produto é obrigatório'),
});

export default class DeliveryStore extends Component {
  constructor() {
    super();
    this.state = {
      delivery: [],
      recipients: [],
      deliveryMen: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;

    if (match.params.id) {
      const response = await api.get(`/delivery/${match.params.id}`);

      this.setState({
        delivery: response.data,
      });
    } else {
      const recipients = await api.get('/recipient');

      const listRecipients = recipients.data.map(v => ({
        id: v.id,
        title: v.name,
      }));

      this.setState({
        recipients: listRecipients,
      });

      const deliverymen = await api.get('/deliveryman');

      const listDeliveryMan = deliverymen.data.map(v => ({
        id: v.id,
        title: v.name,
      }));

      this.setState({
        deliveryMen: listDeliveryMan,
      });
    }
  }

  async handleSubmit(data) {
    const { recipient_id, deliveryman_id, product } = data;

    if (this.state.delivery.id) {
      await api.put(`/delivery/${this.state.delivery.id}`, {
        recipient_id,
        deliveryman_id,
        product,
      });
    } else {
      await api.post('/delivery', {
        recipient_id,
        deliveryman_id,
        product,
      });
    }

    history.push('/DeliveryList');
  }

  render() {
    return (
      <Container>
        <Form
          schema={schema}
          onSubmit={this.handleSubmit}
          initialData={this.state.delivery}
        >
          <Content>
            <h1>Edição de encomendas</h1>
            <aside>
              <Profile>
                <div>
                  <ButtonVoltar onClick={() => history.push('/DeliveryList')}>
                    {'< Voltar'}
                  </ButtonVoltar>
                  <ButtonSalvar type="submit">Salvar</ButtonSalvar>
                </div>
              </Profile>
            </aside>
          </Content>
          <List>
            <Wrapper>
              <Left>
                <h1>Destinatário</h1>
                <Select name="recipient_id" options={this.state.recipients} />
              </Left>
              <Right>
                <h1>Entregador</h1>
                <Select
                  name="deliveryman_id"
                  options={this.state.deliveryMen}
                />
              </Right>
            </Wrapper>
            <Product>
              <h1>Nome do produto</h1>
            </Product>
            <div>
              <Input name="product" />
            </div>
          </List>
        </Form>
      </Container>
    );
  }
}
