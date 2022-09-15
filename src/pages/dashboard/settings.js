// @mui
import { Container } from '@mui/material';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import useAuth from '../../hooks/useAuth';
import Title from '../../components/Title';

Settings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Settings() {
  const { user } = useAuth();
  return (
    <Page title="Settings">
      <Container maxWidth="lg">
        <Title heading="Program Setting" />
        <div>Settings</div>
        <p>{user?.displayName}</p>
      </Container>
    </Page>
  );
}
