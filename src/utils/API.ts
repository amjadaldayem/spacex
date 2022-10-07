import axios from "axios";

export default axios.create({
    baseURL: "https://api.spacexdata.com/v4/dragons",
    headers: {
        "Content-Type": "application/json",
    },
});