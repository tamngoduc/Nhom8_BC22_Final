import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { registerAccount } from "../../slices/auth";

const theme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();
  const { registerUser, isRegisterLoading, registerError } = useSelector(
    (state) => state.auth
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      account: "",
      password: "",
      repass: "",
      name: "",
      email: "",
      phoneNumber: "",
    },
    mode: "onTouched",
  });
  const onSubmit = (data) => {
    console.log(data);
    dispatch(registerAccount(data));
  };
  const onError = (errors) => {
    console.log(errors);
  };
  if (Object.keys(registerUser).length) {
    return <Navigate to="/sign-in" replace />;
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
            Sign up
          </Typography>
          <br />
          <form sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit, onError)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="repass"
                  label="Name"
                  type="name"
                  id="name"
                  autoComplete="new-password"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please input your name!",
                    },
                    pattern: {
                      value:
                        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                      message: "Your name is not correct!",
                    },
                  })}
                  error={!!errors?.name}
                  helperText={errors?.name ? errors.name.message : null}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  id="email"
                  autoComplete="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please input your email!",
                    },
                    pattern: {
                      value:
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                      message: "Your email is not correct!",
                    },
                  })}
                  error={!!errors?.email}
                  helperText={errors?.email ? errors.email.message : null}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  type="phoneNumber"
                  id="phoneNumber"
                  autoComplete="new-password"
                  {...register("phoneNumber", {
                    required: {
                      value: true,
                      message: "Please input your Phone number!",
                    },
                    pattern: {
                      value: /^[0-9\-\+]{9,15}$/,
                      message: "Your phone number is not correct!",
                    },
                  })}
                  error={!!errors?.phoneNumber}
                  helperText={
                    errors?.phoneNumber ? errors.phoneNumber.message : null
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
              </Grid>
              <Grid item xs={12} sm={6}>
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
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message:
                        "Minimum eight characters, at least one letter and one number !",
                    },
                  })}
                  error={!!errors?.password}
                  helperText={errors?.password ? errors.password.message : null}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="repass"
                  autoComplete="new-password"
                  {...register("repass", {
                    required: {
                      value: true,
                      message: "Please input your password!",
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message:
                        "Minimum eight characters, at least one letter and one number !",
                    },
                  })}
                  error={!!errors?.repass}
                  helperText={errors?.repass ? errors.repass.message : null}
                />
              </Grid>
            </Grid>
            {/* show error when fail to call API*/}
            {registerError && <span>{registerError}</span>}
            {/*  */}
            {/* btn to submit form */}
            <Button
              type="submit"
              disabled={isRegisterLoading}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </form>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                variant="body2"
                style={{ textDecoration: "none" }}
                to="/sign-in"
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
