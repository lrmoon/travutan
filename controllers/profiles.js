import { Profile } from "../models/profile.js"
import {Destination} from "../models/destination.js"

function show(req, res) {

    Profile.findById(req.user.profile)
    .populate('destinations')
    .then(profileRes => res.json(profileRes))

}

function deleteDestination(req, res){
  console.log(req.params.id)
  Destination.findByIdAndDelete(req.params.id)
  .then(deleteDestination => {
    Profile.findById(req.user.profile)
    .then(userProfile => {
      userProfile.destinations.remove(deleteDestination)
      userProfile.save()
    })
    .then(() => res.json(deleteDestination))
  })
  .catch(err => console.log(err))

}

export{
    show,
    deleteDestination as delete
}