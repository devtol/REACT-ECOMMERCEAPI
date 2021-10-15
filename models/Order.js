const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const OrderSchema = new mongoose.Schema(
    {
         userId: { type: String, required: true },
         products: [
             {
                 productId: {
                     type: String
                 },
                 quantity: {
                     type: Number,
                     default: 1
                 }
             }
         ],
         amount: { type: Numberm, required: true },
         address: { type: Object, required: true },
         status: { type: string, default: "pending"},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);