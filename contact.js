//autosend

const webhookUrl = 'https://discord.com/api/webhooks/1205389933133439026/3INtBZGVld9gpoGxgPyBaz2ueMgp4uAOF4W9zwEOJkYpeHH5Vtn93RQllGk2ovFcohvu';

function sendToDis(webhookUrl) {
  window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "content": `Someone is on your website from ${navigator.appVersion.slice(5, 33)}
          `,
      })
    })
    console.log('sent');
  });
}

sendToDis(webhookUrl);
