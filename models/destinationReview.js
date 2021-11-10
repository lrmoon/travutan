import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const destinationReviewSchema = new Schema({
    title: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
   rating: {
        type: Number,
        min: 1,
        max: 5
   },
   content: String,
   destination: {
       type: Schema.Types.ObjectId,
       ref: 'Destination'
   }
  },{
    timestamps: true,
  });
  
  const DestinationReview = mongoose.model("DestinationReview", destinationReviewSchema);



export {
	DestinationReview
}