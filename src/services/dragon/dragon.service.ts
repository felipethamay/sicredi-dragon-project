import axios from 'axios';
import { API } from '../_base/endpoint/api.endpoint';

export class DragonService {

  public getDragon() {
    return axios.get(`${API.BASE_URL}`)
  }

  public getDragonById(id: string) {
    return axios.get(`${API.BASE_URL}/${id}`)
  }

  public postDragon(data: FormData) {
    return axios.post(`${API.BASE_URL}`, data)
  }

  public putDragon(id: string) {
    return axios.put(`${API.BASE_URL}/${id}`)
  }

  public deleteDragon(id: string) {
    return axios.delete(`${API.BASE_URL}/${id}`)
  }

}
