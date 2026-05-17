// shared/api/axios.ts
import axios from 'axios';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://ploom-backend.onrender.com/api/v1';

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
});