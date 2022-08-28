// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import SvgIconStyle from "../../../components/SvgIconStyle";

const getIcon = (name) => (
  <SvgIconStyle
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const ICONS = {
  dashboard: getIcon("ic_dashboard"),
};

const navConfig = [
  {
    title: `자동 신호 수집`,
    path: PATH_DASHBOARD.autoSignal,
    icon: ICONS.dashboard,
  },
  {
    title: `DATA LOAD`,
    path: PATH_DASHBOARD.dataLoad,
    icon: ICONS.dashboard,
  },
  {
    title: `자동 평가`,
    path: PATH_DASHBOARD.autoEvaluation,
    icon: ICONS.dashboard,
  },
  {
    title: `자동 평가 결과`,
    path: PATH_DASHBOARD.autoResult,
    icon: ICONS.dashboard,
  },
  {
    title: `수동 평가`,
    path: PATH_DASHBOARD.manualEvaluation,
    icon: ICONS.dashboard,
  },
  {
    title: `REPORT`,
    path: PATH_DASHBOARD.report,
    icon: ICONS.dashboard,
  },
  {
    title: `Settings`,
    path: PATH_DASHBOARD.report,
    icon: ICONS.dashboard,
  },
];

export default navConfig;
