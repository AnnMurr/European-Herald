import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: 'https://newsapi.ai/api/v1/article/getArticles',
    headers: {'Content-Type': 'application/json'}
})