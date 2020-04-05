import { styled } from '@material-ui/core/styles';
import styledComponents from 'styled-components';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/DeleteForever';

export const MoreButton = styled(Button)({
  color: '#c6c6c6',
  fontSize: 24,
  fontWeight: 'bold',
});

export const CustomVisibilityIcon = styled(VisibilityIcon)({
  color: '#8E5BE8',
});

export const CustomDeleteIcon = styled(DeleteIcon)({
  color: '#DE3B3B',
});

export const DivModal = styledComponents.div`
  padding-left: 25px;
  padding-top: 25px;
`;

export const Title = styledComponents.div`
  font-size: 14px;
  font-weight: bold;
  color: #444;
  padding-top: 25px;
`;

export const Data = styledComponents.div`
  font-size: 16px;
  color: #666;
  padding-top: 4px;
`;

export const ButtonDelete = styledComponents.button`
  background: none !important;
  border: none;
  color: #999;
  font-size: 16px;
  padding-left: 2px;
  cursor: pointer;
`;
