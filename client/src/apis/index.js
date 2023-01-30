import axios from 'axios';

//get statistics table
export const getStat = async() => {
    const request = await axios.get(`http://localhost:5555/user/stats`, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
    });
    return request;
}
