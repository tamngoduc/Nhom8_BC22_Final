import axiosClient from "./axiosClient";

const userAPI = {
  addUser: (user) => {
    return axiosClient.post("users", user);
  },

  getUserDetails: (userId) => {
    return axiosClient.get(`users/${userId}`);
  },

  getUsersList: () => {
    return axiosClient.get("users/pagination");
  },

  deleteUser: (userId) => {
    return axiosClient.delete(`users/${userId}`);
  },

  updateUser: (userId, user) => {
    return axiosClient.put(`users/${userId}`, user);
  },

  uploadAvatar: (user) => {
    const formData = new FormData();
    for (const key in user) {
      formData.append(key, user[key]);
    }
    return axiosClient.post("users/upload-avatar", formData);
  },
};

export default userAPI;
