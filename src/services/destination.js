const baseurl = 'http://localhost:3000'

export function postData(endpoint, login, password){
    return(
        fetch(endpoint, {
            headers: new Headers({
            "Authorization": `Basic ${btoa(`${login}:${password}`)}`
            })
        })
        .then(res => res.json())      
    )
}

// title: String,
//     image: String,
//     covid: String,
//     wikiUrl: String,
//     budget: String,
//     population: Number,

export function get(id, login, password){
    return (
        fetch(baseurl + id, {
            headers: new Headers({
            "Authorization": `Basic ${btoa(`${login}:${password}`)}`
            })
        })
        .then(res => res.json())
    )
}
