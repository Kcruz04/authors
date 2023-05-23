const {Component} = require('../models/component.model');

// Main route
module.exports.index = (req,res) => {
    res.json({
        message: "First route is successfull"
    })
}

//Create Component
module.exports.createComponent = (req,res) => {
    const { firstName, lastName} = req.body;
    Component.create({
        firstName,
        lastName
    })
    .then(component => res.json(component))
    .catch(err => res.status(400).json(err));
}

//Read All
module.exports.allComponents = (req,res) => {
    //this is the find function that 'req'/requests
    Component.find()
    //we use 'res' because this is after the 'req' has returned
    .then(allComponents => res.json(allComponents))
    .catch(err => res.json(err));
}

//Read One
module.exports.oneComponent = (req,res) => {
    console.log(req.params)
    //idfromparams is express variable
    //comes from '/:id' in route
    const idFromParams = req.params.id
    Component.findOne({_id: idFromParams})
    .then(oneComponent => res.json(oneComponent))
    .catch(err => res.json(err));
}

//Update Component
module.exports.updateComponent = (req,res) => {
    const idFromParams = req.params.id;
    const updateComponent = req.body;
    Component.findOneAndUpdate({_id: idFromParams}, updateComponent, {new: true})
    .then(updateComponent => res.json(updateComponent))
    // .catch(err => res.json({err:'err'}))
    .catch(err => res.status(400).json(err));

}

module.exports.deleteComponent =(req,res) => {
    Component.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}

