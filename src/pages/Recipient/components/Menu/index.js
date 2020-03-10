import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import api from '../../../../services/api';
import { MoreButton, CustomEditIcon, CustomDeleteIcon } from './styles';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = id => {
    api.delete(`/recipient/${id}`);
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
            <CustomEditIcon fontSize="small" />
          </ListItemIcon>
          <Link to={`/RecipientStore/${props.id}`}>Editar</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CustomDeleteIcon fontSize="small" />
          </ListItemIcon>
          <Link
            to=""
            onClick={() => {
              if (window.confirm('Deseja excluir este destinatário?'))
                handleDelete(`${props.id}`);
            }}
          >
            Excluir
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
