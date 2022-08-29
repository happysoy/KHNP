// @mui
import { Container } from "@mui/material";
// layouts
import Layout from "src/layouts";
// components
import Page from "src/components/Page";
import useAuth from "src/hooks/useAuth";

Settings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Settings() {
  const { user } = useAuth();
  return (
    <Page title="Settings">
      <Container>
        <div>Settings</div>
        <p>{user?.displayName}</p>
      </Container>
    </Page>
  );
}
