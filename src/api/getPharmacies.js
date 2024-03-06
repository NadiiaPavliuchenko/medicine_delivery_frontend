import api from "./api";

const getPharmacies = async () => {
  const { data } = await api.get("/api/pharmacies");
  return data;
};

export default getPharmacies;
