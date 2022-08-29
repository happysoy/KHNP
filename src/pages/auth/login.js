import { Container, Stack, Box, Typography } from "@mui/material";
import Page from "src/components/Page";

// guards
import GuestGuard from "src/guards/GuestGuard";
// sections
import LoginForm from "src/sections/auth/login/LoginForm";

export default function Login() {
  return (
    <GuestGuard>
      <Page title="Login">
        <Container>
          <Stack>
            <Box>
              <Typography>Login</Typography>
            </Box>
          </Stack>

          <LoginForm />
        </Container>
      </Page>
    </GuestGuard>
  );
}
