import axiosClient from "./axiosClient";

const ticketAPI = {
  getTickets: (userId) => {
    return axiosClient.get(`tickets/by-user?userId=${userId}`);
  },
};

export default ticketAPI;
