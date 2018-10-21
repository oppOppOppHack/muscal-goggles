const router = require("express").Router();
const mongoose = require('mongoose');

const ReportTemplate = mongoose.model('reportTemplates');

// @route   POST api/reports/addTemplate
// @desc    add a report template
// @access  Private
router.post('/addTemplate/:name', passport.authenticate('jwt',{session: false}),(req, res) => {
	const {metrics} = req.body;
	const rtemplate = {
		metrics
	};
	const rtemplateInstance = new ReportTemplate(rtemplate);
	rtemplateInstance.save()
		.then(template=>{
			return res.json({
				success: true,
				template
			});

		})
		.catch(err=>{
			return res.status(400).json({
				success: false,
				msg: "Something went wrong"
			})
		})
});

// @route   GET api/templates/get/:id
// @desc    Get specific report Template
// @access  Private
router.get("/get/:id", passport.authenticate('jwt', {session: false}),(req, res)=>{
  ReportTemplate.findById(req.params.id)
    .then(template=>{
      if(!template){
        return res.status(404).json({
          success: false,
          msg: "Not Found"
        })
      }
      if(template.organization == req.user.organization){
        return res.json({
          success: true,
          template
        });
      }else{
        return res.status(401).json({
          success: false,
          msg: "Something went wrong"
        })
      }
    })
		.catch(err => {
			return res.status(500).json({
				success: false,
				msg: "Database access error"
			});
		});
});

// @route   POST api/reports/getTemplates
// @desc    get all report templates
// @access  Private
router.post('/getTemplates', passport.authenticate('jwt',{session: false}),(req, res) => {
	ReportTemplate.find({})
		.then(templates => {
			if(!template){
				return res.status(404).json({
					success: false,
					msg: "Could not find report templates"
				});
			}
			else{
				return res.json({
					success: true,
					msg: "Got all report templates",
					templates
				});
			}
		})
		.catch(err => {
			return res.status(500).json({
				success: false,
				msg: "Database access error"
			});
		});
});

// @route   POST api/reports/removeTemplate
// @desc    remove a report template
// @access  Private
router.post('/removeTemplate/:name', passport.authenticate('jwt',{session: false}),(req, res) => {
	ReportTemplate.findById(req.params.id)
		.then(template=>{
			if(!template)
				return res.status(404).json({
					success: false,
					msg: "Not Found"
				})
			ReportTemplate.findById(req.params.id).remove(()=>{
					return res.json({
						success: true
					})
				})
		})
});

module.exports= router;
