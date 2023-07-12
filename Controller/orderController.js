import KafkaConfig from "../config.js";

export default class orderController {
    constructor() { }
    async createOrder(req, res) {
        try {
            const orderData = req.body;
            orderData.orderId = (Math.random() * 1000).toString();
            orderData.status = "SUCCESS";
            let orderObj = JSON.stringify(orderData);
            const kafkaConfig = new KafkaConfig();
            const messages = [{ key: orderData.orderId, value: orderObj }];
            kafkaConfig.produce("order-created", messages);
            res.status(200).json({
                status: "Ok!",
                message: "Order created successfully!",
            });
        } catch (error) {
            console.log(error);
        }
    }

    async createPayment(req, res) {
        try {
            const paymentData = req.body;
            paymentData.paymentId = (Math.random() * 1000).toString();
            paymentData.status = "SUCCESS";
            let paymentObj = JSON.stringify(paymentData);
            const kafkaConfig = new KafkaConfig();
            const messages = [{ value: paymentObj }];
            kafkaConfig.produce("payment-created", messages);
            res.status(200).json({
                status: "Ok!",
                message: "Payment created successfully!",
            });
        } catch (error) {
            console.log(error);
        }
    }
}