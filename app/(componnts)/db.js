import mongoose from "mongoose";
let url="mongodb+srv://ersd78:AvuOQRIt4BDxY65n@cluster0.is9wa.mongodb.net/"
const connect = async () => {
  try {
    await mongoose.connect(url);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;