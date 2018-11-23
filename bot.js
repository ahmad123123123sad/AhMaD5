const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', async() => {
var server = "496762158000898049"; 
var channel = "515432320375717918";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** aaaaaaa  **')
    },305);
})

    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** ddddddd  **')
    },305);
})







client.login(process.env.BOT_TOKEN);
