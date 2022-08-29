// routes
import { PATH_DASHBOARD } from "../../../routes/paths";

// @mui
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

const ICONS = {
  autoSignal: <AutorenewOutlinedIcon />,
  dataLoad: <DriveFolderUploadOutlinedIcon />,
  autoEvaluation: <QueryStatsOutlinedIcon />,
  manualEvaluation: <PersonSearchOutlinedIcon />,
  autoResult: <InsertChartOutlinedTwoToneIcon />,
  settings: <SettingsOutlinedIcon />,
  report: <AssignmentOutlinedIcon />,
};

const navConfig = [
  {
    title: `자동 신호 수집`,
    path: PATH_DASHBOARD.autoSignal,
    icon: ICONS.autoSignal,
  },
  {
    title: `DATA LOAD`,
    path: PATH_DASHBOARD.dataLoad,
    icon: ICONS.dataLoad,
  },
  {
    title: `자동 평가`,
    path: PATH_DASHBOARD.autoEvaluation,
    icon: ICONS.autoEvaluation,
  },
  {
    title: `자동 평가 결과`,
    path: PATH_DASHBOARD.autoResult,
    icon: ICONS.autoResult,
  },
  {
    title: `수동 평가`,
    path: PATH_DASHBOARD.manualEvaluation,
    icon: ICONS.manualEvaluation,
  },
  {
    title: `REPORT`,
    path: PATH_DASHBOARD.report,
    icon: ICONS.report,
  },
  {
    title: `Settings`,
    path: PATH_DASHBOARD.settings,
    icon: ICONS.settings,
  },
];

export default navConfig;
