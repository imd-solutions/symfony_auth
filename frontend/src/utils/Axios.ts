import axios from "axios";

const axiosClient: any = axios.create();

// axiosClient.defaults.headers = {
//   "Content-Type": "application/json",
//   Accept: "application/json",
// };

// axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;

export default axiosClient;
