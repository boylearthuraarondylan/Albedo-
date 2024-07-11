const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "Arthur",
    aliases: ["aaron"],
    author: " Aesther ", 
    version: "2.0",
    cooldowns: 5,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "get bot owner info"
    },
    category: "owner",
    guide: {
      en: "{p}{n}"
    }
  },
  onStart: async function ({ api, event }) {
      try {
        const loadingMessage = "𝙻𝙾𝙰𝙳𝙸𝙽𝙶......⚜ ";
        await api.sendMessage(loadingMessage, event.threadID);

        const ownerInfo = {
          name: '🌿✨𝑨𝑹𝑻𝑯𝑼𝑹🍀🎀',
          gender: '𝗕𝗢𝗬',
          hobby: '𝒏𝒐𝒖𝒗𝒆𝒂𝒖𝒕é𝒔',
          relationship: '😇𝐄𝐧 𝐜𝐨𝐮𝐩𝒍𝒆 𝒂𝒗𝒆𝒄 𝒍𝒆 𝒄é𝒍𝒊𝒃𝒂𝒕🍾
          facebookLink: 'ʚɸɞhttps://www.facebook.com/profile.php?id=100090405019929.ʚɸɞ',
          bio: '🍀✨𝐃𝐚𝐧𝐢𝐞𝐥❦𝐔𝐜𝐡𝐢𝐰𝐚✨🍀 👮𝐏𝐨𝐥𝐢𝐜𝐞 𝐔𝐜𝐡𝐢𝐰𝐚🍀𝐒𝐨𝐜𝐢𝐚𝐥𝐞🍀𝐃𝐞 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤👮'
        };

        const videoUrl = 
["https://i.imgur.com/ZpgBKGA.mp4",
"https://i.imgur.com/h6J9tkb.mp4",
"https://i.imgur.com/RmMI3dC.mp4",
"https://i.imgur.com/jeyjWuk.mp4",
"https://i.imgur.com/HIWaV6d.mp4",
"https://i.imgur.com/BXmgByZ.mp4",
"https://i.imgur.com/wuo18rR.mp4",
"https://i.imgur.com/C4neV9i.mp4",
"https://i.imgur.com/pdr6e4T.mp4",
"https://i.imgur.com/OAmV2Wr.mp4",
"https://i.imgur.com/gPl8sV2.mp4",
"https://i.imgur.com/nU8Gsyn.mp4",];
        const tmpFolderPath = path.join(__dirname, 'tmp');

        if (!fs.existsSync(tmpFolderPath)) {
          fs.mkdirSync(tmpFolderPath);
        }

        const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
        const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

        fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

        const response = `
          𝗼𝘄𝗻𝗲𝗿 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻🔬:
❍⌇─➭ 
(◍•ᴗ•◍)𝗡𝗔𝗠𝗘 : $ 𝐑𝐈𝐂𝐇𝐀𝐑𝐃
❍⌇─➭ 
♀𝗚𝗘𝗡𝗥𝗘♂: $ 𝐁𝐎𝐘
❍⌇─➭ 
🏓𝗛𝗢𝗕𝗕𝗬⛹‍♂: $ 𝐁𝐀𝐒𝐊𝐄𝐓
❍⌇─➭
𝗥𝗘𝗟𝗔𝗧𝗢𝗡𝗦𝗛𝗜💞:$ 𝑪É𝑳𝑰𝑩𝑨𝑻𝑨𝑰𝑹𝑬
❍⌇─➭ 
 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞🔗: $ 𝑼𝑵𝑫𝑬𝑭𝑰𝑵𝑬𝑫 
❍⌇─
      ◈ 𝗦𝗧𝗔𝗧𝗨𝗦 ◈: $ 🇨🇮𝑨𝑹𝑻𝑯𝑼𝑹 𝑨𝑨𝑹𝑶𝑵 🍷😴👈𝑷𝑨𝐒𝐒𝐈𝐎𝐍𝐍É 𝐃𝐄 𝑵𝑶𝑼𝑽𝑬𝑨𝑼𝑻É
        `;

        await api.sendMessage({
          body: response,
          attachment: fs.createReadStream(videoPath)
        }, event.threadID);
      } catch (error) {
        console.error('Error in owner command:', error);
        api.sendMessage('An error occurred while processing the command.', event.threadID);
      }
    },
    onChat: async function({ api, event }) {
      try {
        const lowerCaseBody = event.body.toLowerCase();
        
        if (lowerCaseBody === "owner" || lowerCaseBody.startsWith("{p}owner")) {
          await this.onStart({ api, event });
        }
      } catch (error) {
        console.error('Error in onChat function:', error);
      }
    }
  };
