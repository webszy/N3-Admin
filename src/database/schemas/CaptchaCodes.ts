import * as mongoose from "mongoose";
const captchaSchema = mongoose.Schema({
    id: String,
    code: String,
    ts: Number
},{timestamps:true});
const CaptchaModel = mongoose.model("CaptchaCodes", captchaSchema);
export default CaptchaModel
