import PropTypes from "prop-types";
import { useEffect } from "react";
// next
import { useRouter } from "next/router";
// config
import { NAVBAR } from "../../../config";
// components
import NavSectionVertical from "src/components/nav-section/vertical";
// @mui
import { styled, useTheme } from "@mui/material/styles";
import { Box, Stack, Drawer } from "@mui/material";
//
import navConfig from "./NavConfig";
import palette from "src/theme/palette";

export default function NavbarVertical() {
  const theme = useTheme();

  const renderContent = (
    <>
      <NavSectionVertical navConfig={navConfig} />
    </>
  );

  return (
    <Drawer
      open
      variant="persistent"
      PaperProps={{
        sx: {
          width: NAVBAR.DASHBOARD_WIDTH,
          borderRightStyle: "dashed",
          marginTop: "64px",
          bgcolor: palette.default,
        },
      }}
    >
      {renderContent}
    </Drawer>
  );
}
