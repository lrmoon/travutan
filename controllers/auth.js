import { User } from '../models/user.js'

export {
  signup
}

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    // TODO: Send back a JWT instead of the user
    res.json(user);
  } catch (err) {
    res.status(400).send({'err': err.errmsg});
  }
}