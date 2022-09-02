// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Link, Alert, Tooltip, Container, Typography } from '@mui/material';
// routes
import { PATH_AUTH } from '../../routes/paths';
// hooks
import useAuth from '../../hooks/useAuth';
// components
import Page from '../../components/Page';
// sections
import RegisterForm from '../../sections/auth/register/RegisterForm';

export default function Register() {
  return (
    <Page title="Register">
      <RegisterForm />
    </Page>
  );
}
