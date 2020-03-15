import React from 'react';
// import { parseISO, format, zonedTimeToUtc } from 'date-fns';
import Menu from '@material-ui/core/Menu';
import Modal from 'react-awesome-modal';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import api from '../../../../../services/api';
import {
  MoreButton,
  CustomVisibilityIcon,
  CustomDeleteIcon,
  DivModal,
  Title,
  Data,
} from './styles';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [visible, setVisible] = React.useState(false);

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
    api.delete(`/problem/:id/cancel-delivery/${id}`);
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
            <CustomDeleteIcon fontSize="small" />
          </ListItemIcon>
          <Link
            to=""
            onClick={() => {
              if (window.confirm('Deseja cancelar a encomenda?'))
                handleDelete(`${props.id}`);
            }}
          >
            Cancelar encomenda
          </Link>
        </MenuItem>
      </Menu>
      <Modal
        visible={visible}
        width="450"
        height="425"
        onClickAway={() => closeModal()}
      >
        <DivModal>
          <Title>Informações da encomenda</Title>
          <Data>{props.deliveryProblemDescription}</Data>
        </DivModal>
      </Modal>
    </div>
  );
}
