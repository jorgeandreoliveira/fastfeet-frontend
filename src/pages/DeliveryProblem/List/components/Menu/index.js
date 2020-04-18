import React from 'react';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';
import Menu from '@material-ui/core/Menu';
import Modal from 'react-awesome-modal';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import api from '~/services/api';
import {
  MoreButton,
  CustomVisibilityIcon,
  CustomDeleteIcon,
  DivModal,
  Title,
  Data,
  ButtonDelete,
} from './styles';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [visible, setVisible] = React.useState(false);

  const { deliveryProblemDescription } = props;

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
    const { id } = props;

    api.put(`/problem/${id}/cancel-delivery`, {
      canceled_at: new Date(),
    });

    window.location.reload(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const submit = () => {
    confirmAlert({
      title: '',
      message: 'Deseja cancelar a encomenda?',
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
          <ButtonDelete type="button" onClick={submit}>
            Cancelar encomenda
          </ButtonDelete>
        </MenuItem>
      </Menu>
      <Modal
        visible={visible}
        width="450"
        height="425"
        onClickAway={() => closeModal()}
      >
        <DivModal>
          <Title>VISUALIZAR PROBLEMA</Title>
          <Data>{deliveryProblemDescription}</Data>
        </DivModal>
      </Modal>
    </div>
  );
}

SimpleMenu.propTypes = {
  deliveryProblemDescription: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
