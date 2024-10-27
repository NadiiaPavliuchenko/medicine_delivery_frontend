import api from "./api";

const getDrugsByPharmacy = async (pharmacyId, date = "", price = "") => {
  const params = {};
  if (date !== "") {
    params.date = date;
  }
  if (price !== "") {
    params.price = price;
  }
  const { data } = await api.get(`/api/drugs/${pharmacyId}`, { params });
  return data;
};

export default getDrugsByPharmacy;
