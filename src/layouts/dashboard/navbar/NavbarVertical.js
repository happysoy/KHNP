import PropTypes from "prop-types";
import { useEffect } from "react";
import { useRouter } from "next/router";
// @mui
import { styled, useTheme } from "@mui/material/styles";
import { Box, Stack, Drawer } from "@mui/material";
// hooks
import useResponsive from "src/hooks/useResponsive";
import useCollapseDrawer from "src/hooks/useCollapseDrawer";
// utils
import cssStyles from "src/utils/cssStyles";
// config
import { NAVBAR } from "src/config";
// components
import Logo from "src/components/Logo";
import { NavSectionVertical } from "src/components/nav-section";
//
import navConfig from "./NavConfig";
import CollapseButton from "./CollapseButton";

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    transition: theme.transitions.create("width", {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

// ----------------------------------------------------------------------

NavbarVertical.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function NavbarVertical({ isOpenSidebar, onCloseSidebar }) {
  const theme = useTheme();
  const { pathname } = useRouter();
  const isDesktop = useResponsive("up", "lg");

  const {
    isCollapse,
    collapseClick,
    collapseHover,
    onToggleCollapse,
    onHoverEnter,
    onHoverLeave,
  } = useCollapseDrawer();

  useEffect(() => {
    if (isOpenSidebar) {
      console.log("열려있음");
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <>
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          px: 3,
          pl: 3.6,
          // flexShrink: 0,
          // display: "fixed",
          // alignItems: "center",
          // ...(isCollapse && { alignItems: "center" }),
        }}
      >
        <Logo isCollapse={isCollapse} />
      </Stack>
      <Box sx={{ flexGrow: 2 }} />

      <NavSectionVertical navConfig={navConfig} isCollapse={isCollapse} />

      <Box sx={{ flexGrow: 2 }} />
      <Box
        sx={{
          p: 3,
        }}
      >
        <CollapseButton
          sx={{ position: "absolute" }}
          onToggleCollapse={onToggleCollapse}
          collapseClick={collapseClick}
        />
      </Box>
    </>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: isCollapse
            ? NAVBAR.DASHBOARD_COLLAPSE_WIDTH
            : NAVBAR.DASHBOARD_WIDTH,
        },
        ...(collapseClick && {
          position: "absolute",
        }),
      }}
    >
      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          // onMouseEnter={onHoverEnter}
          // onMouseLeave={onHoverLeave}
          PaperProps={{
            sx: {
              width: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
              borderRightStyle: "dashed",
              bgcolor: "background.default",
              transition: (theme) =>
                theme.transitions.create("width", {
                  duration: theme.transitions.duration.standard,
                }),
              ...(!isCollapse && {
                width: NAVBAR.DASHBOARD_WIDTH,
              }),

              // ...cssStyles(theme).bgBlur(),
              // boxShadow: (theme) => theme.customShadows.,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
