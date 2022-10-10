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

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

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

  //   const logo = (
  //     <Box ref={ref} sx={{ width: 40, height: 40, cursor: "pointer", ...sx }}>
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="100%"
  //         height="100%"
  //         viewBox="0 0 512 512"
  //       >
  //         <defs>
  //           <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
  //             <stop offset="0%" stopColor={PRIMARY_DARK} />
  //             <stop offset="100%" stopColor={PRIMARY_MAIN} />
  //           </linearGradient>
  //           <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
  //             <stop offset="0%" stopColor={PRIMARY_LIGHT} />
  //             <stop offset="100%" stopColor={PRIMARY_MAIN} />
  //           </linearGradient>
  //           <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
  //             <stop offset="0%" stopColor={PRIMARY_LIGHT} />
  //             <stop offset="100%" stopColor={PRIMARY_MAIN} />
  //           </linearGradient>
  //         </defs>

  //         <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
  //           <path
  //             fill="url(#BG1)"
  //             d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"
  //           />
  //           <path
  //             fill="url(#BG2)"
  //             d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"
  //           />
  //           <path
  //             fill="url(#BG3)"
  //             d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"
  //           />
  //         </g>
  //       </svg>
  //     </Box>
  //   );

  if (disabledLink) {
    return <>{isCollapse ? cropLogo : null}</>;
  }

  return <NextLink href="/dashboard/auto-evaluation/">{isCollapse ? cropLogo : logo}</NextLink>;
});

export default Logo;
