import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import DoneIcon from '@material-ui/icons/Done';
import * as Yup from 'yup';
import history from '~/services/history';
import api from '~/services/api';
import AvatarInput from './components/Avatar';

import {
  Container,
  Content,
  Profile,
  ButtonVoltar,
  ButtonSalvar,
  List,
  TextButton,
  Avatar,
} from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('e-mail é obrigatório'),
  avatar_id: Yup.number().required('Avatar'),
});

export default class DeliveryManStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveryMan: {},
      avatar: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;

    if (match.params.id && match.params.id > 0) {
      const response = await api.get(`/deliveryman/${match.params.id}`);

      this.setState({
        deliveryMan: response.data,
      });

      this.setState({
        avatar: this.state.deliveryMan.avatar,
      });
    }
  }

  async handleSubmit(data) {
    const { id, avatar_id, name, email } = data;

    const { deliveryMan } = this.state;
    if (deliveryMan.id) {
      await api.put(`/deliveryman/${deliveryMan.id}`, {
        id,
        avatar_id,
        name,
        email,
      });
    } else {
      await api.post('/deliveryman', {
        id,
        avatar_id,
        name,
        email,
      });
    }

    history.push('/DeliveryManList');
  }

  render() {
    const { deliveryMan } = this.state;
    const { avatar } = this.state;

    return (
      <Container>
        <Form
          schema={schema}
          onSubmit={this.handleSubmit}
          initialData={deliveryMan}
        >
          <Content>
            <h1>Edição de entregadores</h1>
            <aside>
              <Profile>
                <ButtonVoltar onClick={() => history.push('/DeliveryManList')}>
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
            <Avatar>
              <AvatarInput name="avatar_id" avatar={avatar} />
            </Avatar>
            <h1>Nome</h1>
            <Input name="name" initialdata={deliveryMan.name} />
            <h1>Email</h1>
            <Input name="email" initialdata={deliveryMan.email} />
          </List>
        </Form>
      </Container>
    );
  }
}

DeliveryManStore.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }),
};
