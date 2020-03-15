import { styled } from '@material-ui/core/styles';
import styledComponents from 'styled-components';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/DeleteForever';

export const MoreButton = styled(Button)({
  color: '#c6c6c6',
  fontSize: 24,
  fontWeight: 'bold',
});

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
`;

export const Title = styledComponents.div`
  fontSize: 16px;
  fontWeight: bold;
  color: #444;
  padding-top: 25px;
`;
export const SubTitle = styledComponents.div`
  fontSize: 14px;
  fontWeight: bold;
  color: #666;
  padding-top: 5px;
`;

export const Data = styledComponents.div`
  fontSize: 16px;
  color: #666;
  padding-top: 5px;
`;
