import axios from "axios" //npm install axios

export const api = axios.create({
    baseURL: "https://todolist-api-7pt3.onrender.com"  //! PROD
    // baseURL: "http://localhost:3333"  //* DEV
})

