import axios from 'axios'

const api = axios.create({
    baseURL: 'https://692a7be37615a15ff24cca1c.mockapi.io/users/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;