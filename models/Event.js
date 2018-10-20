const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EventSchema = new Schema({
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
mongoose.model("events", EventSchema);