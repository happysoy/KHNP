import { useState } from 'react';
// @mui
import { Container, Box, Typography } from '@mui/material';
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import useAuth from '../../../hooks/useAuth';
import Title from '../../../components/Title';
// guard
import RoleBasedGuard from '../../../guards/RoleBasedGuard';

DataManagement.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function DataManagement() {
  const { user } = useAuth();

  return (
    <Page title="Settings">
      <Container maxWidth="lg">
        <Title heading="Data Managment" />

        <RoleBasedGuard hasContent>
          <Typography>관리자</Typography>
        </RoleBasedGuard>
      </Container>
    </Page>
  );
}
