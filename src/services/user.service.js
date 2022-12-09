import {axiosService} from "./axios.service";
import {urls} from "../costants";

export const userService = {
  getAll: () => axiosService.get(urls.users),
  getbyId: (id) => axiosService(`/${urls.users}/${id}`)

}
