import { Box, List } from "@mui/material";
import NavItem from "./NavItem";

export default function NavSectionVertical({
  navConfig,
  isCollapse,
  ...other
}) {
  return (
    <Box {...other}>
      {navConfig.map((item) => (
        // <List key={item.title} disablePadding sx={{ px: 2 }}>
        <NavItem
          isCollapse={isCollapse}
          key={item.title}
          data={item}
          depth={1}
        />
        // </List>
      ))}
    </Box>
  );
}
