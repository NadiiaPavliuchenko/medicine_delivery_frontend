import api from "./api";

const getDrugs = async (date = "", price = "") => {
  const params = {};
  if (date !== "") {
    params.date = date;
  }
  if (price !== "") {
    params.price = price;
  }
  const { data } = await api.get(`/api/drugs`, {
    params,
  });
  return data;
};

export default getDrugs;
