import PropTypes from 'prop-types';
// @mui
import { Dialog, DialogTitle, DialogActions } from '@mui/material';

// ----------------------------------------------------------------------

export default function InitConfirm({ title, subheader, actions, open, onClose }) {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <DialogTitle>
        {title}
        {subheader}
      </DialogTitle>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
}
