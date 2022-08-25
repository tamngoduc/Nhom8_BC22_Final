import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../slices/auth";
const theme = createTheme();

export default function SignInSide() {
  const dispatch = useDispatch();
  const { currentUser, isLoginLoading, loginError } = useSelector(
    (state) => state.auth
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { account: "", password: "" },
    mode: "onTouched",
  });
  const onSubmit = (data) => {
    console.log(data);
    dispatch(login(data));
  };
  const onError = (errors) => {
    console.log(errors);
  };

  if (Object.keys(currentUser).length) {
    return <Navigate to="/" replace />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "red" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <TextField
              required
              fullWidth
              id="account"
              label="Account"
              name="account"
              autoComplete="account"
              {...register("account", {
                required: {
                  value: true,
                  message: "Please input your account!",
                },
              })}
              error={!!errors?.account}
              helperText={errors?.account ? errors.account.message : null}
            />
            <br />
            <br />

            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Please input your password!",
                },
                // pattern: {
                //   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                //   message:
                //     "Minimum eight characters, at least one letter and one number !",
                // },
              })}
              error={!!errors?.password}
              helperText={errors?.password ? errors.password.message : null}
            />
            {/* show error when fail to call API*/}
            {loginError && <span>{loginError}</span>}
            {/*  */}
            {/* btn to submit form */}
            <Button
              disabled={isLoginLoading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </form>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link style={{ textDecoration: "none" }} to="/sign-up">
                I don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
