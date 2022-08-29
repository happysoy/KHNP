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
import typography from "./typography";
import shadows, { customShadows } from "./shadows";

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(() => ({
    palette: palette.light,
    typography,
    // breakpoints,
    shape: { borderRadius: 8 },
    shadows: shadows.light,
    customShadows: customShadows.light,
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
