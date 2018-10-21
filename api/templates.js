const router = require("express").Router();
const passport = require('passport');
const mongoose =  require("mongoose");

const Template = mongoose.model("templates");
const User = mongoose.model("users");
// @route   GET api/templates/
// @desc    Get all templates available to user
// @access  Private
router.get("/", passport.authenticate('jwt',{session: false}), (req, res)=>{
  //check organization
  //implementation
  Template.find({})
    .then(templates=>{
      return res.json({
        success: true,
        templates
      });
    })
    .catch(err=>{
      return res.status(400).json({
        success: false,
        msg: "templates access error"
      })
    });
});
// @route   GET api/templates/event
// @desc    Get all templates available to user
// @access  Private
router.get("/event", passport.authenticate('jwt',{session: false}), (req, res)=>{
  //check organization
  //implementation
  Template.find({type: "event"})
    .then(templates=>{
      return res.json({
        success: true,
        templates
      });
    })
    .catch(err=>{
      return res.status(400).json({
        success: false,
        msg: "templates access error"
      })
    });
});
// @route   GET api/templates/objects
// @desc    Get all templates available to user
// @access  Private
router.get("/object", passport.authenticate('jwt',{session: false}), (req, res)=>{
  //check organization
  //implementation
  Template.find({type: "object"})
    .then(templates=>{
      return res.json({
        success: true,
        templates
      });
    })
    .catch(err=>{
      return res.status(400).json({
        success: false,
        msg: "templates access error"
      })
    });
});
// @route   POST api/templates/
// @desc    Create New 
// @access  Private
router.post("/", passport.authenticate('jwt',{session: false}), (req, res)=>{
  const {name} = req.body;
  const template = {
    type: req.body.templateOption,
    fields: req.body.attributes, 
    name,
    organization: req.user.organization
  };
  const templateInstance = new Template(template);
  templateInstance.save()
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
// @route   GET api/templates/:id
// @desc    Get specific Template
// @access  Private
router.get("/:id", passport.authenticate('jwt', {session: false}),(req, res)=>{
  Template.findById(req.params.id)
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
});
// @route   DELETE api/templates/:id
// @desc    Get specific Template
// @access  Private
router.delete("/:id", passport.authenticate('jwt', {session: false}), (req, res)=>{
  Template.findById(req.params.id)
    .then(template=>{
      if(!template)
        return res.status(404).json({
          success: false,
          msg: "Not Found"
        })
      Template.findById(req.params.id).remove(()=>{
          return res.json({
            success: true
          })
        })
    })
})
module.exports=router;