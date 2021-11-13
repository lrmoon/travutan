const BASE_URL = '/api/destinations'
const PROFILE_URL ='/api/profile'
//------------ for destinations
// post request to create a destination
export function create(destination){
    console.log('create fetch', destination);
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(destination)
    })
    .then(res => res.json())
}
//get all destinations
export function getAll(){
    console.log('get all')
    return fetch(BASE_URL)
    .then(res => res.json())
}
//------------ for profile destinations
export function getProfile(){
return fetch(PROFILE_URL)
    .then(res => res.json())
}