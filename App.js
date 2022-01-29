const {Kafka}=require("kafkajs")
const consumerFunctions = require("./Core/Consumer")
const producerFunctions= require("./Core/Producer")
const clientId = "app"
const brokers = ["localhost:9092"]

var kafka=new Kafka({clientId,brokers})


var producer=producerFunctions.createProducer(kafka)
var consumer=consumerFunctions.createConsumer(kafka,"app")
producerFunctions.sendMessage(producer,"hello","begining","1")
consumerFunctions.getMessage(consumer,"begining")


// cd usr/local/kafka
// bin/zookeeper-server-start.sh config/zookeeper.properties
//bin/kafka-server-start.sh config/server.properties