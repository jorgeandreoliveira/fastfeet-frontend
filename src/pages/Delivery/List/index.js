import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import api from '~/services/api';
import history from '~/services/history';
import Icon from '../../assets/search.png';
import Menu from './components/Menu';
import {
  Container,
  Titulo,
  Content,
  Busca,
  List,
  ImageButton,
  TextButton,
  Rectangle,
  Circle,
  Status,
} from './styles';

let DELIVERIES_INITAL_STATE = [];

export default class DeliveryList extends Component {
  constructor() {
    super();
    this.state = {
      deliveries: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const response = await api.get('/deliveries');

    this.setState({
      deliveries: response.data,
    });

    const { deliveries } = this.state;

    DELIVERIES_INITAL_STATE = deliveries;
  }

  handleChange(e) {
    const filter = e.target.value;

    const { deliveries } = this.state;

    if (filter === '') {
      this.setState({ deliveries: DELIVERIES_INITAL_STATE });
      return;
    }

    const listDeliveries = deliveries.filter(
      delivery => delivery.product.indexOf(filter) > -1
    );

    if (listDeliveries.length > 0)
      this.setState({ deliveries: listDeliveries });
    else this.setState({ deliveries: DELIVERIES_INITAL_STATE });
  }

  renderTableHeader() {
    return (
      <tr>
        <th>ID</th>
        <th>Destinatário</th>
        <th>Entregador</th>
        <th>Cidade</th>
        <th>Estado</th>
        <th>Status</th>
        <th>Ações</th>
      </tr>
    );
  }

  renderTableData() {
    const { deliveries } = this.state;

    return deliveries.map(delivery => {
      const { id, backgroundcolor, color } = delivery;

      return (
        <tr key={id}>
          <td>{id < 10 ? `#0${id}` : `#${id}`}</td>
          <td>{delivery.Recipient.name}</td>
          <td>{delivery.DeliveryMan.name}</td>
          <td>{delivery.Recipient.city}</td>
          <td>{delivery.Recipient.state}</td>
          <td>
            <Status>
              <Rectangle backgroundcolor={backgroundcolor} color={color}>
                <Circle backgroundcolor={color} />
                {delivery.status}
              </Rectangle>
            </Status>
          </td>
          <td>
            <Menu delivery={delivery} />
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
            <h1>Gerenciando encomendas</h1>
          </Titulo>
          <Busca>
            <div style={{ border: '0px', position: 'relative' }}>
              <img src={Icon} alt="Pesquisar" />
              <input
                onChange={this.handleChange}
                placeholder="Buscar por encomendas"
              />
            </div>
            <ImageButton
              type="button"
              onClick={() => history.push('/DeliveryStore/0')}
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
