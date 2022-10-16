function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
};

export const PATH_PAGE = {
  page404: '/404',
};
export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  // autoSignal: path(ROOTS_DASHBOARD, "/auto-signal"),
  dataLoad: {
    root: path(ROOTS_DASHBOARD, '/data-load'),
    new: path(ROOTS_DASHBOARD, '/data-load/data/new'),
    view: (id) => path(ROOTS_DASHBOARD, `/data-load/data/${id}`),
    edit: (id) => path(ROOTS_DASHBOARD, `/data-load/data/${id}/edit`),
    analysisSetting: path(ROOTS_DASHBOARD, '/data-load/analysis-setting'),
  },
  autoEvaluation: path(ROOTS_DASHBOARD, '/auto-evaluation'),
  ect: path(ROOTS_DASHBOARD, '/auto-evalation/ect'),
  autoResult: path(ROOTS_DASHBOARD, '/auto-result'),
  manualEvaluation: {
    root: path(ROOTS_DASHBOARD, '/manual-evaluation'),
    view: (id) => path(ROOTS_DASHBOARD, `/manual-evaluation/${id}`),
  },
  report: path(ROOTS_DASHBOARD, '/report'),
  settings: path(ROOTS_DASHBOARD, '/settings'),
  dataManagement: {
    root: path(ROOTS_DASHBOARD, '/data-management'),
  },
};
