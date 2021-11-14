import {Profile} from './../models/profile.js'
import {Destination} from './../models/destination.js'

function create(req, res){

    Destination.create(req.body)
    .then(destination => 
        Profile.findById(req.user.profile)
        .then(userProfile => {
            userProfile.destinations.push(destination)
            userProfile.save()
        })
        .then(() => res.json(destination))
        )
    .catch(err => console.log(err))
}

function index(req, res){
    Destination.find({})
    .then(destinations => {
        res.status(200).json(destinations)
    })
    .catch(err => {
    res.json(err)
    })
}

function deleteDestination(req, res){
    console.log()
}

export {
    create,
    deleteDestination as delete,
    index
}