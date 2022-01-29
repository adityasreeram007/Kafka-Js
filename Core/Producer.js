
var producerFunctions={
createProducer:(kafka)=>{
    
    var producer=kafka.producer()
    return producer



},
sendMessage:async (producer,message,topic,key)=>{
    await producer.connect()
    setInterval(async()=>{
    try{
        
        await producer.send({
            topic,
            messages:[
                
                {
                key:key.toString(),
                value:message
                }
            ]
        })
        key=key+"1"

    }
    catch(err){
        console.log("err "+err)
    }

},1000)
}

}
module.exports=producerFunctions