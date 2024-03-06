import api from "./api";

const createOrder = async (newOrder) => {
  const { data } = await api.post("/api/orders", newOrder);
  return data;
};

export default createOrder;
