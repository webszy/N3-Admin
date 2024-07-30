import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: Number,
    password: String,
    createdAt: Number,
    updatedAt: Number
});
const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
