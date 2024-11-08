require('dotenv').config();
const wa = require('@open-wa/wa-automate');
const botConfig = require('./bot-config');
const MessageHandler = require('./message-handler');

async function startBot() {
  try {
    const client = await wa.create(botConfig);
    const messageHandler = new MessageHandler(client);

    client.onMessage(async message => {
      await messageHandler.handleMessage(message);
    });

    console.log('Bot started successfully!');
  } catch (error) {
    console.error('Error starting bot:', error);
    process.exit(1);
  }
}

startBot();
