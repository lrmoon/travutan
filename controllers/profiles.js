import { Profile } from "../models/profile.js"
import {Destination} from "../models/destination.js"

function show(req, res) {

    Profile.findById(req.user.profile)
    .populate('destinations')
    .then(profileRes => res.json(profileRes.destinations))

}

function deleteDestination(req, res){
  
  // Destination.findByIdAndDelete(req.params.id)
  // .then(deleteDestination => {
  //   Profile.findById(req.user.profile)
  //   .then(userProfile => {
  //     userProfile.destinations.remove(deleteDestination)
  //     userProfile.save()
  //     res.json(userProfile.destinations)
  //   })
  // })
  // .catch(err => console.log(err))

}

export{
    show,
    deleteDestination as delete
}