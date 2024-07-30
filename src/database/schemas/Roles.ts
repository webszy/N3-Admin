import * as mongoose from "mongoose";

const RoleScheme = new mongoose.Schema({
    id: String,
    name: String,
    permissions: Array
});
const RoleModel = mongoose.model("users", RoleScheme);
export default RoleModel;
