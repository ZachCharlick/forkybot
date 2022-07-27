const request = require('request-promise');
const { WebClient, LogLevel } = require("@slack/web-api");

const client = new WebClient(oAuthBotToken, {
    //LogLevel can make debugging simpler
    logLevel: LogLevel.DEBUG
});

const { App } = require('@slack/bolt');

const app = new App({
  token: oAuthBotToken,
  appToken: socketToken,
  socketMode: true,
});

(async () => {
  await app.start();
  console.log('⚡️ Bolt app started');

  try {
    // Call the chat.postMessage method using the WebClient
    const result = await client.chat.postMessage({
      channel: '#test',
      text: "ForkyBot has started up! :robert-point:"
    });
  
    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
})();

app.event('app_mention', async ({ event, client, logger }) => {
    console.log("App Mention event detected");
    try {
      // Call chat.postMessage with the built-in client
      const result = await client.chat.postMessage({
        channel: '#test',
        text: `Hi, <@${event.user}>! You sent a message that said "${event.text}"`
      });
      logger.info(result);
    }
    catch (error) {
      logger.error(error);
    }
});

app.event('reaction_added', async ({ event, client, logger }) => {
    console.log("Reaction Added");

    if(event.reaction === 'robert-point'){
        try {
            // Call chat.postMessage with the built-in client
            const result = await client.chat.postMessage({
              channel: event.item.channel,
              text: `Robert Reaction`
            });
      
            logger.info(result);
          }
          catch (error) {
            logger.error(error);
          }
    }
    
});


(async function () {
    try {
        const slackBody = {
            text: ':robert-point:',
            channel: '#test'
        };
        
        const res = await request({
            url: testChannelWebhook,
            method: 'POST',
            body: slackBody,
            json: true
        });

        console.log(res);

    } catch (e) {
        console.log('our error', e)
    }
})();