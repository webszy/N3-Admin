import * as mongoose from "mongoose";

const PermissionScheme = new mongoose.Schema({
    id: String,
    name: String
});
const PermissionModel = mongoose.model("users", PermissionScheme);
export default PermissionModel;
