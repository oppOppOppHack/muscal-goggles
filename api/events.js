const router = require('express').Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Event = mongoose.model('events');
const Template = mongoose.model('templates');

// @route   POST api/events/add
// @desc    add a list of events
// @access  Private
router.post('/add/:name', passport.authenticate('jwt',{session: false}),(req, res) => {
	// expects array of events with the same templateId to be inserted
	// validate input
	if(!Array.isArray(req.body) || req.body.length < 1)
	{
		return res.status(400).json({
			success: false,
			msg: "Bad Request Body"
		});
	}
	Template.findOne({name: req.params.name})
		.then(template=>{
			if(!template)
				return res.status(404).json({
					success: false,
					msg: "Template not found"
				});
			
			const eventDocs = req.body.map(el=>{
				return {
					data: el,
					templateId: template._id
				}
			})

			Event.collection.insert(eventDocs, (err, docs) => {
				// on error
				if (err) {
					return res.status(500).json({
						success: false,
						msg: "Error adding events"
					});
				} else {
					return res.status(200).json({
						success: true,
						msg: "Added events",
						eventArray: docs
					});
				}
			});
		})
});
//TODO:
// @route   POST api/events/remove
// @desc    remove events by uid
// @access  Private
router.post('/remove', (req, res) => {
	// expects an array of Event uids to remove
	// validate input
	if(typeof(req.body) != array || req.body.length < 1) {
		return res.send(400).json({
			success: false,
			msg: "Bad Request Body"
		});
	}

	uidList = req.body;

	//TODO: Probably more verification

	Event.deleteMany({_id: { $in: uidList }}, (err) => {
		if(err) {
			return res.send(500).json({
				success: false,
				msg: "Failed to delete events from database"
			});
		}
		else {
			return res.send(200).json({
				success: true,
				msg: "Deleted events from database"
			});
		}
	});
});

// @route   POST api/events/getEventsByUID
// @desc    return a list of events with the given uid(s)
// @access  Private
router.post('/getEventsByParams/:templateId', (req, res) => {
/*
	{
		<field>: <value>
	}
*/

			Event.find({data: req.body, tempateId:req.params.templateId}, (err, docs) => {
				if (err) {
					return res.send(500).json({
						success: false,
						msg: "Could not find events"
					});
				} else {
					return res.send(200).json({
						success: true,
						msg: "Found events",
						data: docs
					});
				}
			});


});

// @route   POST api/events/getEventsByTemplateID
// @desc    return a list of events with the given templateId(s)
// @access  Private
router.post('/getEventsByTemplateID', (req, res) => {
	// expects array of templateIds to return results for
	// validate input
	tidList = req.body;
	Event.find({templateId: { $in: tidList }}, (err, docs) => {
		if(err) {
			return res.send(500).json({
				success: false,
				msg: "Could not find events"
			});
		}
		else {
			return res.send(200).json({
				success: true,
				msg: "Found events",
				data: docs
			});
		}
	});
});
module.exports = router;