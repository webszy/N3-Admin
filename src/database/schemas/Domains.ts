import * as mongoose from "mongoose";

const DomainScheme = new mongoose.Schema({
    id: String,
    name: String
});
const DomainModel = mongoose.model("domains", DomainScheme);
export default DomainModel;
