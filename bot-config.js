module.exports = {
  sessionId: process.env.BOT_NAME || 'WHATSAPP_BOT',
  multiDevice: true,
  authTimeout: 60,
  blockCrashLogs: true,
  disableSpins: true,
  headless: true,
  hostNotificationLang: 'en',
  logConsole: false,
  popup: true,
  qrTimeout: 0
};
