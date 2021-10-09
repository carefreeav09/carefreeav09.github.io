import axios from "axios";
import { API_URL } from "../constants";

const fetchAllPosts = async () => {
  console.log(API_URL, "api url");
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

const fetchIndividualPosts = async (id: number) => {
  console.log(API_URL, "api url");
  const response = await axios.get(`${API_URL}/posts/${id}`);
  return response.data;
};

export { fetchAllPosts, fetchIndividualPosts };
