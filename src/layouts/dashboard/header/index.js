// @mui
import { styled } from "@mui/material/styles";
import { Stack, Toolbar, Box, AppBar } from "@mui/material";
// components
import Logo from "src/components/Logo";
// config
import { HEADER, NAVBAR } from "../../../config";
// utils
import cssStyles from "src/utils/cssStyles";
//
import Account from "./Account";

const RootStyle = styled(
  AppBar,
  {}
)(({ theme }) => ({
  ...cssStyles.apply(theme).bgBlur(),
  boxShadow: "none",
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  backgroundColor: theme.palette.background.neutral,
}));

export default function DashboardHeader() {
  return (
    <RootStyle>
      <Toolbar
        sx={{
          minHeight: "100% !important",
          px: { lg: 5 },
        }}
      >
        <Logo />
        <Box sx={{ flexGrow: 1 }} />
        <Stack>
          <Account />
        </Stack>
      </Toolbar>
    </RootStyle>
  );
}
