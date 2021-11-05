import * as tokenService from "../services/tokenService";
const BASE_URL = 'http://localhost:3001/api/users/';

export function getAllUsers() {
    return fetch(
      BASE_URL,
      {
        headers: { Authorization: "Bearer " + tokenService.getToken() },
      },
      { mode: "cors" }
    ).then((res) => res.json())
  }

