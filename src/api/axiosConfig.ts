import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: 'https://newsapi.ai/api/v1/article/getArticles',
    headers: {'Content-Type': 'application/json'}
})


export const usersApi = axios.create({
    baseURL: 'https://64e8878d99cf45b15fdfb7c2.mockapi.io',
    headers: {'Content-Type': 'application/json'}
})