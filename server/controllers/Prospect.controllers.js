
const Prospect = require("../models/Prospect");



module.exports = {

    findAll: (req, res) => {
        Prospect.find()
            .then(allProspects => res.json(allProspects))
            .catch(err => res.status(400).json({ message: "error", error: err }))
    },

    findOne: (req, res) => {
        console.log("find one executed");
        Prospect.findById(req.params.id)
            .then(Prospect => res.json(Prospect))
            .catch(err => res.status(400).json({ message: "error", error: err }))
    },

    create: (req, res) => {
        // const {title, content, isImportant} = req.body
        Prospect.create(req.body)
            .then(newProspect => res.json(newProspect))
            .catch(err => res.status(400).json({ message: "error", error: err }))
    },

    update: (req, res) => {
        Prospect.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedProspect => res.json(updatedProspect))
            .catch(err => res.status(400).json({ message: "error", error: err }))
    },

    delete: (req, res) => {
        Prospect.findByIdAndDelete(req.params.id)
            .then( result => res.json({result: result}))
            .catch( err => res.status(400).json({err: err}))
    },

    // register: (req, res) => {
    //     User.create(req.body)
    //         .then(user => {
    //         res.json({ msg: "success!", user: user });
    //         })
    //         .catch(err => res.json(err));
    //         console.log("User Create Func Fired")
    //         }

}