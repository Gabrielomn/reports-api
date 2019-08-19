const axios = require('axios')
const express = require('express')
const router = require('express').Router()
const facebookUrl = `https://graph.facebook.com/v4.0/me/messages?access_token=${process.env.FACEBOOK_TOKEN}`
const repository = require('./report.repository')
const replies = require('./replies')

router.get('/', (req, res) => {

    let myToken = 'dreamtheater'
    let mode = req.query['hub.mode']
    let token = req.query['hub.verify_token']
    let challenge = req.query['hub.challenge']
    if(token && mode){
        if(mode=='subscribe' && token == myToken){
            console.log('verified')
            res.status(200).send(challenge)
        }
    }
})

router.post('/', (req, res) => {
    const sender = req.body.entry[0].messaging[0].sender.id
    response = replies.greetingsReply
    response.recipient.id = sender
    
    if(req.body.entry[0].messaging[0].message.text){
        if(!req.body.entry[0].messaging[0].message.quick_reply){
            greetings(req, res)
        }else{
            sendReports(req, res)
        }
    }
})

const greetings = function(req, res){
    const sender = req.body.entry[0].messaging[0].sender.id
    response = replies.greetingsReply
    response.recipient.id = sender
    axios.post(facebookUrl, response).then(()=>{
        res.status(200).send('EVENT_RECEIVED')
    })
}

const sendReports = async function(req, res){
    const sender = req.body.entry[0].messaging[0].sender.id
    const theme = req.body.entry[0].messaging[0].message.text
    let reports = await repository.getByTheme(theme)
    let response
    if(reports.length != 0){
        response = replies.carousel
        response.message.attachment.payload.elements = getGenerics(reports)

    }else{
        response = replies.apology
    }
    response.recipient.id = sender
    axios.post(facebookUrl,response).then(() => {
        res.status(200).send('EVENT_RECEIVED')
    }).catch(err => {
        console.log(err)
    })
}

const getGenerics = function(reports){
    let output = [];
    for(let i = 0; i < min(10,reports.length); i++){
        let report = reports[i]
        output[i] = genericBuilder(report.title, report.description, report.link, report.imgLink)
    }
    return output
}

function min(a, b){
    if (a < b){
        return a
    }else{
        return b
    }
}

const genericBuilder = function(title, description, link, imgLink){
    return{
        "title":title,
        "image_url":imgLink,
        "subtitle":description,
        "default_action":{
            "type":"web_url",
            "url":link,
        }
    }
}

module.exports = router