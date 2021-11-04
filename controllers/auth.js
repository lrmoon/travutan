import { User } from '../models/user.js'
import { Profile } from '../models/profile.js'
import jwt from 'jsonwebtoken'


async function signup(req, res) {
  const profile = new Profile(req.body)
  req.body.profile = profile._id
  const user = new User(req.body)
  try {
    await user.save();
    await profile.save();
    
    const token = createJWT(user);
    res.json({token})
    
  } catch (err) {
    res.status(400).send({ err: err.errmsg })
  }
}

function createJWT(user) {
  return jwt.sign({user}, process.env.SECRET, { expiresIn: "24h" })
}

export {
  signup
}