import { styled } from '@material-ui/core/styles';
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
