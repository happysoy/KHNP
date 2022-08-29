import PropTypes from "prop-types";
// @mui
import { Box } from "@mui/material";
import KeyboardTabOutlinedIcon from "@mui/icons-material/KeyboardTabOutlined";
// components
import AnimateIconButton from "src/components/animate/AnimateIconButton";

// ----------------------------------------------------------------------

CollapseButton.propTypes = {
  collapseClick: PropTypes.bool,
  onToggleCollapse: PropTypes.func,
};

export default function CollapseButton({ onToggleCollapse, collapseClick }) {
  return (
    <AnimateIconButton onClick={onToggleCollapse}>
      <Box
        sx={{
          lineHeight: 0,
          transition: (theme) =>
            theme.transitions.create("transform", {
              duration: theme.transitions.duration.shorter,
            }),
          ...(!collapseClick && {
            transform: "rotateY(180deg)",
          }),
        }}
      >
        <KeyboardTabOutlinedIcon />
      </Box>
    </AnimateIconButton>
  );
}
