import useAuth from "src/hooks/useAuth";
// next
import { useRouter } from "next/router";
// routes
import { PATH_DASHBOARD, PATH_AUTH } from "src/routes/paths";
// hooks
import { useState } from "react";
import { Box, Divider, MenuItem, Stack, Typography } from "@mui/material";
// components
import MenuPopover from "src/components/MenuPopover";
import AdminAvatar from "src/components/AdminAvatar";
import { AnimateIconButton } from "src/components/animate";

export default function Account() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.replace(PATH_AUTH.login);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AnimateIconButton onClick={handleOpen}>
        <AdminAvatar />
      </AnimateIconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          "& .MuiMenuItem-root": {
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />
        <MenuItem sx={{ m: 1 }}>Settings</MenuItem>
        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}
