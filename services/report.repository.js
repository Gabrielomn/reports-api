const Report = require('../db/models/report')

exports.create = async(body) => {
    const report = await new Report(body).save().catch((err)=>{
        console.log(err)
    })
    return report;
}

exports.update = async(id, body) => {
    const report = await Report.findByIdAndUpdate({_id:id}, body).catch((err)=>{
        console.log(err)
    })
    return report;
}

exports.getAll = async() =>{
    let reports = await Report.find().catch(err => {
        console.log('no such reports')
    })
    return reports

}

exports.getByID = async(id) =>{
    let report = await Report.findById({_id:id})
    return report
}

exports.delete = async(id) => {
    await Report.findByIdAndDelete({_id:id})
}

exports.getByTheme = async(theme) => {
    console.log(theme)
    let reports = await Report.find({theme:theme})
    return reports
}