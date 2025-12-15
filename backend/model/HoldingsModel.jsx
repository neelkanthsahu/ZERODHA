const { model }=require("mongoose");
const { HoldingsSchema }=require("../schemas/HoldingsSchema.jsx");

const HoldingsModel=new model("holding", HoldingsSchema);

module.exports={ HoldingsModel };