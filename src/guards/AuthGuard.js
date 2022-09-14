import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';

// routes
import { PATH_DASHBOARD } from '../routes/paths';
import Login from 'src/pages/auth/login';
// components
// import LoadingScreen from ""

export default function AuthGuard({ children }) {
  const { push } = useRouter();

  const { isAuthenticated, isInitialized } = useAuth();

  // if(isInitialized===isAuthenticated){
  //   return <LoadingScreen/>;
  // }

  if (!isAuthenticated) {
    return <Login />;
  }

  return <>{children}</>;
}
