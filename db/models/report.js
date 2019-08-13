const mongo = require('../database')

const ReportSchema = mongo.Schema({
    imgLink:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    theme:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
})

mongo.model('report', ReportSchema)
const report = mongo.model('report')
module.exports = report