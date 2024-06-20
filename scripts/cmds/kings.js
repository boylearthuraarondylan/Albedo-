module.exports = {
  config: {
    name: "kings",
    aliases: ["kng"],
    version: "1.0",
    author: "Loid Butter | haitani du toman",
    countDown: 10,
    role: 0,
    shortDescription: "Play king, the oldest gambling game",
    longDescription: "Play king, the oldest gambling game, and earn money",
    category: "game",
    guide: "{pn} <ainz/gown> <amount of money>"
  },

  onStart: async function ({ args, message, usersData, event }) {
    const betType = args[0];
    const betAmount = parseInt(args[1]);
    const user = event.senderID;
    const userData = await usersData.get(event.senderID);

    if (!["ainz", "gown"].includes(betType)) {
      return message.reply("💙| 𝘾𝙝𝙤𝙞𝙨𝙞 𝙚𝙣𝙩𝙧𝙚 *𝙖𝙞𝙣𝙯* 𝙚𝙩 *𝙜𝙤𝙬𝙣*");
    }

    if (!Number.isInteger(betAmount) || betAmount < 1000) {
      return message.reply("❄| 𝙪𝙣 𝙢𝙤𝙣𝙩𝙖𝙣𝙩 𝙖𝙪 𝙢𝙤𝙞𝙣𝙨 𝙚𝙜𝙖𝙡𝙚 𝙖 1000");
    }

    if (betAmount > userData.money) {
      return message.reply("🥶| 𝘝𝘢 𝘧𝘢𝘪𝘳𝘦 𝘶𝘯 𝘱𝘳𝘦𝘵 𝘰𝘶 𝘥𝘦𝘮𝘢𝘯𝘥𝘦 𝘢𝘶 𝘮𝘢𝘪𝘵𝘳𝘦");
    }

    const dice = [1, 2, 3, 4, 5, 6];
    const results = [];

    for (let i = 0; i < 3; i++) {
      const result = dice[Math.floor(Math.random() * dice.length)];
      results.push(result);
    }

    const winConditions = {
      small: results.filter((num, index, arr) => num >= 1 && num <= 3 && arr.indexOf(num) !== index).length > 0,
      big: results.filter((num, index, arr) => num >= 4 && num <= 6 && arr.indexOf(num) !== index).length > 0,
    };

    const resultString = results.join(" | ");

    if ((winConditions[betType] && Math.random() <= 0.4) || (!winConditions[betType] && Math.random() > 0.4)) {
      const winAmount = 4 * betAmount;
      userData.money += winAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`🌊❄ 𝑪𝑶𝑪𝒀𝑻𝑼𝑺 ❄🌊\n_________________\n💙[ ${resultString} ]💙\n🎉 | 𝑭𝑬𝑳𝑰𝑪𝑰𝑻𝑨𝑻𝑰𝑶𝑵 𝑯𝑼𝑴𝑨𝑰𝑵,𝑻𝑼 𝑹𝑬𝑴𝑷𝑶𝑹𝑻𝑬 🎀${winAmount}€🎀 😶`);
    } else {
      userData.money -= betAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`🌊❄ 𝑪𝑶𝑪𝒀𝑻𝑼𝑺 ❄🌊\n_________________\n😈[ ${resultString} ]😈\n😷 | 𝑻𝑼 𝑷𝑬𝑹𝑫𝑺 𝑱𝑼𝑺𝑻𝑬 🌾${betAmount}€🌾 𝑹𝑰𝑬𝑵 𝑫𝑬 𝑮𝑹𝑨𝑽𝑬👌`);
    }
  }
};
