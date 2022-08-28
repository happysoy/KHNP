// components
import DashboardLayout from "./dashboard";

export default function Layout({ children }) {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
}
