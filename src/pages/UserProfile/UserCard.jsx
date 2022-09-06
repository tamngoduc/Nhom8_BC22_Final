import React, { useEffect, useState } from "react";
import "./Card.css";
import { Box } from "@mui/material";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails } from "../../slices/user";
import Grid from "@mui/material";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

// function createData(id, name, email, phoneNumber) {
//   return { id, name, email, phoneNumber };
// }
// const in4 = [createData(1, "Duc Long ", "longmkting@gmail.com", "0397827538")];

const UserCard = () => {
  const { userDetails, userDetailsError } = useSelector((state) => state.user);
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetails(currentUser._id));
  }, [currentUser._id]);

  // xử lí click edit thì form chồi lên editin4

  const [btnState, setBtnState] = useState(false);
  function handleClickChangein4() {
    setBtnState((btnState) => !btnState);
  }
  const editIn4 = btnState ? "active" : "";

  // xử lí click edit thì form chồi lên thay avt

  const [btnAvt, setBtnState2] = useState(false);
  function handleClickChangeAvt() {
    setBtnState2((btnAvt) => !btnAvt);
  }
  const editAvt = btnAvt ? "active" : "";

  // if (userDetailsError) {
  //   return <Box>{userDetailsError}</Box>;
  // }
  return (
    <div>
      {/* form in4 */}
      <Box>
        <div className={`popup ${editIn4}`}>
          <div onClick={handleClickChangein4} className="close-btn ">
            &times;
          </div>
          <div className="form">
            <h2>Change your information</h2>
            <div className="form-element">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Input Name" />
            </div>
            <div className="form-element">
              <label htmlFor="Email">Email</label>
              <input type="email" id="email" placeholder="Enter Email" />
            </div>
            <div className="form-element">
              <label htmlFor="Number">PhoneNumber</label>
              <input
                type="number"
                id="phoneNumber"
                placeholder="Enter PhoneNumber"
              />
            </div>
            <div className="form-element">
              <button>Change</button>
            </div>
          </div>
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

            <Button className="btn btn-avt-change">Update Avatar</Button>
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
          <Button onClick={handleClickChangein4}>Edit Information</Button>
          <Button>Admin</Button>
        </div>
      </Box>
    </div>
  );
};

export default UserCard;
