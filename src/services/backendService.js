import * as tokenService from "../services/tokenService";

const BASE_URL = '/api/destinations'
const PROFILE_URL ='/api/profile'
//------------ for destinations
// post request to create a destination
export function create(destination){

    return fetch(BASE_URL, {
        
        method: 'POST',
        headers: {
          Authorization: "Bearer " + tokenService.getToken(),
          "Content-type": 'application/json'
        },
        body: JSON.stringify(destination)
        },
        {mode: "cors"}
        ).then(res => res.json())
        
}
//get all destinations
export function getAll(){
    return fetch(BASE_URL)
    .then(res => res.json())
}
//------------ for profile destinations
export function getProfileDestinations(){
  return fetch(
      PROFILE_URL,
      {
        headers: { Authorization: "Bearer " + tokenService.getToken() },
      },
      { mode: "cors" }
    ).then((res) => res.json())
}


export function deleteDestination(id){
  return fetch(`${PROFILE_URL}/${id}`, {
        
    method: 'DELETE',
    headers: {Authorization: "Bearer " + tokenService.getToken()},
    }
    ).then(res => res.json())
}

export function updateDestination(originalDestination, editedDestination){
  console.log(editedDestination)
  return fetch(`${PROFILE_URL}/${originalDestination._id}`, {
        
    method: 'PUT',
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
      "Content-type": 'application/json'
    },
    body: JSON.stringify(editedDestination)
    },
    ).then(res => res.json())
}