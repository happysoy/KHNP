import { useState } from "react";
// @mui
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
// hooks
import useCollapseDrawer from "../../hooks/useCollapseDrawer";
// config
import { HEADER, NAVBAR } from "../../config";
//
import DashboardHeader from "./header";
import NavbarVertical from "./navbar/NavbarVertical";

const MainStyle = styled("main", {
  shouldForwardProp: (prop) => prop !== "collapseClick",
})(({ collapseClick, theme }) => ({
  flexGrow: 1,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  // marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
  [theme.breakpoints.up("lg")]: {
    paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    transition: theme.transitions.create("margin-right", {
      duration: theme.transitions.duration.shorter,
    }),
    ...(collapseClick && {
      marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
    }),
  },
}));

export default function DashboardLayout({ children }) {
  const { collapseClick, isCollapse } = useCollapseDrawer();
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: { lg: "flex" },
        minHeight: { lg: 1 },
      }}
    >
      <DashboardHeader
        isCollapse={isCollapse}
        onOpenSidebar={() => setOpen(true)}
      />

      <NavbarVertical
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />
      <MainStyle collapseClick={collapseClick}>{children}</MainStyle>
    </Box>
  );
}
