import PropTypes from "prop-types";
import { useState } from "react";
import { sentenceCase } from "change-case";
// @mui
import { useTheme } from "@mui/material/styles";
import {
  TableRow,
  Checkbox,
  TableCell,
  Typography,
  MenuItem,
} from "@mui/material";
// utils
import { fDate } from "src/utils/formatTime";
import { fCurrency } from "src/utils/formatNumber";
// components
import Label from "src/components/Label";
import Image from "src/components/Image";
import Iconify from "src/components/Iconify";
import { TableMoreMenu } from "src/components/table";
//

// ----------------------------------------------------------------------

DataTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function DataTableRow({
  row,
  selected,
  // onEditRow,
  // onSelectRow,
  onDeleteRow,
}) {
  // const theme = useTheme();

  const {
    id,
    fileName,
    directory,
    fileSize,
    company,
    site,
    unitNo,
    equipment,
    testPeriod,
    tubeSetting,
    speed,
    detector,
    probe,
  } = row;

  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} />
        {/* onClick={onSelectRow} */}
      </TableCell>
      <TableCell>{id}</TableCell>
      <TableCell sx={{ alignItems: "center" }}>
        <Typography variant="subtitle2" noWrap>
          {fileName}
        </Typography>
      </TableCell>
      <TableCell>{directory}</TableCell>
      <TableCell>{fileSize}</TableCell>
      <TableCell>{company}</TableCell>
      <TableCell>{site}</TableCell>
      <TableCell>{unitNo}</TableCell>
      <TableCell>{equipment}</TableCell>
      <TableCell>{testPeriod}</TableCell>
      {/* <TableCell>{fDate(createdAt)}</TableCell> */}
      <TableCell>{tubeSetting}</TableCell>
      <TableCell>{speed}</TableCell>
      <TableCell>{detector}</TableCell>
      <TableCell>{probe}</TableCell>

      <TableCell align="right">
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
                sx={{ color: "error.main" }}
              >
                <Iconify icon={"eva:trash-2-outline"} />
                Delete
              </MenuItem>
              <MenuItem
                onClick={() => {
                  // onEditRow();
                  handleCloseMenu();
                }}
              >
                <Iconify icon={"eva:edit-fill"} />
                Edit
              </MenuItem>
            </>
          }
        />
      </TableCell>
    </TableRow>
  );
}
