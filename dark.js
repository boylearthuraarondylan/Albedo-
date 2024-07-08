module.exports = {
  config: {
    name: "dark",
    aliases: ["drk"],
    version: "1.0",
    author: "ʬɸʬ Shïsûį Dånïęl ʬɸʬ",
    countDown: 10,
    role: 0,
    shortDescription: "Amuses toi bien au jeu du hasard",
    longDescription: "Seul le hasard tu rendras riche ou pauvre...Bonne chance",
    category: "game",
    guide: "{pn} <Sonic/Shadow> <amount of money>"
  },

  onStart: async function ({ args, message, usersData, event }) {
    const betType = args[0];
    const betAmount = parseInt(args[1]);
    const user = event.senderID;
    const userData = await usersData.get(event.senderID);

    if (!["sonic", "shadow"].includes(betType)) {
      return message.reply("🎁 | 𝘾𝙝𝙤𝙞𝙨𝙞𝙨 : 'DEATH' 𝙤𝙪 'NIGHT'.");
    }

    if (!Number.isInteger(betAmount) || betAmount < 100) {
      return message.reply("🌿 | 𝐌𝐢𝐬𝐞 𝐚𝐮 𝐦𝐨𝐢𝐧𝐬 100$ 𝐨𝐮 𝐩𝐥𝐮𝐬.");
    }

    if (betAmount > userData.money) {
      return message.reply("😹 | 𝒉𝒂𝒉𝒂𝒉𝒂 𝒅é𝒈𝒂𝒈𝒆 𝒇𝒂𝒖𝒄𝒉é😂🤣");
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
      const winAmount = 2 * betAmount;
      userData.money += winAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`😇😈𝑫𝑬𝑨𝑻𝑯👹👺  ───────────\n<(*✨∀✨*)ﾉ\n😪👈[ ${resultString} ]😴👈\n💩 | 𝑪𝒉𝒂𝒏𝒄𝒆 𝒑𝒐𝒖𝒓 𝒕𝒐𝒊 𝒄𝒆𝒕𝒕𝒆 𝒇𝒐𝒊𝒔🙄 👽${winAmount}€👾!`);
    } else {
      userData.money -= betAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`😇😈𝑫𝑬𝑨𝑻𝑯👹👺  ───────────\n🖕🏻(#°□°)🖕🏻\n😼[ ${resultString} ]😼\n😹 | 𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒆 𝒅𝒆 𝒑𝒆𝒓𝒅𝒓𝒆 𝒄'𝒆𝒔𝒕 𝒃𝒊𝒆𝒏 👽${betAmount}€👾.`);
    }
  }
};
