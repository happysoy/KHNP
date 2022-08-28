// @mui
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
// config
import { HEADER, NAVBAR } from "../../config";
import DashboardHeader from "./header";
import NavbarVertical from "./navbar/NavbarVertical";

const MainStyle = styled(
  "main",
  {}
)(({ theme }) => ({
  flexGrow: 1,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
}));

export default function DashboardLayout({ children }) {
  return (
    <Box
      sx={{
        display: { lg: "flex" },
        minHeight: { lg: 1 },
      }}
    >
      <DashboardHeader />
      <NavbarVertical />
      <MainStyle>{children}</MainStyle>
    </Box>
  );
}
