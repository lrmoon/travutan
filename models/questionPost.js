import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const questionPostSchema = new Schema({
    content: String,
    
  },{
    timestamps: true,
  });
  
  const QuestionPost = mongoose.model("QuestionPost", questionPostSchema);



export {
	QuestionPost
}