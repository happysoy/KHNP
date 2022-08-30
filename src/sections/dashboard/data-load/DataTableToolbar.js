import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import Iconify from "src/components/Iconify";

export default function DataTableToolbar({ filterName, onFilterName }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 2.5, px: 3 }}
    >
      <TextField
        placeholder="파일 이름으로 검색하세요"
        value={filterName}
        onChange={(event) => onFilterName(event.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify
                icon={"eva:search-fill"}
                sx={{ color: "text.disabled", width: 20, height: 20 }}
              />
            </InputAdornment>
          ),
        }}
      />
      <Tooltip title="Filter List">
        <IconButton>
          <Iconify icon={"ic:round-filter-list"} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
