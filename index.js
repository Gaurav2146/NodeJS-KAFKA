import express from "express";
import bodyParser from "body-parser";
import constrollers from "./controller.js";
import KafkaConfig from "./config.js";
import Orderconstroller from "./Controller/orderController.js";

const app = express();
const jsonParser = bodyParser.json();

app.post("/api/send", jsonParser, new Orderconstroller().createOrder);
app.post("/api/payment", jsonParser, new Orderconstroller().createPayment);

const kafkaConfig = new KafkaConfig();

kafkaConfig.consume((topic, value) => {
  if (topic == "payment-created") {
    console.log("📨 Receive message inside payment-created: ", value);
  }
  else {
    console.log("📨 Receive message inside order-created: ", value);
  }
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});
