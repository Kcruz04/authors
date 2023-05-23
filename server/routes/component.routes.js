const ComponentController = require('../controllers/component.controller');


module.exports = (app) => {
    //Main route
    app.get('/api', ComponentController.index)

    
    //Create component
    app.post('/api/create', ComponentController.createComponent)

    //Read all
    app.get('/api/allComponents', ComponentController.allComponents)

    //Read One
    app.get('/api/oneComponent/:id', ComponentController.oneComponent)

    //Update One by ID
    app.put('/api/updateComponent/:id', ComponentController.updateComponent)

    //Delete One
    app.delete('/api/delete/:id', ComponentController.deleteComponent)
}
