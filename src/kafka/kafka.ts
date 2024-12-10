import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'ecommerce-app',
    brokers: ['localhost:9092']
});

export const producer = kafka.producer();

export async function sendMessage(topic: string, message: any) {
    await producer.connect();
    await producer.send({
        topic,
        messages: [{ value: JSON.stringify(message) }] // ???
    });
}

export const addProductToCart = sendMessage('cart-updates', {
    // user: ,
    // cart:
    // product:
});
