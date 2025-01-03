import mongoose from "mongoose";
import connect from "./db";
const {Schema}=mongoose;
const postschema=Schema({
    title:{
        type:String,
        required:true,
    },
    desc: {
        type: String,
        required: true,
      },
    img: {
        type: String,
        required: true,
      },
    content: {
        type: String,
        required: true,
      },
    username: {
        type: String,
        required: true,
      },
    },
    {timestamps:true}
);
export default mongoose.models.Post || mongoose.model("Post", postschema);
