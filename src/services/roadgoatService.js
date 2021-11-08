
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


