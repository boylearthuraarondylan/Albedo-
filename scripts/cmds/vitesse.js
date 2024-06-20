const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "vitesse",
		aliases: ["vit"],
		version: "1.0",
		author: "Shïsûį Dånïęl",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage("𝘾𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙚𝙨𝙩 𝙪𝙣 𝙚𝙣𝙛𝙧𝙚𝙞𝙣𝙩 𝙖 𝙢𝙚𝙨 𝙥𝙧𝙤𝙟𝙚𝙩𝙨 😪", id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	}
