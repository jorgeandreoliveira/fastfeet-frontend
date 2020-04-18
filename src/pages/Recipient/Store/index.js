import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from '@rocketseat/unform';
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
  TextButton,
} from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  street: Yup.string().required('Rua é obrigatório'),
  number: Yup.number()
    .integer()
    .required('Número é obrigatório'),
  city: Yup.string().required('Cidade é obrigatório'),
  state: Yup.string().required('Estado é obrigatório'),
  zipcode: Yup.string().required('CEP é obrigatório'),
});

export default class RecipientStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: {},
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

    const { recipient } = this.state;
    if (recipient.id) {
      await api.put(`/recipient/${recipient.id}`, {
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
    const { recipient } = this.state;
    return (
      <Container>
        <Form
          schema={schema}
          onSubmit={this.handleSubmit}
          initialData={recipient}
        >
          <Content>
            <h1>Edição de destinatário</h1>
            <aside>
              <Profile>
                <ButtonVoltar onClick={() => history.push('/RecipientList')}>
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
            <h1>Nome</h1>
            <div>
              <InputName name="name" initialdata={recipient.name} />
            </div>
            <Wrapper>
              <Left>
                <h1>Rua</h1>
                <InputStreet name="street" initialdata={recipient.street} />
              </Left>
              <Middle>
                <h1>Número</h1>
                <InputNumber name="number" initialdata={recipient.number} />
              </Middle>
              <Right>
                <h1>Complemento</h1>
                <InputComplement
                  name="complement"
                  initialdata={recipient.complement}
                />
              </Right>
            </Wrapper>
            <Wrapper>
              <LeftCity>
                <h1>Cidade</h1>
                <InputCity name="city" initialdata={recipient.city} />
              </LeftCity>
              <MiddleState>
                <h1>Estado</h1>
                <InputState name="state" initialdata={recipient.state} />
              </MiddleState>
              <RightZipCode>
                <h1>CEP</h1>
                <div>
                  <InputZipCode
                    name="zipcode"
                    initialdata={recipient.zipcode}
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

RecipientStore.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }),
};
