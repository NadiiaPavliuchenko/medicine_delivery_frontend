import api from "./api";

const getDrugsByPharmacy = async (pharmacyId) => {
  const { data } = await api.get(`/api/drugs/${pharmacyId}`);
  return data;
};

export default getDrugsByPharmacy;
