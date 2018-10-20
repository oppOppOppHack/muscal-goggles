const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ReportTemplate = new Schema({
  metrics: [{
    type: Schema.Types.ObjectId,
    ref: "metrics"
  }],
  dateCreated: {
    type: Date,
    default: Date.now
  }
});
mongoose.model("metrics", ReportTemplate);