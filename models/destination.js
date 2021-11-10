import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    title: String,
    image: String,
    covid: String,
    wikiUrl: String,
    reviews: [{ type: Schema.Types.ObjectId, ref: "destinationReview" }]
  },{
    timestamps: true,
  });
  
  const Destination = mongoose.model("Destination", destinationSchema);



export {
	Destination
}