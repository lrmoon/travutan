import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    name: String,
    rawgId: Number,
    released: Date,
    imageUrl: String,
    collectedBy: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
    // To be filled in later
    // reviews: [reference GameReview],
  },{
    timestamps: true,
  });
  
  const Destination = mongoose.model("Destination", destinationSchema);



export {
	Destination
}