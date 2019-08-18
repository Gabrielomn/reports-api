const greetingsReply = {
    "recipient":{
    "id":"<PSID>"
    },
    "messaging_type": "RESPONSE",
    "message":{
    "text": "Olá, sobre que tema gostaria de ler?",
    "quick_replies":[
        {
        "content_type":"text",
        "title":"Esportes",
        "payload":"report"
        },{
        "content_type":"text",
        "title":"Política",
        "payload":"report"
        },{
        "content_type":"text",
        "title":"Entretenimento",
        "payload":"report"
        },{
        "content_type":"text",
        "title":"Famosos",
        "payload":"report"
        }
    ]
    }
}

const carousel = {
    "recipient":{
        "id":"<PSID>"
    },
    "message":{
        "attachment":{
            "type":"template",
            "payload":{
                "template_type":"generic",
                "elements":[
                
                ]
            }
        }
    }
}
module.exports ={
    greetingsReply,
    carousel
}