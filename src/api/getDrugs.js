import api from "./api";

const getDrugs = async () => {
  const { data } = await api.get("/api/drugs");
  return data;
};

export default getDrugs;
