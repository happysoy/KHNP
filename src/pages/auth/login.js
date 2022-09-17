import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Card, Container, Stack, Box, Typography } from '@mui/material';
import Page from '../../components/Page';
// components
import Logo from '../../components/Logo';
// guards
import GuestGuard from '../../guards/GuestGuard';
// sections
import LoginForm from '../../sections/auth/login/LoginForm';
import Image from 'src/components/Image';
// routes
import { PATH_AUTH } from '../../routes/paths';

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('div')(({ theme }) => ({
  bottom: 10,
  zIndex: 1,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  // padding: theme.spacing(3),
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

export default function Login() {
  return (
    <GuestGuard>
      <Page title="Login">
        <RootStyle>
          {/* <HeaderStyle>
            <Logo />
          </HeaderStyle>
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Welcome back!
            </Typography>
            <Image src="/login.png" alt="login logo" />
          </SectionStyle> */}
          <Container maxWidth="sm">
            <ContentStyle>
              <HeaderStyle>
                <Logo sx={{ width: '120%' }} />
              </HeaderStyle>

              <Typography variant="body2" sx={{ mt: 2, mb: 5, display: 'flex', justifyContent: 'end' }}>
                계정이 없으신가요?{' '}
                <NextLink href={PATH_AUTH.register} passHref>
                  <Link variant="subtitle2">Register</Link>
                </NextLink>
              </Typography>

              <LoginForm />
            </ContentStyle>
          </Container>
        </RootStyle>
      </Page>
    </GuestGuard>
  );
}
