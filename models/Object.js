const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectSchema = new Schema({
  templateId: {
    type: Schema.Types.ObjectId,
    ref: "templates"
  },
  data: {
    type: Schema.Types.Mixed
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});
mongoose.model("objects", ObjectSchema);