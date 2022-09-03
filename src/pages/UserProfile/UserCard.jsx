import React, { useEffect, useState } from "react";
import "./Card.css";
import { Box } from "@mui/material";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails } from "../../slices/user";
import { useParams } from "react-router-dom";

// function createData(id, name, email, phoneNumber) {
//   return { id, name, email, phoneNumber };
// }
// const in4 = [createData(1, "Duc Long ", "longmkting@gmail.com", "0397827538")];

const UserCard = () => {
  const dispatch = useDispatch();
  const { userDetails, userDetailsError } = useSelector((state) => state.user);
  const userId = useParams();

  useEffect(() => {
    dispatch(getUserDetails(userId));
  }, [userId]);
  // xử lí click edit thì form chồi lên

  const [btnState, setBtnState] = useState(false);
  function handleClick() {
    setBtnState((btnState) => !btnState);
  }
  const editIn4 = btnState ? "active" : ""; // xử lí click edit thì form chồi lên
  if (userDetailsError) {
    return <Box>{userDetailsError}</Box>;
  }
  return (
    <div>
      {/* form */}
      <Box>
        <div className={`popup ${editIn4}`}>
          <div onClick={handleClick} className="close-btn ">
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

      {/* card */}
      <Box className="card Card UserCard">
        <div className="upper-container">
          <div className="image-container">
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
          <Button onClick={handleClick}>Edit Information</Button>
          <Button>Admin</Button>
        </div>
      </Box>
    </div>
  );
};

export default UserCard;
