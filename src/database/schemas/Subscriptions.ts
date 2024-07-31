import * as mongoose from "mongoose";

const SubscriptionScheme = new mongoose.Schema({
    id: String,
    name: String
},{timestamps: true});
const SubscriptionModel = mongoose.model("subscriptions", SubscriptionScheme);
export default SubscriptionModel;
