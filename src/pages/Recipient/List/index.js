import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import api from '~/services/api';
import history from '~/services/history';
import Icon from '../../assets/search.png';

import {
  Container,
  Titulo,
  Content,
  Busca,
  List,
  ImageButton,
  TextButton,
} from './styles';

import Menu from '../components/Menu';

let RECIPIENT_INITAL_STATE = [];

export default class RecipientList extends Component {
  constructor() {
    super();
    this.state = {
      recipients: [],
      isModalOpen: false,
    };

    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const response = await api.get('/recipient');

    this.setState({
      recipients: response.data,
    });

    const { recipients } = this.state;

    RECIPIENT_INITAL_STATE = recipients;
  }

  dismissable = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleModalOpen() {
    const { isModalOpen } = this.state;

    this.setState({
      isModalOpen: !isModalOpen,
    });
  }

  handleChange(e) {
    const filter = e.target.value;

    if (filter === '') {
      this.setState({ recipients: RECIPIENT_INITAL_STATE });
      return;
    }

    const { recipients } = this.state;

    const listrecipients = recipients.filter(
      el => el.name.indexOf(filter) > -1
    );

    if (listrecipients.length > 0)
      this.setState({ recipients: listrecipients });
  }

  renderTableHeader() {
    return (
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Endereço</th>
        <th>Ações</th>
      </tr>
    );
  }

  renderTableData() {
    const { recipients } = this.state;

    return recipients.map(recipient => {
      const { id } = recipient;
      return (
        <tr key={id}>
          <td>{id < 10 ? `#0${id}` : `#${id}`}</td>
          <td>{recipient.name}</td>
          <td>
            {recipient.street}, {recipient.number}, {recipient.city} -{' '}
            {recipient.state}
          </td>
          <td>
            <Menu id={id} />
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
            <h1>Gerenciando destinatários</h1>
          </Titulo>
          <Busca>
            <div style={{ border: '0px', position: 'relative' }}>
              <img src={Icon} alt="Search" />
              <input
                onChange={this.handleChange}
                placeholder="Buscar por destinatários"
              />
            </div>
            <ImageButton
              type="button"
              onClick={() => history.push(`/RecipientStore/${0}`)}
            >
              <AddIcon />
              <TextButton>CADASTRAR</TextButton>
            </ImageButton>
          </Busca>
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
