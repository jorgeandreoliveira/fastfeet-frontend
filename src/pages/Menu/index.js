import React from 'react';
// import { parseISO, format, zonedTimeToUtc } from 'date-fns';
import Menu from '@material-ui/core/Menu';
import Modal from 'react-awesome-modal';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import api from '../../services/api';
import {
  MoreButton,
  CustomVisibilityIcon,
  CustomEditIcon,
  CustomDeleteIcon,
  Title,
  SubTitle,
  DivModal,
  Data,
} from './styles';

export default function SimpleMenu(props) {
  // console.log(props.delivery.Recipient.start_date);
  // console.log(parseISO(props.delivery.Recipient.start_date));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [visible, setVisible] = React.useState(false);

  // const [startDate, setStartDate] = React.useState(
  //   props.delivery.Recipient.start_date
  // );

  function openModal() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = id => {
    api.delete(`/delivery/${id}`);
    window.location.reload(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
          <ListItemText primary="Visualizar" onClick={() => openModal()} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CustomEditIcon fontSize="small" />
          </ListItemIcon>
          <Link to={`/DeliveryStore/${props.delivery.id}`}>Editar</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CustomDeleteIcon fontSize="small" />
          </ListItemIcon>
          <Link
            to=""
            onClick={() => {
              if (window.confirm('Deseja excluir esta encomenda?'))
                handleDelete(`${props.delivery.id}`);
            }}
          >
            Excluir
          </Link>
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
            {props.delivery.Recipient.street},{props.delivery.Recipient.number}
          </Data>
          <Data>
            {props.delivery.Recipient.city} - {props.delivery.Recipient.state}
          </Data>
          <Data>{props.delivery.Recipient.zipcode}</Data>
          <Title>Datas</Title>
          <SubTitle>Retirada:</SubTitle>
          <Data>{props.delivery.start_date}</Data>
          <SubTitle>Entrega:</SubTitle>
          <Data>{props.delivery.end_date}</Data>
          <Title>Assinatura do destinatário</Title>
          {/* <a href="javascript:void(0);" onClick={() => closeModal()}>
            Close
          </a> */}
        </DivModal>
      </Modal>
    </div>
  );
}
