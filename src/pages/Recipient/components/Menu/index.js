import React from 'react';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import api from '~/services/api';
import {
  MoreButton,
  CustomEditIcon,
  CustomDeleteIcon,
  ButtonDelete,
  MenuLink,
} from './styles';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { id } = props;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = recipient_id => {
    api.delete(`/recipient/${recipient_id}`);
    window.location.reload(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const submit = () => {
    confirmAlert({
      title: '',
      message: 'Deseja excluir este destinatário?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => handleDelete(`${id}`),
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
            <CustomEditIcon fontSize="small" />
          </ListItemIcon>
          <MenuLink to={`/RecipientStore/${id}`}>Editar</MenuLink>
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
    </div>
  );
}

SimpleMenu.propTypes = {
  id: PropTypes.number.isRequired,
};
