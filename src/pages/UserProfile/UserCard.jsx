import React, { useEffect, useState } from "react";
import "./Card.css";
import { Box, Grid } from "@mui/material";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails, updateUser } from "../../slices/user";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const UserCard = () => {
  // get user data//
  const {
    userDetails,
    userDetailsError,
    updatedUserResponse,
    updatedUserError,
    isUpdatedUserLoading,
  } = useSelector((state) => state.user);
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserDetails(currentUser.user?._id));
  }, [currentUser.user?._id]);

  // validate//
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: currentUser.user?.name,
      email: currentUser.user?.email,
      phone: currentUser.user?.phone,
    },
    mode: "onTouched",
  });
  const onSubmit = (user) => {
    console.log(user);
    dispatch(updateUser(currentUser.user?._id, user));
  };
  const onError = (errors) => {
    console.log(errors);
  };

  // const handleClick = (currentUser) => {
  //   console.log(currentUser);
  // };

  // xử lí click edit thì form chồi lên editin4

  const [btnState, setBtnState] = useState(false);
  function handleClickChangein4() {
    setBtnState((btnState) => !btnState);
  }
  const editIn4 = btnState ? "active" : null;

  // xử lí click edit thì form chồi lên thay avt

  const [btnAvt, setBtnState2] = useState(false);
  function handleClickChangeAvt() {
    setBtnState2((btnAvt) => !btnAvt);
  }
  const editAvt = btnAvt ? "active" : null;

  // err show when get user data fail//
  if (userDetailsError) {
    return <Box>{userDetailsError}</Box>;
  }

  const handleAvt = () => {};
  // err show when get user data fail//

  if (Object.keys(userDetails).length) {
    return (
      <Box>
        {/* form in4 */}
        <Box>
          <div className={`popup ${editIn4}`}>
            <div onClick={handleClickChangein4} className="close-btn ">
              &times;
            </div>

            <form sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit, onError)}>
              <Grid container spacing={2}>
                <h2>Change your information</h2>

                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    name="name"
                    type="text"
                    id="name"
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
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    name="email"
                    type="email"
                    id="email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Please input your email!",
                      },
                      pattern: {
                        value:
                          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                        message: "Your email is not correct!",
                      },
                    })}
                    error={!!errors?.email}
                    helperText={errors?.email ? errors.email.message : null}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    name="phone"
                    type="number"
                    id="phone"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Please input your Phone number!",
                      },
                      pattern: {
                        value: /^[0-9\-+]{9,15}$/,
                        message: "Your phone number is not correct!",
                      },
                    })}
                    error={!!errors?.phone}
                    helperText={errors?.phone ? errors.phone.message : null}
                  />
                </Grid>
              </Grid>
              {/* show error when fail to call API*/}
              {/* {registerError && <span>{registerError}</span>} */}
              {/*  */}
              {/* btn to submit form */}
              <Button
                className="btn_Change"
                type="submit"
                // disabled={isRegisterLoading}
                // fullWidth
                variant="contained"
                size="large"
                color="error"
                sx={{ mt: 3, mb: 2 }}
              >
                Change
              </Button>
            </form>
          </div>
        </Box>
        {/* form avatar */}
        <Box>
          <div className={`popup ${editAvt}`}>
            <div onClick={handleClickChangeAvt} className="close-btn ">
              &times;
            </div>
            <div className="form">
              <h2>Change your avatar</h2>

              <Button className="btn btn-avt">
                <FileUploadRoundedIcon />
                Upload Image
                <input type="file" />
              </Button>

              <Button onClick={handleAvt} className="btn btn-avt-change">
                Update Avatar
              </Button>
            </div>
          </div>
        </Box>

        {/* card */}
        <Box className="card Card UserCard">
          <div className="upper-container">
            <div onClick={handleClickChangeAvt} className="image-container">
              <img
                src="https://pbs.twimg.com/profile_images/919509936098463744/lmTNN6AO_400x400.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <br />

          <div className="card-body lower-container">
            <div>
              <h3>{userDetails.name}</h3>
              <h4>Email: {userDetails.email}</h4>
              <h4>Phone: {userDetails.phone}</h4>
            </div>
          </div>

          <div className="btn">
            <Button
              onClick={() => {
                handleClickChangein4();
                // onSelect(userId);
              }}
            >
              Edit Information
            </Button>

            {currentUser.user?.type === "ADMIN" ? (
              <Button
                onClick={() => {
                  navigate("/admin/users");
                }}
              >
                Admin
              </Button>
            ) : null}
          </div>
        </Box>
      </Box>
    );
  }
};

export default UserCard;
