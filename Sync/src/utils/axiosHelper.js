import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/JSON";

export function request(method, url, data) {
  console.log(url);
  return axios({
    method,
    url,
    data,
  });
}
