const { getStreamFromURL } = require("fb-watchman");

module.exports = {
  config: {
    name: "stats",
    aliases: ["ping","upt","time"],
    version: "1.0",
    author: "OtinXSandip",
    role: 0,
    shortDescription: {
      en: "stats",
    },
    longDescription: {
      en: "shows stats of bot.",
    },
    category: "system",
    guide: {
      en: "Use {p}stats to see stats of bot.",
    },
  },

  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();

      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);

      const uptimeString = `${hours}Hrs ${minutes}min ${seconds}sec`;

      const currentDate = new Date();
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      const date = currentDate.toLocaleDateString("en-US", options);
      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kathmandu",
        hour12: true,
      });

      const timeStart = Date.now();
      await api.sendMessage({
        body: "✨𝑫𝑰𝑺𝑻𝑨𝑵𝑪𝑬🍀𝑷𝑨𝑹𝑪𝑶𝑼𝑹𝑼𝑬✨",
      }, event.threadID);

      const ping = Date.now() - timeStart;

      let pingStatus = "Not smooth throw your router, buddy";
      if (ping < 400) {
        pingStatus = "Smooth like your tiny pussy";
      }

      // Assuming global.utils.getStreamFromURL(img) is correctly defined
      const imgURL= "https://i.imgur.com/9Qx4mgn.jpeg";
      const attachment = await global.utils.getStreamFromURL(imgURL); api.sendMessage({
        body: `🍀𝑆𝑈𝑃𝐸𝑅♻️𝑆𝑂𝑁𝐼𝐶🍀\n━━━━━━━━━━━━━━━━
🍀 | 𝐒𝐎𝐍𝐈𝐂 𝐑𝐔𝐍𝐍𝐈𝐍𝐆 𝐓𝐈𝐌𝐄﹞\n${uptimeString}\n━━━━━━━━━━━━━━━━
📅 | 𝗗𝗔𝗧𝗘﹞: ${date}\n────────\n 𝗧𝗲𝗺𝗽: ${time}\n━━━━━━━━━━━━━━━━
🏂 | 𝘛𝘰𝘵𝘢𝘭 𝘜𝘴𝘦𝘳𝘴﹞\n allUsers.length}\n━━━━━━━━━━━━━━━━
🏢 | 𝘛𝘰𝘵𝘢𝘭 𝘛𝘩𝘳𝘦𝘢𝘥𝘴﹞\n allThreads.length}\n 🎶| 𝗔𝗶𝗻𝗲 ﹞: ${ping}ms\n━━━━━━━━━━━━━━━━\n status: ${pingStatus}`,
        attachment: attachment,
      }, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
}
