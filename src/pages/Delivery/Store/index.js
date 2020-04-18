import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select } from '@rocketseat/unform';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import DoneIcon from '@material-ui/icons/Done';
import * as Yup from 'yup';
import history from '~/services/history';
import api from '~/services/api';

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
  TextButton,
} from './styles';

const schema = Yup.object().shape({
  recipient_id: Yup.string().required('Destinatário é obrigatório'),
  deliveryman_id: Yup.string().required('Entregador é obrigatório'),
  product: Yup.string().required('Nome do produto é obrigatório'),
});

export default class DeliveryStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delivery: {},
      recipient_id: {},
      deliveryman_id: {},
      recipients: [],
      deliveryMen: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setValueRecipient = this.setValueRecipient.bind(this);
    this.setValueDeliveryMan = this.setValueDeliveryMan.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;

    if (match.params.id && match.params.id > 0) {
      const response = await api.get(`/delivery/${match.params.id}`);

      this.setState({
        delivery: response.data,
        deliveryman_id: response.data.deliveryman_id,
        recipient_id: response.data.recipient_id,
      });
    }

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

  setValueRecipient(event) {
    this.setState({ recipient_id: event.target.value });
  }

  setValueDeliveryMan(event) {
    this.setState({ deliveryman_id: event.target.value });
  }

  async handleSubmit(data) {
    const { recipient_id, deliveryman_id, product } = data;

    const { delivery } = this.state;

    if (delivery.id) {
      await api.put(`/delivery/${delivery.id}`, {
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
    const {
      delivery,
      recipient_id,
      recipients,
      deliveryman_id,
      deliveryMen,
    } = this.state;

    return (
      <Container>
        <Form
          schema={schema}
          onSubmit={this.handleSubmit}
          initialData={delivery}
        >
          <Content>
            <h1>Edição de encomendas</h1>
            <aside>
              <Profile>
                <ButtonVoltar
                  type="button"
                  onClick={() => history.push('/DeliveryList')}
                >
                  <KeyboardArrowLeftIcon />
                  <TextButton>VOLTAR</TextButton>
                </ButtonVoltar>
                <ButtonSalvar type="submit">
                  <DoneIcon />
                  <TextButton>SALVAR</TextButton>
                </ButtonSalvar>
              </Profile>
            </aside>
          </Content>
          <List>
            <Wrapper>
              <Left>
                <h1>Destinatário</h1>
                <Select
                  value={recipient_id}
                  onChange={this.setValueRecipient}
                  name="recipient_id"
                  options={recipients}
                />
              </Left>
              <Right>
                <h1>Entregador</h1>
                <Select
                  value={deliveryman_id}
                  onChange={this.setValueDeliveryMan}
                  name="deliveryman_id"
                  options={deliveryMen}
                />
              </Right>
            </Wrapper>
            <Product>
              <h1>Nome do produto</h1>
            </Product>
            <div>
              <Input name="product" initialData={delivery.product} />
            </div>
          </List>
        </Form>
      </Container>
    );
  }
}

DeliveryStore.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }),
};
