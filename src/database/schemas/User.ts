import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    password: String,
},{timestamps: true});
const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
