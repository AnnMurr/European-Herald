import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: 'https://newsapi.ai/api/v1/article/getArticles',
    headers: {'Content-Type': 'application/json'}
})


export const usersApi = axios.create({
    baseURL: 'https://65294da655b137ddc83e91cc.mockapi.io',
    headers: {'Content-Type': 'application/json'}
})