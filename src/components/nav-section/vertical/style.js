// @mui
import { alpha, styled } from '@mui/material/styles';
import { ListItemText, ListItemIcon, ListSubheader, ListItemButton } from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { ICON, NAVBAR } from '../../../config';

// ----------------------------------------------------------------------

export const ListItemStyle = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, depth, theme }) => ({
  textTransform: 'capitalize',

  marginBottom: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  borderRadius: '15px',
  height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,

  // Active item
  ...(active && {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  }),
}));

// ----------------------------------------------------------------------

export const ListItemTextStyle = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'isCollapse',
})(({ isCollapse, theme }) => ({
  transition: theme.transitions.create(['width', 'opacity'], {
    duration: theme.transitions.duration.shorter,
  }),
  ...(isCollapse && {
    width: 0,
    opacity: 0,
  }),
}));
