import api from "./api-config";

export const getAllComments = async () => {
  const resp = await api.get("/comments");
  return resp.data;
};