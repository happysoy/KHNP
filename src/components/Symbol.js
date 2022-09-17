import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Symbol = forwardRef(({ disabledLink = false, isCollapse, sx }, ref) => {
  const theme = useTheme();

  const logo = (
    <Box
      ref={ref}
      component="img"
      src="/cropLogo.png"
      sx={{
        width: 20,
        height: 22,
        cursor: 'pointer',
        ...sx,
      }}
    />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/">{logo}</NextLink>;
});

export default Symbol;
