const Report = require('../db/models/report')

exports.create = async(req, res) => {
    new Report({
        imgLink:req.body.imgLink,
        title:req.body.title,
        description:req.body.description,
        theme:req.body.theme,
        link:req.body.link
    }).save().then(report => {
        console.log('created with sucess')
        res.status(200).send(report)
    }).catch(err => {
        console.log(err)
        res.status(400).json('Something went wrong')
    })
}


exports.update = async(req, res) => {
    Report.findByIdAndUpdate({_id:req.params.id}, req.body).then(report => {
        console.log('udpated with sucess')
        res.status(200).send(report)
    }).catch(err => {
        console.log(err)
        res.status(404).json("Most likely there wasnt such report")

    })
}

exports.getAll = async(req, res) =>{
    Report.find().then(reports =>{
        res.status(200).send(reports)
    }).catch(err => {
        res.status(404).json("No reports were found")
    })
}

exports.getByID = async(req, res) =>{
    Report.findById({_id:req.params.id}).then(report => {
        res.status(200).send(report)
    }).catch(err => {
        console.log(err)
        res.status(404).json("Most likely there wasnt such report")
    })

}

exports.delete = async(req, res) => {
    Report.findByIdAndDelete({_id:req.params.id}).then(()=>{
        res.status(200).json("report destroyed")
    }).catch(err =>{
        console.log(err)
        res.status(404).json("Most likely there wasnt such report")
    })

}
