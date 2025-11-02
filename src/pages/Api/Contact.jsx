// Either configure axios instance with base URL
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ajelgarage-backend.onrender.com'
});

export function CreateDeatils(payload){
  return api.post(`/api/send-message`, payload)
}