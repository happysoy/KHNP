import CssBaseline from "./CssBaseline";
import Drawer from "./Drawer";

export default function componentsOverride(theme) {
  return Object.assign(CssBaseline(theme), Drawer(theme));
}
