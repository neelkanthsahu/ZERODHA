const {model}=require("mongoose");
const {OrdersSchema}=require("../schemas/OrdersSchema.jsx");
const OrdersModel=new model("order", OrdersSchema);

module.exports={ OrdersModel };