import { Box } from "@mui/material";
import NavItem from "./NavItem";

export default function NavSectionVertical({ navConfig, ...other }) {
  return (
    <Box {...other}>
      {navConfig.map((item) => (
        <NavItem
          // active={active}
          key={item.title}
          disablePadding
          sx={{ px: 2 }}
          data={item}
          depth={1}
        />
      ))}
    </Box>
  );
}
