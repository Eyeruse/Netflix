import axios from "axios"; // we use it to send http key methods

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
}
);
export default instance;
