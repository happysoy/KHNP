import PropTypes from "prop-types";
import { forwardRef } from "react";
// next
import NextLink from "next/link";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx }, ref) => {
  const theme = useTheme();

  const logo = (
    <Box
      ref={ref}
      component="img"
      src="http://ec2-3-35-235-172.ap-northeast-2.compute.amazonaws.com/img/logo.png"
      sx={{ width: 110, height: 40, cursor: "pointer", ...sx }}
    />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/">{logo}</NextLink>;
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
