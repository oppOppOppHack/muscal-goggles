const router = require("express").Router();
const passport = require('passport');
const mongoose =  require("mongoose");

const Template = mongoose.model("templates");
// @route   GET api/templates/
// @desc    Get all templates available to user
// @access  Private
router.get("/", passport.authenticate({session: false}), (req, res)=>{
  //check organization
  //implementation
  Template.find({})
    .then(templates=>{
      res.json({
        success: true,
        templates
      });
    })
    .catch(err=>{
      res.status(400).json({
        success: false,
        msg: "templates access error"
      })
    });
});
// @route   POST api/templates/
// @desc    Create New 
// @access  Public
router.post("/", passport.authenticate({session: false}), (req, res)=>{
  const {type, fields, name} = req.body;
  const template = {
    type,
    fields, 
    name
  }
});