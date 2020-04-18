import React from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';
import { confirmAlert } from 'react-confirm-alert';
import Menu from '@material-ui/core/Menu';
import Modal from 'react-awesome-modal';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import api from '~/services/api';

import {
  Container,
  MoreButton,
  CustomVisibilityIcon,
  CustomEditIcon,
  CustomDeleteIcon,
  Title,
  SubTitle,
  DivModal,
  Data,
  ButtonDelete,
  MenuLink,
  DataContainer,
} from './styles';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [visible, setVisible] = React.useState(false);

  const { delivery } = props;

  let startDate;
  let endDate;

  if (delivery.start_date)
    startDate = format(parseISO(delivery.start_date), "dd'/'MM'/'yyyy");

  if (delivery.end_date)
    endDate = format(parseISO(delivery.end_date), "dd'/'MM'/'yyyy");

  const text = {
    color: '#999',
    fontSize: 16,
  };
  function openModal() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = () => {
    const { id } = props.delivery;

    api.delete(`/delivery/${id}`);
    window.location.reload(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const submit = () => {
    confirmAlert({
      title: '',
      message: 'Deseja excluir esta encomenda?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => handleDelete(),
        },
        {
          label: 'Não',
          onClick: () => handleClose(),
        },
      ],
    });
  };

  return (
    <Container>
      <MoreButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        ...
      </MoreButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CustomVisibilityIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ style: text }}
            primary="Visualizar"
            onClick={() => openModal()}
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CustomEditIcon fontSize="small" />
          </ListItemIcon>
          <MenuLink to={`/DeliveryStore/${delivery.id}`}>Editar</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CustomDeleteIcon fontSize="small" />
          </ListItemIcon>
          <ButtonDelete type="button" onClick={submit}>
            Excluir
          </ButtonDelete>
        </MenuItem>
      </Menu>
      <Modal
        visible={visible}
        width="450"
        height="353"
        onClickAway={() => closeModal()}
      >
        <DivModal>
          <Title>Informações da encomenda</Title>
          <Data>
            {delivery.Recipient.street},{delivery.Recipient.number}
          </Data>
          <Data>
            {delivery.Recipient.city} - {delivery.Recipient.state}
          </Data>
          <Data>{delivery.Recipient.zipcode}</Data>
          <Title>Datas</Title>
          <DataContainer>
            <SubTitle>Retirada:</SubTitle>
            <Data>{startDate}</Data>
          </DataContainer>
          <DataContainer>
            <SubTitle>Entrega:</SubTitle>
            <Data>{endDate}</Data>
          </DataContainer>
          <Title>Assinatura do destinatário</Title>
          {delivery.signature && (
            <img
              src={delivery.signature.url}
              alt="Assinatura do destinatário"
            />
          )}
        </DivModal>
      </Modal>
    </Container>
  );
}

SimpleMenu.propTypes = {
  id: PropTypes.number.isRequired,
};
