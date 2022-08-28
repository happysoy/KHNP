import PropTypes from "prop-types";
import { useMemo } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
//
import componentsOverride from "./overrides";
import palette from "./palette";

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(() => ({
    palette,
    typography,
    breakpoints,
    shape: { borderRadius: 8 },
    shadows,
  }));
  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
