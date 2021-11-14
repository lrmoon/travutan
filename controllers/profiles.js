import { Profile } from "../models/profile.js"
import {Destination} from "../models/destination.js"

function show(req, res) {

    console.log(req.user)
    Profile.findById(req.user.profile)
    .populate('destinations')
    .then(profileRes => res.json(profileRes))

  }


export{
    show
}