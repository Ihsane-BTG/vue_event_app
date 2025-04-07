import axios from 'axios';

const API_BASE_URL = 'https://api-event-53s5.onrender.com/api/v1/summit';

export const getHome = () => axios.get(`${API_BASE_URL}/home`);
export const getCountdown = () => axios.get(`${API_BASE_URL}/countdown`);
export const getAgenda = () => axios.get(`${API_BASE_URL}/agenda`);
export const getAbout = () => axios.get(`${API_BASE_URL}/about`);
