const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TemplateSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  fields: [
    {
      name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      }
    }
  ],
  type:{
    type: String,
    required: true
  }
});
mongoose.model("templates", TemplateSchema);