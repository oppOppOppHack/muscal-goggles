const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MetricSchema = new Schema({
  template: {
    type: Schema.Types.ObjectId,
    ref: "templates"
  },
  field: {
    type: String,
    required: true
  }
});
mongoose.model("metrics", MetricSchema);