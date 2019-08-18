const Report = require('../db/models/report')
const repository = require('./report.repository')
const bodyParser = require('body-parser')
 
exports.create = async(req, res) => {
    let report = await repository.create(req.body)
    if(report){
        res.status(201).send(report)
    }else{
        res.status(400).json("something went wrong")
    }
}

exports.update = async(req, res) => {
    let report = await repository.update(req.params.id, req.body)
    if(report){
        res.status(200).send(report)
    }else{
        res.status(400).json("Something went wrong")
    }
}

exports.getAll = async(req, res) =>{
    let reports = await repository.getAll()
    res.status(200).send(reports)
}

exports.getByID = async(req, res) =>{
    let report = repository.getByID(req.params.id)
    if(report){
        res.status(200).send(report)
    }else{
        res.status(404).json("Most likely there wasnt such report")
    }

}

exports.delete = async(req, res) => {
    repository.delete(req.params.id)
    res.status(200).json("Okay, destroyed")
}
