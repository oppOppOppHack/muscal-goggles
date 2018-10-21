const router = require('express').Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const Object = mongoose.model('objects');

// @route   POST api/objects/add
// @desc    add a list of objects
// @access  Private
router.post('/add', (req, res) => {
	// expects array of objects with the same templateId to be inserted
	// validate input
	if(typeof(req.body) != array || req.body.length < 1)
	{
		return res.status(400).json({
			success: false,
			msg: "Bad Request Body"
		});
	}

	objList = req.body;

	//' array of objects MUST HAVE THE SAME templateId
	tid = objList[0].templateId;

	//TODO: validate template against array elements

	// insert objects into database
	Object.collection.insert(objList, (err, docs) => {
		// on error
		if(err){
				return res.status(500).json({
					success: false,
					msg: "Error adding objects"
				});
		}

		else{
			return res.status(200).json({
				success: true,
				msg: "Added objects"
				newobj: docs
			});
		}
	});
});

// @route   POST api/objects/remove
// @desc    remove objects by uid
// @access  Private
router.post('/remove', (req, res) => {
	// expects an array of Object uids to remove
	// validate input
	if(typeof(req.body) != array || req.body.length < 1) {
		return res.send(400).json({
			success: false,
			msg: "Bad Request Body"
		});
	}

	uidList = req.body;

	//TODO: Probably more verification

	Object.deleteMany({_id: { $in: uidList }}, (err) => {
		if(err) {
			return res.send(500).json({
				success: false,
				msg: "Failed to delete objects from database"
			});
		}
		else {
			return res.send(200).json({
				success: true,
				msg: "Deleted users from database"
			});
		}
	});
});

// @route   POST api/objects/getObjectByUID
// @desc    return a list of objects with the given uid(s)
// @access  Private
router.post('/getObjectByUID', (req, res) => {
	// expects array of uids to get objects
	// validate input
	if(typeof(req.body) == array || req.body.length < 1) {
		return res.send(400).json({
			success: false,
			msg: "Bad Request Body"
		});
	}

	uidList = req.body;
	Object.find({_id: { $in: uidList }}, (err, docs) => {
		if(err) {
			return res.send(500).json({
				success: false,
				msg: "Could not find objects"
			});
		}
		else {
			return res.send(200).json({
				success: true,
				msg: "Found objects",
				data: docs
			});
		}
	});
});

// @route   POST api/objects/getObjectsByTemplateID
// @desc    return a list of objects with the given templateId(s)
// @access  Private
router.post('/getObjectsByTemplateID', (req, res) => {
	// expects array of templateIds to return results for
	// validate input
	if(typeof(req.body) == array || req.body.length < 1) {
		return res.send(400).json({
			success: false,
			msg: "Bad Request Body"
		});
	}

	tidList = req.body;
	Object.find({templateId: { $in: tidList }}, (err, docs) => {
		if(err) {
			return res.send(500).json({
				success: false,
				msg: "Could not find objects"
			});
		}
		else {
			return res.send(200).json({
				success: true,
				msg: "Found objects",
				data: docs
			});
		}
	});
});
