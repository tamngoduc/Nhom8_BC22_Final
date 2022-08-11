import axiosClient from "./axiosClient";

const roomAPI = {
  getRoomsList: (locationId) => {
    return axiosClient.get(`rooms?locationId=${locationId}`);
  },

  getRoomDetails: (roomId) => {
    return axiosClient.get(`rooms/${roomId}`);
  },

  bookRoom: (bookingData) => {
    return axiosClient.post("rooms/booking", bookingData);
  },
};

export default roomAPI;
