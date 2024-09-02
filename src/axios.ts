import axios from "axios";
import { baseURL } from "./Constants/constant";

const instance = axios.create({
    baseURL: baseURL,
  });


  export default instance