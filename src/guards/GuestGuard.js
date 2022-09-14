// next
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';

// routes
import { PATH_DASHBOARD } from '../routes/paths';
// components
import LoadingScreen from 'src/components/LoadingScreen';

export default function GuestGuard({ children }) {
  const { push } = useRouter();

  const { isAuthenticated, isInitialized } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      push(PATH_DASHBOARD.root);
    }
  }, [isAuthenticated]);

  if (isInitialized === isAuthenticated) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}
