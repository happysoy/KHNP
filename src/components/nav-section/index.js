import { matchPath } from "react-router-dom";

export { default as NavSectionVertical } from "./vertical";

export function getActive(path, pathname) {
  return path ? !!matchPath({ path, end: false }, pathname) : false;
}
