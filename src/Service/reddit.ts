import axios from "axios";
import type Article from "../models/iPost";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export const fetchNewsArticles = async (category: string): Promise<Article[]> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        category,
        country: "us",
        apiKey: API_KEY,
        pageSize: 5, 
      },
    });
    if (response.data.articles && response.data.articles.length > 0) {
      return response.data.articles;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching articles", error);
    return [];
  }
};
