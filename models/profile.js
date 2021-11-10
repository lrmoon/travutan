import mongoose, { Schema } from 'mongoose'


const profileSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    destination: {Type:Schema.Types.ObjectId, ref:'Destination'}
  },
  {
    timestamps: true,
  }
  )
  
  const Profile = mongoose.model('Profile', profileSchema)
  
  export {
    Profile
  }