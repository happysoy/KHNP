import { Avatar } from "@mui/material";
import useAuth from "../hooks/useAuth";

export default function AdminAvatar({ ...other }) {
  const { user } = useAuth();
  return <Avatar>A</Avatar>;
}
