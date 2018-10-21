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
  },
  templateType: {
    type: String,
    required: true
  },
  dataPoints: [{
    event: {
      type: Schema.Types.ObjectId,
      required: true
    },
    data: {
      type: Schema.Types.Mixed,
      required: true
    }
  }]
});
mongoose.model("metrics", MetricSchema);