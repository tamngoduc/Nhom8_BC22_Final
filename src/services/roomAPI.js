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

  updateRoom: (roomId, room) => {
    return axiosClient.post(`/rooms/${roomId}`, room);
  },

  uploadRoomImage: (roomId) => {},

  deleteRoom: (roomId) => {
    return axiosClient.delete(`/rooms/${roomId}`);
  },
};

export default roomAPI;
