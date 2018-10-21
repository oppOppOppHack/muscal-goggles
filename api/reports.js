const router = require("express").Router();
const mongoose = require('mongoose');
const passport = require("passport");
const async = require("async");
const Metric = mongoose.model("metrics");
const Template = mongoose.model("templates");
const Event = mongoose.model("events");
const Objects = mongoose.model("objects");

const ReportTemplate = mongoose.model('reportTemplates');

// @route   POST api/reports/addTemplate
// @desc    add a report template
// @access  Private
router.post('/addTemplate', passport.authenticate('jwt',{session: false}),(req, res) => {
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


router.get("/generate/:eventTemplateName", passport.authenticate('jwt',{session: false}), (req,res)=>{
  Template.findOne({name: req.params.eventTemplateName})
    .then(template => {
      if (!template)
        return res.status(404).json({
          success: false,
          msg: "Not found"
        })
      Metric.deleteMany({template: template.id})
        .then(err=>{
        Event.find({templateId: template.id})
          .then(events=>{
            //get the non-object fields and manipulate

            let regularFields = template.fields.map(el=>{
              if(el.type =="object"){
                return null
              }else{
                return el.name;
              }
            }).filter(el=>{
              return el!=null
            });
            let metricsData = [];
            regularFields.forEach(field=>{
              let metric = {field, template: template.id, templateType: 'event', dataPoints:[]};
              events.forEach(event=>{
                metric.dataPoints.push({
                  event: event.id,
                  data: event.data[field]
                });
              });
              metricsData.push(metric);
            })
            console.log(metricsData);
            let objectFunct = template.fields.filter(el=>{
              return el.type === 'object'
            }).map(el=>{
              //console.log(el);
              return callback=>{
                Template.findOne({name: el.name})
                  .then(objTemplate=>{
                    //console.log(objTemplate);
                    Objects.find({templateId: objTemplate.id})
                    .then(objects=>{
                      //console.log(objects);
                      let metricsForObjects = [];
                      //console.log(objects);
                      //console.log(objects);
                      objects.forEach(obj=>{

                        let eventSpecific = events.find(ele=>{
                          //console.log(ele);
                          //console.log(obj);
                          return ele.data[el.name]===obj.data.Name}
                        );
                        if(eventSpecific){
                          metricsForObjects.push({
                            event: eventSpecific.id,
                            data: obj.data
                          });
                        }
                      });
                     // console.log(metricsForObjects);
                      metricsData.push({
                        field: el.name,
                        template: template.id,
                        templateType: "event",
                        typeMetric: "object",
                        dataPoints: metricsForObjects
                      });
                      console.log(metricsData);
                      callback(null, true);
                    })
                  })
              }
            });
            async.series(objectFunct, (err, result)=>{
             // console.log(metricsData);
              //console.log(metricsData[0].dataPoints);
              for(let i = 0; i < metricsData.length;i++){
                if(metricsData[i].typeMetric === 'object'&&metricsData[i].dataPoints.length>0){
                  let keys = Object.keys(metricsData[i].dataPoints[0].data);
                  for(let j=0;j<keys.length; j++){
                    let arrayData = metricsData[i].dataPoints.map(el=>{
                      return {
                        event: el.event,
                        data: el.data[keys[j]]
                      }
                    });
                    metricsData.push({
                      field: metricsData[i].field + "-" + keys[j],
                      template: template.id,
                      templateType: "event",
                      typeMetric: "objectFields",
                      dataPoints: arrayData
                    });

                  }
                  metricsData.splice(i, 1);
                  i--;
                }
              }
              Metric.insertMany(metricsData, (err, docs) => {
                res.json({
                  success: true,
                })
              })
            })
          })
      })
    });
});
//
// @route   GET api/reports/metrics/:eventTemplateName
// @desc    Get availabe metrics
// @access  Private
router.get("/metric/:eventTemplateName",passport.authenticate('jwt', {session: false}),(req, res)=>{
  Template.findOne({name: req.params.eventTemplateName})
    .then(template=>{
      if(!template)
        return res.status(404).json({
          success: false,
          msg: "Not Found"
        });
      Metric.find({template: template.id})
        .then(metrics=>{
          return res.json({
            success: true,
            metrics
          })
        })
    })
})
router.post("/apply/filters", passport.authenticate('jwt', {session: false}), (req, res)=>{
  //
});
module.exports= router;
