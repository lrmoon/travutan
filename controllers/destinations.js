import {Profile} from './../models/profile.js'
import {Destination} from './../models/destination.js'

function create(req, res){
    console.log(req.body)
    Destination.create(req.body)
    .then(result => res.json(result))
    .catch(err => console.log(err))
}

function deleteDestination(req, res){
    console.log()
}

export {
    create,
    deleteDestination as delete
}