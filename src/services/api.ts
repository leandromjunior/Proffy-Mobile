import axios from 'axios';

const api = axios.create({
    baseURL: 'http://5h-pf6.anonymous.mobile.exp.direct:3333'
});

export default api;

//Tunnel -> exp://5h-pf6.anonymous.mobile.exp.direct:80

//LAN -> http://127.0.0.1:3333