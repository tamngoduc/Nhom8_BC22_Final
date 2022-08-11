import axiosClient from "./axiosClient";

const locationAPI = {
  getLocationsList: (location) => {
    return axiosClient.get(`locations?location=${location}`);
  },
};

export default locationAPI;
