import { User } from '../models/user.js';

function index(req, res) {
    User.find({})
        .then(users => res.json(users))
        .catch(err => res.json({ERROR: err}))
}

export {
    index
}