// @mui
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
// config
import { HEADER, NAVBAR } from "../../config";
import DashboardHeader from "./header";

const MainStyle = styled("main", {
  shouldForwardProp: (prop) => prop !== "collapseClick",
})(({ collapseClick, theme }) => ({
  flexGrow: 1,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    transition: theme.transitions.create("margin-left", {
      duration: theme.transitions.duration.shorter,
    }),
    ...(collapseClick && {
      marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
    }),
  },
}));

export default function DashboardLayout({ children }) {
  return (
    <Box>
      <DashboardHeader />
      <MainStyle>{children}</MainStyle>
    </Box>
  );
}
