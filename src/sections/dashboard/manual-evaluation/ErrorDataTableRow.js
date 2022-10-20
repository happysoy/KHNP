import { Link, TableRow, Checkbox, TableCell, Typography, MenuItem, Switch } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { RHFSwitch } from 'src/components/hook-form';
import VerificationMethod from './VerificationMethod';
import { useTheme } from '@mui/material/styles';
import { makeStyles, styled } from '@mui/styles';
import { fShortenNumber } from '../../../utils/formatNumber';
// ----------------------------------------------------------------------

export default function ErrorDataTableRow({
  row,
  index,
  selected,
  onSelectRow,
  onViewRow,
  // onSelectRow,
}) {
  // const theme = useTheme();
  // console.log('야호', row);
  const { id, DEFECT_CODE, DEFECT_LOCATION, DEFECT_DEGREE, DEFECT_VOLT } = row;
  const { control } = useFormContext();

  const theme = useTheme();

  const useStyles = makeStyles({
    tableCell: {
      borderBottom: `2px dashed ${theme.palette.divider}`,
      '&:last-of-type': {
        borderBottom: 'none',
      },
    },
  });

  // const StyledLink = styled(Link)(({}) => ({
  //   '&:visited': {
  //     color: 'blue',
  //   },
  // }));

  const classes = useStyles();

  return (
    <>
      <TableRow className={classes.tableCell} hover selected={selected}>
        <TableCell sx={{ textAlign: 'center' }}>{index + 1}</TableCell>
        <TableCell className={classes.tableLink} sx={{ alignItems: 'center' }}>
          <Link
            noWrap
            variant="subtitle2"
            onClick={onViewRow}
            sx={{ color: theme.palette.action.disabled, cursor: 'pointer' }}
          >
            {row.pns}
          </Link>
        </TableCell>
        <TableCell>{DEFECT_CODE}</TableCell>
        <TableCell>{fShortenNumber(DEFECT_VOLT)}</TableCell>
        <TableCell>{fShortenNumber(DEFECT_DEGREE)}</TableCell>
        <TableCell>?</TableCell>
        <TableCell>1</TableCell>
        <TableCell>{row.DEFECT_LOCATION}</TableCell>

        <TableCell padding="checkbox" sx={{ textAlign: 'center' }}>
          <RHFSwitch name={row.id} checked={selected} onClick={onSelectRow} />
        </TableCell>
      </TableRow>
    </>
  );
}
