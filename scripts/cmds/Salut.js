module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𝙋𝙧𝙤𝙨𝙩𝙚𝙧𝙣𝙚 𝙩𝙤𝙞 𝙙𝙚𝙫𝙖𝙣𝙩 𝙡𝙖 𝙩𝙤𝙪𝙩𝙚 𝙥𝙪𝙞𝙨𝙨𝙖𝙣𝙘𝙚 𝙙𝙪 𝙏𝙊𝙈𝘽𝙀𝘼𝙐 𝘿𝙀 𝙉𝘼𝙕𝘼𝙍𝙄𝙆 💀👹");
}
};
