import {
  Button,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  return (
    <Grid container justifyContent="center" sx={{ my: 12 }}>
      <Paper elevation={1} sx={{ p: 5 }}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Sign in to your account
          </Typography>
          <TextField label="Email" variant="outlined" type="email" />
          <TextField label="Password" variant="outlined" type="password" />
          <Link href="#" underline="hover" sx={{ pb: 4 }}>
            Forgot your password?
          </Link>
          <Button sx={{ mt: 5 }} variant="contained">
            Log in
          </Button>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Login;
