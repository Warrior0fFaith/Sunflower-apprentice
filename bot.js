const Discord = require('discord.js');
const config = require("./config.json");

const client = new Discord.Client();

require('events').EventEmitter.defaultMaxListeners = Infinity;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(config.defaultActivity);
});

client.on('message', msg => {
    const pref = msg.content.slice(0, 2);
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if (pref === config.prefix) {

        if (command === 'ping') {
            msg.channel.send("Pong!");
          
        } else if (command === 'sunshine') {
            msg.channel.send(":sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower:")
          
        } else {
            return;
        }
    } else {
        return;
    }
});

client.login(config.token);
