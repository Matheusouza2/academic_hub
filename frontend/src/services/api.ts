import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_token_here'
    }
})
