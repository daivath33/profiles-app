import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
};

export const getUser = async (id) => {
  const response = await axios.get(`http://localhost:3000/users/${id}`);
  return response.data;
};

export const registerUser = async (user) => {
  const response = await axios.post("http://localhost:3000/users", user);
  return response.data;
};
