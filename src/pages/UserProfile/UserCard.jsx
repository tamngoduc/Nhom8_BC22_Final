import React, { useEffect, useRef, useState } from "react";
import "./Card.css";
import { Box, Grid } from "@mui/material";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, uploadAvatar } from "../../slices/user";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const UserCard = () => {
  const {
    userDetails,
    userDetailsError,
    updatedUserResponse,
    updatedUserError,
    uploadedAvatarResponse,
    uploadedAvatarError,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: userDetails,
    mode: "onTouched",
  });
  const onSubmit = (user) => {
    dispatch(updateUser({ userId: userDetails._id, user }));
  };
  const onError = (errors) => {
    console.log(errors);
  };
  const [btnState, setBtnState] = useState(false);
  const handleClickChangein4 = () => {
    setBtnState((btnState) => !btnState);
  };
  const editIn4 = btnState ? "active" : null;
  const [btnAvt, setBtnState2] = useState(false);
  const handleClickChangeAvt = () => {
    setBtnState2((btnAvt) => !btnAvt);
  };
  const editAvt = btnAvt ? "active" : null;

  const avtRef = useRef(null);
  const handleAvt = () => {
    console.log(avtRef.current.files[0]);
  };
  const handleAvtAPI = () => {
    const formData = new FormData();
    formData.append("avatar", avtRef.current.files[0]);
    dispatch(uploadAvatar(formData));
  };
  const { enqueueSnackbar } = useSnackbar();
  const successAlert = (variant) => {
    enqueueSnackbar("Update successfully!", { variant });
  };
  const errorAlert = (variant) => {
    enqueueSnackbar(`${updatedUserError}`, { variant });
  };

  useEffect(() => {
    if (
      Object.keys(updatedUserResponse).length ||
      Object.keys(uploadedAvatarResponse).length
    ) {
      successAlert("success");
    }
  }, []);

  useEffect(() => {
    if (updatedUserError) {
      errorAlert("error");
    }
  }, [updatedUserError, uploadedAvatarError]);

  if (userDetailsError) {
    return <Box>{userDetailsError}</Box>;
  }

  return (
    <Box>
      {/* edit form */}
      <Box>
        <div className={`popup ${editIn4}`}>
          <div onClick={handleClickChangein4} className="close-btn">
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
                  placeholder="Name"
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
                  placeholder="Email"
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
                  placeholder="Phone"
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
            <Button
              className="btn_Change"
              type="submit"
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

      {/* avatar form */}
      <Box>
        <div className={`popup ${editAvt}`}>
          <div onClick={handleClickChangeAvt} className="close-btn ">
            &times;
          </div>
          <div className="form">
            <h2>Change your avatar</h2>

            <Button className="btn btn-avt" onChange={handleAvt}>
              <FileUploadRoundedIcon />
              Upload Image
              <input ref={avtRef} type="file" />
            </Button>

            <Button onClick={handleAvtAPI} className="btn btn-avt-change ">
              Update Avatar
            </Button>
          </div>
        </div>
      </Box>

      {/* user card */}
      <Box className="card Card UserCard">
        <div className="upper-container">
          <div onClick={handleClickChangeAvt} className="image-container">
            <img
              src={userDetails.avatar}
              className="card-img-top"
              alt="avatar"
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
            }}
          >
            Edit Information
          </Button>
          {userDetails.type === "ADMIN" ? (
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
};

export default UserCard;
