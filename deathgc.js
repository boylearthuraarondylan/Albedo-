const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "deathgc",
    aliases: ["death"],
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "add user in thread"
    },
    longDescription: {
      vi: "",
      en: "add any user to bot owner group chat"
    },
    category: "GroupMsg",
    guide: {
      en: "{pn}exegc"
    }
  },

  onStart: async function ({ api, event, args }) {
    const threadID = "7514556825304202";
    try {
      // Check if the user is already in the group chat
      const threadInfo = await api.getThreadInfo(threadID);
      const participants = threadInfo.participantIDs;

      if (participants.includes(event.senderID)) {
        api.sendMessage("👿💢𝘛'𝘦𝘴 𝘥𝘦𝘫𝘢 𝘥𝘢𝘯𝘴 𝘭𝘦 𝘨𝘳𝘰𝘶𝘱𝘦 𝘴𝘪 𝘵𝘶 𝘵𝘳𝘰𝘶𝘷𝘦𝘴 𝘱𝘢𝘴 𝘷𝘦𝘳𝘪𝘧𝘪𝘦 𝘵𝘢 𝘣𝘰𝘪𝘵𝘦 𝘥𝘦 𝘮𝘦𝘴𝘴𝘢𝘨𝘦𝘴 𝘦𝘵 𝘴𝘱𝘢𝘮👿🪄", event.threadID);

        // Set ⚠ reaction for already added user
        api.setMessageReaction("⚠", event.messageID, "💌", api);
      } else {
        // If not, add the user to the group chat
        await api.addUserToGroup(event.senderID, threadID);
        api.sendMessage("☠️ | 𝑴𝒂𝒊𝒏𝒕𝒆𝒏𝒂𝒏𝒕 𝑸𝒖𝒆 𝑻𝒖 𝑬𝒔𝒕 𝑨𝒗𝒆𝒄 𝑵𝒐𝒖𝒔,𝑻'𝒂𝒊 𝑭𝒐𝒖𝒕𝒖😈🦇", event.threadID);

        // Set 👹 reaction for successfully added user
        api.setMessageReaction("👹", event.messageID, "🪄", api);
      }
    } catch (error) {
      api.sendMessage("🙀 | 𝑫𝒔𝒍,𝑴𝒂𝒊𝒔 𝒋'𝒂𝒊 𝒑𝒂𝒔 𝒆𝒏𝒗𝒊𝒆 𝒅𝒆 𝒕'𝒂𝒋𝒐𝒖𝒕𝒆𝒓 𝒑𝒐𝒖𝒓 𝒍'𝒊𝒏𝒔𝒕𝒂𝒏𝒕", event.threadID);

      // Set 🙆 reaction for failed adding user
      api.setMessageReaction("💀", event.messageID, "👍", api);
    }
  }
}
