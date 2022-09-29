import PropTypes from 'prop-types';
import { useState } from 'react';
import { sentenceCase } from 'change-case';
// @mui
import { TableRow, Checkbox, TableCell, Typography, MenuItem } from '@mui/material';
// utils
import { fMegaByte } from '../../../utils/formatNumber';
import { fDate } from '../../../utils/formatTime';
// components
import Label from '../../../components/Label';
import Image from '../../../components/Image';
import Iconify from '../../../components/Iconify';
import { TableMoreMenu } from '../../../components/table';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

//

// ----------------------------------------------------------------------

DataTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function DataTableRow({ row, selected, onEditRow, onSelectRow, onDeleteRow }) {
  // const theme = useTheme();

  const {
    id,
    fileName,
    directory,
    fileSize,

    testPeriod,
  } = row;

  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  const theme = useTheme();
  const useStyles = makeStyles({
    tableCell: {
      '&:last-of-type': {
        paddingRight: theme.spacing(3),
      },
      '&:first-of-type': {
        paddingLeft: theme.spacing(3),
      },
    },
  });

  const classes = useStyles();

  return (
    <TableRow hover selected={selected}>
      <TableCell className={classes.tableCell} padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>
      <TableCell className={classes.tableCell}>{id}</TableCell>
      <TableCell sx={{ alignItems: 'center' }}>
        <Typography variant="subtitle2" noWrap>
          {fileName}
        </Typography>
      </TableCell>
      <TableCell>{directory}</TableCell>
      <TableCell>{fMegaByte(fileSize)} MB</TableCell>

      <TableCell>{fDate(testPeriod)}</TableCell>
      {/* <TableCell>{fDate(createdAt)}</TableCell> */}

      <TableCell className={classes.tableCell} align="right">
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem
                onClick={() => {
                  onDeleteRow();
                  handleCloseMenu();
                }}
                sx={{ color: 'error.main' }}
              >
                <Iconify icon={'eva:trash-2-outline'} />
                Delete
              </MenuItem>
            </>
          }
        />
      </TableCell>
    </TableRow>
  );
}
