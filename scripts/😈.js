module.exports = {
    config: {
        name: "😈",
        version: "1.0",
        author: "ʬɸʬ Shïsûį Dånïęl ʬɸʬ",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        if (event.body && event.body.toLowerCase() == "😈") return message.reply("𝑂ℎℎℎ🫥tu veux mourir🙂👈 !? Je peux t'aider à Mourir 😈");
    }
}
