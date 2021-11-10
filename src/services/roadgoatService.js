const baseurl = 'https://api.roadgoat.com/api/v2/destinations/'

export function getSearch(endpoint, login, password){
    return(
        fetch(endpoint, {
            headers: new Headers({
            "Authorization": `Basic ${btoa(`${login}:${password}`)}`
            })
        })
        .then(res => res.json())      
    )
}

export function getCity(id, login, password){
    return (
        fetch(baseurl + id, {
            headers: new Headers({
            "Authorization": `Basic ${btoa(`${login}:${password}`)}`
            })
        })
        .then(res => res.json())
    )
}
