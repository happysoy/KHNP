const { IconButton, Box } = require("@mui/material");
const { forwardRef } = require("react");

function AnimateWrap({ size, children }) {
  return <Box sx={{ display: "inline-flex" }}>{children}</Box>;
}

const AnimateIconButton = forwardRef(
  ({ children, size = "medium", ...other }, ref) => (
    <AnimateWrap size={size}>
      <IconButton size={size} ref={ref} {...other}>
        {children}
      </IconButton>
    </AnimateWrap>
  )
);

export default AnimateIconButton;
