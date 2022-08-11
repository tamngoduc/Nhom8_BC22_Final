import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://airbnb.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMiIsIkhldEhhblN0cmluZyI6IjMwLzExLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2OTc2NjQwMDAwMCIsIm5iZiI6MTY0MTgzNDAwMCwiZXhwIjoxNjY5OTE0MDAwfQ.mTJaYLlwFuAG-SiC8fUlH-taW8wV0VAASxdCPf54RX8",
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response?.data);
  }
);

axiosClient.interceptors.request.use((config) => {
  const user = localStorage.getItem("user");
  if (user) {
    const { accessToken } = JSON.parse(user);
    config.headers.common.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default axiosClient;
