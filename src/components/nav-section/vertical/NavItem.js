import { useRouter } from "next/router";
// @mui
import { List, Collapse, Link, Box } from "@mui/material";
import { getActive } from "..";
//
import { ListItemStyle, ListItemTextStyle, ListItemIconStyle } from "./style";
import { Navigate } from "react-router-dom";

export default function NavItem({ data, isCollapse, ...other }) {
  const { pathname, asPath, push } = useRouter();
  const { path, title, icon } = data;
  const active = getActive(path, pathname, asPath);
  const handleClickItem = () => {
    push(path);
  };

  return (
    <Box sx={{ margin: 2 }}>
      <ListItemStyle active={active} onClick={handleClickItem} {...other}>
        {icon && (
          <ListItemIconStyle sx={{ margin: -2 }}>{icon}</ListItemIconStyle>
        )}
        <ListItemTextStyle
          sx={{ margin: 2 }}
          isCollapse={isCollapse}
          primary={title}
          primaryTypographyProps={{
            noWrap: true,
            // variant: "caption",
            variant: active ? "subtitle2" : "body2",
            // textAlign: "center",
          }}
        />
      </ListItemStyle>
    </Box>
  );
}
