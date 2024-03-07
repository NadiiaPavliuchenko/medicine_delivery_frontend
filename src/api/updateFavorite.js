import api from "./api";

const updateFavorite = async (drugId, favorite) => {
  const { data } = await api.patch(`/api/drugs/${drugId}/favorite`, {
    favorite,
  });
  return data;
};

export default updateFavorite;
