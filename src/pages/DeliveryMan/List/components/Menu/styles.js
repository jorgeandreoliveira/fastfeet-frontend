import { styled } from '@material-ui/core/styles';
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/DeleteForever';

export const MoreButton = styled(Button)({
  color: '#c6c6c6',
  fontSize: 24,
  fontWeight: 'bold',
});

export const CustomEditIcon = styled(EditIcon)({
  color: '#4D85EE',
});

export const CustomDeleteIcon = styled(DeleteIcon)({
  color: '#DE3B3B',
});

export const ButtonDelete = styledComponents.button`
  background: none !important;
  border: none;
  color: #999;
  font-size: 16px;
  padding-left: 2px;
  cursor: pointer;
`;

export const MenuLink = styledComponents(Link)`
  color: #999;
  font-size: 16px;
  padding-left: 2px;
  padding-bottom: 5px;
`;
