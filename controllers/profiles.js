import { Profile } from "../models/profile.js"
import {Destination} from "../models/destination.js"

function show(req, res) {
    // Find the profile that was clicked
    Profile.findById(req.params.id)
    // Populate friends to get profile data for each of them
    .populate('destinations')
    .then(profile => {
      // Use the profile clicked to find games belonging to that user
      Destination.find({ collectedBy: profile._id })
      .then(destinations => {
        // Find the profile of the current logged in user
        Profile.findById(req.user.profile)
        .then(userProfile => {
          res.json(userProfile)
        })
      })
  
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }


export{
    show
}