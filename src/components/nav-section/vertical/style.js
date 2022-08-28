// @mui
import { alpha, styled } from "@mui/material/styles";
import {
  ListItemText,
  ListItemIcon,
  ListSubheader,
  ListItemButton,
} from "@mui/material";
// utils
import cssStyles from "../../../utils/cssStyles";
// config
import { ICON, NAVBAR } from "../../../config";

// ----------------------------------------------------------------------

export const ListItemStyle = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ active, depth, theme }) => ({
  flexDirection: "column",
  // height: "93px",
  position: "relative",
  textTransform: "capitalize",
  paddingTop: theme.spacing(2),
  // paddingLeft: theme.spacing(2),
  // paddingRight: theme.spacing(1.5),
  // marginBottom: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  // height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
  // Active item
  ...(active && {
    color: theme.palette.primary.main,
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
  }),
  // Active item
  ...(active &&
    depth !== 1 && {
      color: theme.palette.text.primary,
      backgroundColor: "transparent",
    }),
}));

// ----------------------------------------------------------------------

export const ListItemTextStyle = styled(
  ListItemText,
  {}
)(({ isCollapse, theme }) => ({
  // color: "red",
}));

// ----------------------------------------------------------------------

export const ListItemIconStyle = styled(ListItemIcon)({
  width: ICON.NAVBAR_ITEM,
  height: ICON.NAVBAR_ITEM,
  // display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": { width: "100%", height: "100%" },
});
