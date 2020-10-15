let webPush = require('web-push');
const vapidKeys = {
   "publicKey": "BBIK6W0gyuVKVqZW2VE7jMxByq2_M3e9JpgStSmSr8FZU918eZOzXVypdt1_2U0V3x79bFOekxVJwC4Hf7OzbzE",
   "privateKey": "C0loEU5PbaVNz15B43tdHULVYiVmPGjKHqPTcfCd24w"
};
 
webPush.setVapidDetails(
   'mailto:lukman.trescode@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/e_PNjiGnpYI:APA91bHAqwiZ8Qsn9OiaLA-7ZXhijCsbYwSf5dfLx3oHF1u2v32zHCLJSmOwh7eo2jtwiVOBIcqn1HcREqOKuq8iLF6QafmC1uMLjbryWfQ4Uw-Av1y1F4bwx2DtGwzVATM5NSTwJfTG",
    "keys": {
        "p256dh": "BK9hsFHkg6T/ADrkfAIQnqB7vma3TlEs63TLZx3IgDj05XiucBXgq+4BgpIvp1G0ftWSFunW9UxWs5UU4uxk3Ek=",
        "auth": "TuiByW+MS3pwTyNGKueReQ=="
    }
};
const payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
const options = {
    gcmAPIKey: '91036698074',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);