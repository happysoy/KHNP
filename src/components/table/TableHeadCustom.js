import PropTypes from 'prop-types';
// @mui
import { Box, Checkbox, TableRow, TableCell, TableHead, TableSortLabel } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

// ----------------------------------------------------------------------

const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
};

// ----------------------------------------------------------------------

TableHeadCustom.propTypes = {
  onSort: PropTypes.func,
  orderBy: PropTypes.string,
  headLabel: PropTypes.array,
  rowCount: PropTypes.number,
  numSelected: PropTypes.number,
  onSelectAllRows: PropTypes.func,
  order: PropTypes.oneOf(['asc', 'desc']),
  sx: PropTypes.object,
};

export default function TableHeadCustom({
  order,
  orderBy,
  rowCount = 0,
  headLabel,
  numSelected = 0,
  onSort,
  onSelectAllRows,
  sx,
}) {
  const theme = useTheme();

  const useStyles = makeStyles({
    tableCell: {
      '&:last-of-type': {
        paddingRight: theme.spacing(3),
        borderTopRightRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        boxShadow: `inset -8px 0 0 ${theme.palette.background.paper}`,
      },
      '&:first-of-type': {
        paddingLeft: theme.spacing(3),
        borderTopLeftRadius: theme.shape.borderRadius,
        borderBottomLeftRadius: theme.shape.borderRadius,
        boxShadow: `inset 8px 0 0 ${theme.palette.background.paper}`,
      },
    },
  });

  const classes = useStyles();

  return (
    <TableHead sx={sx}>
      <TableRow>
        {onSelectAllRows && (
          <TableCell className={classes.tableCell} padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={(event) => onSelectAllRows(event.target.checked)}
            />
          </TableCell>
        )}

        {headLabel.map((headCell) => (
          <TableCell
            className={classes.tableCell}
            key={headCell.id}
            align={headCell.align || 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ width: headCell.width, minWidth: headCell.minWidth }}
          >
            {onSort ? (
              <TableSortLabel
                // hideSortIcon
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={() => onSort(headCell.id)}
                sx={{ textTransform: 'capitalize' }}
              >
                {headCell.label}

                {orderBy === headCell.id ? (
                  <Box sx={{ ...visuallyHidden }}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
