import axios from "axios";


const ApiManager = axios.create(
    {
        baseURL: "http://localhost:4000",
        timeout: 2000
    }
)

export default ApiManager