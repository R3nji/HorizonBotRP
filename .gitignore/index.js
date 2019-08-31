const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("En développement");
    console.log("Le bot a bien été connecté");
})

bot.login('NjE3NDM1MjcyNDA5MjUxODkw.XWrFyw.ihxK8vfF2saavR30_ttzwYI3qwM')
