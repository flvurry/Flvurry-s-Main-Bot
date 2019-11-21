const discord = require('discord.js');
const bot = new discord.Client();

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("flvurry is cool", {type: "Playing"});
});

bot.login(process.env.BOT_TOKEN;
