import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRoomDetails } from "../../slices/room";

const RoomBooking = () => {
  const { roomDetails } = useSelector((state) => state.room);
  const { roomId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomDetails(roomId));
  }, [roomId]);

  return <div>RoomBooking</div>;
};

export default RoomBooking;
