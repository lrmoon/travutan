import { Profile } from "../models/profile.js"
import {Destination} from "../models/destination.js"

function show(req, res) {
  
    console.log(req.user.profile)
    Profile.findById(req.user.profile)
    .then(profileRes => console.log(profileRes))

  }


export{
    show
}