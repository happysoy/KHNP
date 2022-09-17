// guards
import AuthGuard from 'src/guards/AuthGuard';
// components
import DashboardLayout from './dashboard';

export default function Layout({ children }) {
  return (
    <AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthGuard>
  );
}
