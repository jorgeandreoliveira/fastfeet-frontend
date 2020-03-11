import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import api from '../../../../../services/api';
import { MoreButton, CustomVisibilityIcon, CustomDeleteIcon } from './styles';

export default function SimpleMenu(props) {
  // this.handleDelete = this.handleDelete.bind(this);

  const [anchorEl, setAnchorEl] = React.useState(null);

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
          <ListItemText primary="Visualizar" />
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
    </div>
  );
}
