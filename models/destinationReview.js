import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const destinationReviewSchema = new Schema({
   rating: {
        type: Number,
        min: 1,
        max: 5
   },
   content: String,
   
  },{
    timestamps: true,
  });
  
  const DestinationReview = mongoose.model("Destination", destinationReviewSchema);



export {
	DestinationReview
}