const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
  {
    name: String,
    text: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Message", messageSchema);
