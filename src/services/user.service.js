import {axiosService} from "./axios.service";
import Urls from "../costants/urls";

export const userService = {
  getAll: () => axiosService.get(Urls.users),
  getbyId: (id) => axiosService(`/${Urls.users}/${id}`)

}
