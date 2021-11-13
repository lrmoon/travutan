const BASE_URL = '/api/destinations'

// post request
export function create(destination){
    console.log('create fetch', destination);
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(destination)
    })
    .then(res => res.json())
}

export function getAll(){
    console.log('get all')
    // return fetch(BASE_URL)
    // .then(res => res.json())
}