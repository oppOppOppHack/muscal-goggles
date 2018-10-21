const router = require('express').Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Metric = mongoose.model('metrics');

// @route   POST api/metrics/addMetric
// @desc    Create New template
// @access  Private
router.post('/addMetric', passport.authenticate('jwt',{session: false}), (req, res) => {
	const {template, field} = req.body;
	const met = {
		template,
		field
	};
	const metInstance = new Metric(met);
	metInstance.save()
		.then(metric => {
			return res.json({
        success: true,
        metric
      });
		})
		.catch(err => {
			return res.status(400).json({
        success: false,
        msg: "Database access error"
      });
		});
});

// @route   GET api/metrics/getMetrics
// @desc    Get all metrics
// @access  Private
router.get('/getMetrics', passport.authenticate('jwt', {session: false}), (req, res) => {
	Metric.find({}, (err, docs) => {
		if(err) {
			return res.status(404).json({
				success: false,
				msg: "No metrics found"
			});
		}

		else {
			return res.status(200).json({
				success: true,
				msg: "Returning all metrics"
				data: docs
			});
		}
	});
});

// @route   DELETE api/metrics/removeMetric:id
// @desc    Remove a template
// @access  Private
router.delete('/removeMetric:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  Metric.findById(req.params.id)
    .then(met=>{
      if(!met){
        return res.status(404).json({
          success: false,
          msg: "Not Found"
        });
			}

      Metric.findById(req.params.id).remove(()=>{
          return res.json({
            success: true
          });
        });
    });
});
