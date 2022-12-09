import axios from 'axios';

import baseURL from "../costants/urls";

export const axiosService = axios.create({baseURL})