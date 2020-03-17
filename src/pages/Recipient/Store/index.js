import React, { Component } from 'react';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../../services/api';
import history from '../../../services/history';

import {
  Container,
  Content,
  Profile,
  ButtonVoltar,
  ButtonSalvar,
  List,
  InputName,
  InputStreet,
  InputNumber,
  InputComplement,
  InputCity,
  InputState,
  InputZipCode,
  Wrapper,
  Left,
  LeftCity,
  Middle,
  MiddleState,
  Right,
  RightZipCode,
} from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  street: Yup.string().required('Rua é obrigatório'),
  number: Yup.number()
    .integer()
    .required('Número é obrigatório'),
  // .positive('Número inválida'),
  city: Yup.string().required('Cidade é obrigatório'),
  state: Yup.string().required('Estado é obrigatório'),
  zipcode: Yup.string().required('CEP é obrigatório'),
});

export default class RecipientStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: {},
      recipients: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;

    if (match.params.id && match.params.id > 0) {
      const response = await api.get(`/recipient/${match.params.id}`);

      this.setState({
        recipient: response.data,
      });
    }
  }

  async handleSubmit(data) {
    const { id, name, street, number, complement, state, city, zipcode } = data;

    if (this.state.recipient.id) {
      await api.put(`/recipient/${this.state.recipient.id}`, {
        id,
        name,
        street,
        number,
        complement,
        state,
        city,
        zipcode,
      });
    } else {
      await api.post('/recipient', {
        id,
        name,
        street,
        number,
        complement,
        state,
        city,
        zipcode,
      });
    }

    history.push('/RecipientList');
  }

  render() {
    return (
      <Container>
        <Form
          schema={schema}
          onSubmit={this.handleSubmit}
          initialData={this.state.recipient}
        >
          <Content>
            <h1>Edição de destinatário</h1>
            <aside>
              <Profile>
                <div>
                  <ButtonVoltar onClick={() => history.push('/RecipientList')}>
                    {'< Voltar'}
                  </ButtonVoltar>
                  <ButtonSalvar type="submit">Salvar</ButtonSalvar>
                </div>
              </Profile>
            </aside>
          </Content>
          <List>
            <h1>Nome</h1>
            <div>
              <InputName name="name" initialData={this.state.recipient.name} />
            </div>
            <Wrapper>
              <Left>
                <h1>Rua</h1>
                <InputStreet
                  name="street"
                  initialData={this.state.recipient.street}
                />
              </Left>
              <Middle>
                <h1>Número</h1>
                <InputNumber
                  name="number"
                  initialData={this.state.recipient.number}
                />
              </Middle>
              <Right>
                <h1>Complemento</h1>
                <InputComplement
                  name="complement"
                  initialData={this.state.recipient.complement}
                />
              </Right>
            </Wrapper>
            <Wrapper>
              <LeftCity>
                <h1>Cidade</h1>
                <InputCity
                  name="city"
                  initialData={this.state.recipient.city}
                />
              </LeftCity>
              <MiddleState>
                <h1>Estado</h1>
                <InputState
                  name="state"
                  initialData={this.state.recipient.state}
                />
              </MiddleState>
              <RightZipCode>
                <h1>CEP</h1>
                <div>
                  <InputZipCode
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                    name="zipcode"
                    initialData={this.state.recipient.zipcode}
                  />
                </div>
              </RightZipCode>
            </Wrapper>
          </List>
        </Form>
      </Container>
    );
  }
}
