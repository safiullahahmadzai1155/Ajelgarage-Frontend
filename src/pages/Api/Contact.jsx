
import axios from "../../Authentication/headers"
export function CreateDeatils(payload){
  return axios.post(`/api/send-message`, payload)
}