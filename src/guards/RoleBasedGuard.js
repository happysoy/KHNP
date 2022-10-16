import { m } from 'framer-motion';
// @mui
import { Container, Typography, Box } from '@mui/material';
// hooks
import useAuth from '../hooks/useAuth';
// components
import { MotionContainer, varBounce } from '../components/animate';

// ----------------------------------------------------------------------

export default function RoleBasedGuard({ hasContent, children }) {
  // Logic here to get current user role
  const { user } = useAuth();

  // const currentRole = 'user';
  const currentRole = user?.displayName; // admin;
  console.log(currentRole);
  if (currentRole !== 'admin') {
    return hasContent ? (
      <Container component={MotionContainer} sx={{ textAlign: 'center' }}>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            Permission Denied
          </Typography>
        </m.div>
        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>You do not have permission to access this page</Typography>
        </m.div>
        <m.div variants={varBounce().in}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box component="img" src="/permissionDenied.png" sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
          </Box>
        </m.div>
      </Container>
    ) : null;
  }

  return <>{children}</>;
}
