import { Profile } from "../models/profile.js"
import {Destination} from "../models/destination.js"

function show(req, res) {

    Profile.findById(req.user.profile)
    .populate('destinations')
    .then(profileRes => res.json(profileRes.destinations))

}

function deleteDestination(req, res){
  
  Destination.findByIdAndDelete(req.params.id)
  .then(deletedDestination => {
    Profile.findById(req.user.profile)
    .then(userProfile => {
      userProfile.destinations.remove(deletedDestination)
      userProfile.save()
    })
    .then(() => res.json(deletedDestination))
  })
  .catch(err => console.log(err))

}

function update(req, res){

  Destination.findByIdAndUpdate(req.params.id, req.body, {next: true})
  .then(updatedDestination => res.json(updatedDestination))
}

export{
    show,
    deleteDestination as delete,
    update
}