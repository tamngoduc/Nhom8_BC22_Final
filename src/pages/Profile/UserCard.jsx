import React from "react";
import "./Card.css";

function createData(id, name, email, phoneNumber) {
  return { id, name, email, phoneNumber };
}
const in4 = [createData(1, "Duc Long ", "longmkting@gmail.com", "0397827538")];
const UserCard = () => {
  return (
    <div>
      <div className="Card UserCard">
        <div className="upper-container">
          <div className="image-container">
            <img
              src="https://pbs.twimg.com/profile_images/919509936098463744/lmTNN6AO_400x400.jpg"
              alt=""
              height="100px"
              width="100px"
            />
          </div>
        </div>
        <div className="lower-container">
          {in4.map((information) => (
            <div>
              <h3>{information.name}</h3>
              <h4>Email: {information.email}</h4>
              <h4>Phone: {information.phoneNumber}</h4>
            </div>
          ))}
        </div>
        <div className="btn">
          <button>Get Badge</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
