const webhookUrl = 'https://discord.com/api/webhooks/1351821864762212352/TGQ1fJE1bTrhjh9KcT-dl75WRAgGVUktwi00hHSl9eX-LwRl9uLD5kB8VIcnsKCD-UYl';

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
