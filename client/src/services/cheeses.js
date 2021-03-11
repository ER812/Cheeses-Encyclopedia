import api from "./api-config";

export const getAllCheeses = async () => {
  const resp = await api.get("/cheeses");
  return resp.data;
};

export const getOneCheese = async (id) => {
  const resp = await api.get(`/cheeses/${id}`);
  return resp.data;
};

export const postCheese = async (cheeseData) => {
  const resp = await api.post("/cheeses", { cheese: cheeseData });
  return resp.data;
};

export const putCheese = async (id, cheeseData) => {
  const resp = await api.put(`/cheeses/${id}`, { cheese: cheeseData });
  return resp.data;
};

export const destroyCheese = async (id) => {
  const resp = await api.delete(`/cheeses/${id}`);
  return resp;
};
