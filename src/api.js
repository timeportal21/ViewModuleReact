import axios from "axios";

// const bearerToken = localStorage.getItem("tokenValue");

export default axios.create({
    baseURL: `http://localhost:5000/api`,
    // headers: {
    // 	Authorization: "Bearer " + bearerToken,
    // },
});
