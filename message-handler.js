class MessageHandler {
  constructor(client) {
    this.client = client;
  }

  async handleMessage(message) {
    try {
      switch(message.body.toLowerCase()) {
        case '!ping':
          await this.client.sendText(message.from, 'pong');
          break;
          
        case '!hello':
          await this.client.sendText(message.from, 'Hello! How can I help you today?');
          break;
          
        case '!time':
          const time = new Date().toLocaleString();
          await this.client.sendText(message.from, `Current time is: ${time}`);
          break;
          
        case '!help':
          const helpMessage = `Available commands:
            !ping - Check if bot is alive
            !hello - Get a greeting
            !time - Get current time
            !help - Show this message`;
          await this.client.sendText(message.from, helpMessage);
          break;
          
          default:
            await this.client.sendText(message.from, "קיבלתי");
            break;
      }
    } catch (error) {
      console.error('Error handling message:', error);
    }
  }
}

module.exports = MessageHandler;
