
var consumerFunctions={

    createConsumer:(kafka,clientId)=>{
        return kafka.consumer({groupId:clientId})
    },
    getMessage:async(consumer,topic)=>{
        await consumer.connect()
        await consumer.subscribe({topic})
        await consumer.run({
            eachMessage:({message})=>{
                console.log("received "+message.value)
            }
        })

    }




}
module.exports=consumerFunctions

