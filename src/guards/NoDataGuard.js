import { m } from 'framer-motion';
// @mui
import { Card, Container, Typography, Box } from '@mui/material';
// hooks
import useAuth from '../hooks/useAuth';
// components
import { MotionContainer, varBounce } from '../components/animate';

// ----------------------------------------------------------------------

export default function NoDataGuard() {
  // Logic here to get current user role

  // const currentRole = 'user';
  return (
    <Card>
      <Container component={MotionContainer} sx={{ textAlign: 'center', mt: 5 }}>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            No Data
          </Typography>
        </m.div>
        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            You do not insert the data in the ECT Information page
          </Typography>
        </m.div>
        <m.div variants={varBounce().in}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box component="img" src="/noData.png" sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
          </Box>
        </m.div>
      </Container>
    </Card>
  );
}
