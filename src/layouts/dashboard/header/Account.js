import useAuth from '../../../hooks/useAuth';
import { useSnackbar } from 'notistack';
// @mui
import { Box, Button, Divider, MenuItem, Stack, Tooltip, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
// next
import { useRouter } from 'next/router';
// routes
import { PATH_AUTH } from '../../../routes/paths';
// hooks
import { useState } from 'react';
// components
import MenuPopover from '../../../components/MenuPopover';
import AdminAvatar from '../../../components/AdminAvatar';
import { AnimateIconButton } from '../../../components/animate';
import Iconify from '../../../components/Iconify';
import useToggle from 'src/hooks/useToggle';
import InitConfirm from '../../../sections/dashboard/profile/InitConfirm';
import { useDispatch } from 'src/redux/store';
import { deleteData as deleteDataECT } from 'src/redux/slices/test-information';
import { deleteData as deleteDataAS } from 'src/redux/slices/analysis-setting';
import { clearData } from 'src/redux/slices/data';

export default function Account() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const { toggle: openConfirm, onOpen: onOpenConfirm, onClose: onCloseConfirm } = useToggle();

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

  const obj = {
    userName: user?.displayName,
  };

  const dispatch = useDispatch();

  const onDelete = async () => {
    try {
      dispatch(deleteDataECT({ obj })); // ect information
      dispatch(deleteDataAS({ obj })); //analysis setting
      dispatch(clearData({ obj })); // data load
      // analysis setting
      await new Promise((resolve) => setTimeout(resolve, 1000));
      enqueueSnackbar('성공적으로 초기화하였습니다');
      onCloseConfirm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AnimateIconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
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
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />
        {/* <MenuItem sx={{ m: 1 }}>Settings</MenuItem>
        <MenuItem sx={{ m: 1 }}>Profile</MenuItem> */}
        <Tooltip title="초기화">
          <MenuItem onClick={onOpenConfirm} sx={{ m: 1 }}>
            초기화
          </MenuItem>
        </Tooltip>

        <InitConfirm
          open={openConfirm}
          onClose={onCloseConfirm}
          title={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Iconify icon="eva:trash-2-outline" width={20} height={20} />
              <Typography sx={{ ml: 2 }}>
                정말 <strong>초기화</strong> 하시겠습니까?
              </Typography>
            </Box>
          }
          actions={
            <>
              <Button variant="outlined" color="inherit" onClick={onCloseConfirm}>
                취소
              </Button>
              <Button variant="contained" color="error" onClick={onDelete}>
                확인
              </Button>
            </>
          }
        />

        <Divider sx={{ borderStyle: 'dashed' }} />
        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}
