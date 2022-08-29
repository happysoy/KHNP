// @mui
import { styled } from "@mui/material/styles";
import { Stack, Toolbar, Box, AppBar } from "@mui/material";
// hooks
import useOffSetTop from "src/hooks/useOffSetTop";
import useResponsive from "src/hooks/useResponsive";
// components
// import Iconify from "src/components/Iconify";
import Logo from "src/components/Logo";
import { AnimateIconButton } from "src/components/animate";
// config
import { HEADER, NAVBAR } from "../../../config";
// utils
import cssStyles from "src/utils/cssStyles";
//
import Account from "./Account";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) =>
    prop !== "isCollapse" && prop !== "isOffset" && prop !== "verticalLayout",
})(({ isCollapse, isOffset, verticalLayout, theme }) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: "none",
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  // backgroundColor: theme.palette.background.default,
  background: "orange",
  transition: theme.transitions.create(["width", "height"], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("lg")]: {
    height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
    ...(isCollapse && {
      width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
    }),
    ...(isOffset && {
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
    }),
    ...(verticalLayout && {
      width: "100%",
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
      // backgroundColor: theme.palette.background.default,
    }),
  },
}));

export default function DashboardHeader({
  isCollapse = true,
  onOpenSidebar,
  verticalLayout = false,
}) {
  const isOffset =
    useOffSetTop(HEADER.DASHBOARD_DESKTOP_HEIGHT) && !verticalLayout;
  const isDesktop = useResponsive("up", "lg");
  return (
    <RootStyle isCollapse={isCollapse} isOffset={isOffset}>
      <Toolbar
        sx={{
          minHeight: "100% !important",
          px: { lg: 5 },
        }}
      >
        {isDesktop && verticalLayout && <Logo sx={{ mr: 2.5 }} />}

        {!isDesktop && (
          <AnimateIconButton
            onClick={onOpenSidebar}
            sx={{ mr: 1, color: "text.primary" }}
          >
            <MenuOutlinedIcon />
          </AnimateIconButton>
        )}
        <Box sx={{ flexGrow: 1 }} />
        <Stack>
          <Account />
        </Stack>
      </Toolbar>
    </RootStyle>
  );
}
