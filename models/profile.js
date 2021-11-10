import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema(
  {
    email: String,
    name: String,
    destinations:[{
      type: Schema.Types.ObjectId, 
      ref: 'Destination'
    }]
  },
  {
    timestamps: true,
  }
  )
  
  const Profile = mongoose.model('Profile', profileSchema)
  
  export {
    Profile
  }