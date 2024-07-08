const axios = require("axios")
module.exports = {
	config: {
		name: 'death.exe',
        aliases: ["exe"],
		version: '1.2',
		author: 'Luxion/fixed by Riley',
		countDown: 0,
		role: 0,
		shortDescription: 'AI CHAT',
		longDescription: {
			en: 'Chat with Xae'
		},
		category: 'Ai chat',
		guide: {
			en: "{pn} <word>: chat with lina"
				+ "\Example:{pn} hi"
		}
	},

	langs: {
		en: {
			turnedOn: "𝑫𝑰𝑻 𝑨𝑫𝑰𝑬𝑼 À 𝑪𝙚 𝙢𝙤𝙣𝙙𝙚....𝑻𝑯𝑬 𝑫𝑬𝑨𝑻𝑯 𝑵𝑰𝑮𝑯𝑻 𝑽𝑰𝑬𝑵 𝑻𝑬 𝑪𝑯𝑬𝑹𝑪𝑯𝑬𝑹☠️💢😈👿",
			turnedOff: "𝑫𝑰𝑻 𝑫𝑰𝑬𝑼 𝑴𝑬𝑹𝑪𝑰 𝑷𝑶𝑼𝑹 𝑪𝑬𝑻𝑻𝑬 𝑭𝑶𝑰𝑺....🦹‍♂️💢🦇",
			chatting: 'Already Chatting with 𝗟𝗢𝗙𝗧...',
			error: "𝑵'𝑰𝑴𝑷𝑶𝑹𝑻𝑬 𝑸𝑼𝑶𝑰 👀😷......🌱
		}
	},

	onStart: async function ({ args, threadsData, message, event, getLang }) {
		if (args[0] == 'on' || args[0] == 'off') {
			await threadsData.set(event.threadID, args[0] == "on", "settings.simsimi");
			return message.reply(args[0] == "on" ? getLang("turnedOn") : getLang("turnedOff"));
		}
		else if (args[0]) {
			const yourMessage = args.join(" ");
			try {
				const responseMessage = await getMessage(yourMessage);
				return message.reply(`${responseMessage}`);
			}
			catch (err) {
        console.log(err)
				return message.reply(getLang("error"));
			}
		}
	},

	onChat: async ({ args, message, threadsData, event, isUserCallCommand, getLang }) => {
		if (args.length > 1 && !isUserCallCommand && await threadsData.get(event.threadID, "settings.simsimi")) {
			try {
				const langCode = await threadsData.get(event.threadID, "settings.lang") || global.GoatBot.config.language;
				const responseMessage = await getMessage(args.join(" "), langCode);
				return message.reply(`${responseMessage}`);
			}
			catch (err) {
				return message.reply(getLang("error"));
			}
		}
	}
};

async function getMessage(yourMessage, langCode) {
	const res = await axios.post(
    'https://api.simsimi.vn/v1/simtalk',
    new URLSearchParams({
        'text': yourMessage,
        'lc': 'fr'
    })
);

	if (res.status > 200)
		throw new Error(res.data.success);

	return res.data.message;
      }
