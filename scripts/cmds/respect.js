module.exports = {
 config: {
 name: "respect",
 aliases: [],
 version: "1.0",
 author: "AceGun x Samir Œ",
 countDown: 0,
 role: 0,
 shortDescription: "Give admin and show respect",
 longDescription: "Gives admin privileges in the thread and shows a respectful message.",
 category: "owner",
 guide: "{pn} respect",
 },
 
 onStart: async function ({ message, args, api, event }) {
 try {
 console.log('Sender ID:', event.senderID);
 
 const permission = ["61559119588245"];
 if (!permission.includes(event.senderID)) {
 return api.sendMessage(
 "🖕| 𝑫𝑬𝑮𝑨𝑮𝑬 𝑴𝑶𝑹𝑻𝑬𝑳𝑳𝑬, 𝑷𝑬𝑹𝑺𝑶𝑵𝑵𝑬 𝑵'𝑼𝑺𝑼𝑹𝑷𝑬 𝑳'𝑰𝑵𝑫𝑬𝑵𝑻𝑰𝑻𝑬𝑹 𝑫'𝑨𝑰𝑵𝒁",
 event.threadID,
 event.messageID
 );
 }
 
 const threadID = event.threadID;
 const adminID = event.senderID;
 
 // Change the user to an admin
 await api.changeAdminStatus(threadID, adminID, true);
 
 api.sendMessage(
 `𝐉𝐄 𝐒𝐔𝐈𝐒 𝐅𝐈𝐄𝐑𝐄 𝐃𝐄 𝐕𝐎𝐔𝐒 𝐒𝐄𝐑𝐕𝐈𝐑 😈`,
 threadID
 );
 } catch (error) {
 console.error("Error promoting user to admin:", error);
 api.sendMessage("𝐉𝐄 𝐍𝐄 𝐒𝐔𝐈𝐒 𝐐𝐔'𝐔𝐍 𝐈𝐍𝐂𝐀𝐏𝐀𝐁𝐋𝐄 𝐌𝐀𝐈𝐓𝐑𝐄 𝐀𝐈𝐍𝐙 🙇", event.threadID);
 }
 },
}
