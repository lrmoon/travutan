import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const replySchema = new Schema({
    author: {
        type: Schema.Types.ObjectId, ref: "Profile"
    },
    content: String,
})

const questionPostSchema = new Schema({
    content: String,
    author: { type: Schema.Types.ObjectId, ref: "Profile"},
    replies: [replySchema],
    destination:{
        type: Schema.Types.ObjectId, ref:'Destination'
    }

  },{
    timestamps: true,
  });
  
  const QuestionPost = mongoose.model("QuestionPost", questionPostSchema);



export {
	QuestionPost
}