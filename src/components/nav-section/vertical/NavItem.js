import { useRouter } from "next/router";
// @mui
import { List, Collapse, Link } from "@mui/material";
import { getActive } from "..";
//
import { ListItemStyle, ListItemTextStyle, ListItemIconStyle } from "./style";
import { Navigate } from "react-router-dom";

export default function NavItem({ data, ...other }) {
  const { pathname, asPath, push } = useRouter();
  const { path, title, icon } = data;
  const active = getActive(path, pathname, asPath);

  const handleClickItem = () => {
    push(path);
  };

  return (
    <ListItemStyle active={active} onClick={handleClickItem}>
      {icon && <ListItemIconStyle>{icon}</ListItemIconStyle>}
      <ListItemTextStyle
        primary={title}
        primaryTypographyProps={{
          // noWrap: true,
          variant: "caption",
          textAlign: "center",
        }}
      />
    </ListItemStyle>
  );
}
