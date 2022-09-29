import { TableRow, Checkbox, TableCell, Typography, MenuItem, Link, Switch } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { RHFSwitch } from 'src/components/hook-form';
import VerificationMethod from './VerificationMethod';
// ----------------------------------------------------------------------

export default function ErrorDataTableRow({
  row,
  selected,
  onSelectRow,
  onViewRow,
  // onSelectRow,
}) {
  // const theme = useTheme();

  const { id, fileName, textEval, volts, deg, depth, channel, location } = row;
  const { control } = useFormContext();

  return (
    <TableRow hover selected={selected}>
      <TableCell sx={{ textAlign: 'center' }}>{id}</TableCell>
      <TableCell sx={{ alignItems: 'center' }}>
        <Link
          noWrap
          variant="subtitle2"
          onClick={onViewRow}
          sx={{ display: 'flex', justifyContent: 'center', color: 'text.disabled', cursor: 'pointer' }}
        >
          {fileName}
        </Link>
      </TableCell>
      <TableCell sx={{ textAlign: 'center' }}>{textEval}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>{volts}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>{deg}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>{depth}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>{channel}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>{location}</TableCell>

      <TableCell padding="checkbox">
        <RHFSwitch name={fileName} checked={selected} onClick={onSelectRow} />
      </TableCell>
    </TableRow>
  );
}
