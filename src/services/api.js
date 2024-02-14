import axios from "axios" //npm install axios

export const api = axios.create({
    baseURL: "https://localhost:5173"
})

