import { useRouter } from "next/router";
// @mui
import { List, Collapse, Link, Box, Icon } from "@mui/material";
import { getActive } from "..";

import { ICON } from "../../../config";
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
    <ListItemStyle
      sx={{ margin: 2 }}
      active={active}
      onClick={handleClickItem}
      {...other}
    >
      {icon && (
        <>
          <Icon
            sx={{ display: "flex" }}
            height={ICON.NAVBAR_ITEM}
            width={ICON.NAVBAR_ITEM}
          >
            {icon}
          </Icon>

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
        </>
      )}
    </ListItemStyle>
  );
}
