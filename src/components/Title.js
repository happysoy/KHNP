import { Box, Typography } from "@mui/material";

export default function Title({ heading, desc }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h4">{heading}</Typography>
      <Typography variant="body2" sx={{ color: "text.disabled" }}>
        {desc}
      </Typography>
    </Box>
  );
}
