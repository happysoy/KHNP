function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
};

export const PATH_PAGE = {
  page404: "/404",
};
export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  autoSignal: path(ROOTS_DASHBOARD, "/auto-signal"),
  dataLoad: path(ROOTS_DASHBOARD, "/data-load"),
  autoEvaluation: path(ROOTS_DASHBOARD, "/auto-evaluation"),
  autoResult: path(ROOTS_DASHBOARD, "/auto-result"),
  manualEvaluation: path(ROOTS_DASHBOARD, "/manual-evaluation"),
  report: path(ROOTS_DASHBOARD, "/report"),
};
