import { Box, Typography } from "@mui/material";

export default function Title({ heading, desc, action }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4">{heading}</Typography>
          <Typography variant="body2" sx={{ color: "text.disabled" }}>
            {desc}
          </Typography>
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
      </Box>
    </Box>
  );
}
