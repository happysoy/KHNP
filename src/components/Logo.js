import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, isCollapse, sx }, ref) => {
  const theme = useTheme();

  const cropLogo = (
    <Box
      ref={ref}
      component="img"
      src="/cropLogo.png"
      sx={{
        width: 27,
        height: 32,
        cursor: 'pointer',
        ...sx,
      }}
    />
  );
  const logo = (
    <Box display="flex">
      <Box
        ref={ref}
        component="img"
        src="/cropLogo.png"
        sx={{
          width: 27,
          height: 32,
          cursor: 'pointer',
          ...sx,
        }}
      />
      <Box
        ref={ref}
        component="img"
        src="/textLogo.png"
        sx={{
          ml: 1,
          width: '40%',
          height: 32,
          cursor: 'pointer',
          ...sx,
        }}
      />
    </Box>
  );

  if (disabledLink) {
    return <>{isCollapse ? cropLogo : null}</>;
  }

  return <NextLink href="/dashboard/auto-evaluation/">{isCollapse ? cropLogo : logo}</NextLink>;
});

export default Logo;
