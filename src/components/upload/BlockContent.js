// @mui
import { Box, Typography, Stack } from "@mui/material";
// assets
import { UploadIllustration } from "../../assets";

// ----------------------------------------------------------------------

export default function BlockContent() {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      direction={{ xs: "column", md: "row" }}
      sx={{ width: 1, textAlign: { xs: "center", md: "left" } }}
    >
      {/* <UploadIllustration sx={{ width: 220 }} /> */}
      <Box sx={{ mr: 10 }}>
        <img src="/folder.png" width="120px" height="100px" alt="폴더사진" />
      </Box>
      <Box sx={{ p: 3 }}>
        <Typography gutterBottom variant="h5">
          파일을 드래그하거나 선택하세요
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          최대 파일 크기 00MB &nbsp;
          <Typography
            variant="body2"
            component="span"
            sx={{ color: "primary.main", textDecoration: "underline" }}
          >
            TODO 확장자 추가 및 용량 증대
          </Typography>
        </Typography>
      </Box>
    </Stack>
  );
}
