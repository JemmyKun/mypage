import axios from "./api-config";

const getList = () => {
  return axios.get("/api/getList");
};

export { getList };
