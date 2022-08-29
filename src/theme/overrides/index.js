import CssBaseline from "./CssBaseline";

export default function componentsOverride(theme) {
  return Object.assign(CssBaseline(theme));
}
