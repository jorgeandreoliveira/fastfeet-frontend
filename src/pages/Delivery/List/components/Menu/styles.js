import { styled } from '@material-ui/core/styles';
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/DeleteForever';

export const MoreButton = styled(Button)({
  color: '#c6c6c6',
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  width: 50,
});

export const Container = styledComponents.div`

`;

export const CustomVisibilityIcon = styled(VisibilityIcon)({
  color: '#8E5BE8',
});

export const CustomEditIcon = styled(EditIcon)({
  color: '#4D85EE',
});

export const CustomDeleteIcon = styled(DeleteIcon)({
  color: '#DE3B3B',
});

export const DivModal = styledComponents.div`
  padding-left: 25px;
  padding-top: 25px;

  img {
    margin: 15px 0;
    text-align: center;
    width: 250px;
    height: 36px;
    align-self: center;
  }
`;

export const Title = styledComponents.div`
  font-size: 16px;
  font-weight: bold;
  color: #444;
  padding-top: 25px;
`;
export const SubTitle = styledComponents.div`
  font-size: 14px;
  font-weight: bold;
  color: #666;
  padding-top: 5px;
`;

export const Data = styledComponents.div`
  font-size: 16px;
  color: #666;
  padding-top: 5px;
  padding-left: 2px;
`;

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

export const DataContainer = styledComponents.div`
  display: flex;
`;
