module.exports = {
	config: {
		name: "aqua",
		aliases: ["aqua"],
		version: "1.0",
		author: "ʬɸʬ Årčanô Mâlignũs ʬɸʬ", // do not change this credits
		countDown: 5,
		role: 0,
		shortDescription: "send you pic of Aqua",
		longDescription: "sends u pic of Aqua",
		category: "meme",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ 
"https://i.ibb.co/WHCFhNh/image.jpg",
"https://i.ibb.co/X7Lxfpt/image.jpg",
"https://i.ibb.co/Fq8tjgc/image.jpg",
"https://i.ibb.co/60vsy9K/image.jpg",
"https://i.ibb.co/X7Lxfpt/image.jpg",
"https://i.ibb.co/4VF7zWX/image.jpg",
"https://i.ibb.co/BTNrtrW/image.jpg",
"https://i.ibb.co/ZG0RVW2/image.jpg",
"https://i.ibb.co/xX5ytTH/image.jpg",
"https://i.ibb.co/2jGzTRv/image.jpg",
  ]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '🎀✨𝐀𝐐𝐔𝐀✨🎀',attachment: await global.utils.getStreamFromURL(img)
})
}
}
