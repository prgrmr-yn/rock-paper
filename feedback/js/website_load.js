const webhookUrl = 'https://discord.com/api/webhooks/1205391289781321728/EXf6DwCxPKRRFHeGbX_YDliMSnc8lNTfVQ2T-auczZ5S4PFsMatNFtx8B0epnuvU_4bD';

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
