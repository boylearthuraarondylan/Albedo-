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
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𝙋𝙧𝙤𝙨𝙩𝙚𝙧𝙣𝙚 𝙩𝙤𝙞 𝙙𝙚𝙫𝙖𝙣𝙩 𝑻𝑯𝑬 𝑫𝑬𝑨𝑻𝑯 𝑵𝑰𝑮𝑯𝑻  💀👹");
}
};
