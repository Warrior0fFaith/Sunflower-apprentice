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
            msg.channel.send(":sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower:")
          
        } else if (command === 'hugkirbea') {
            msg.channel.send("", {file: "https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif"});
          
        } else if (command === 'help') {
            msg.channel.send("Have no fear for Sunny is here!^-^")
          
        } else if (command === 'facepalm') {
            msg.channel.send("", {file: "https://i.gifer.com/YYBe.gif"});
                                 
        } else if (command === 'facedesk') {
            msg.channel.send("", {file: "https://78.media.tumblr.com/d2ffe551565f2ad80d514872832fbd47/tumblr_inline_njmeprnuqd1r0wq53.gif"});
        
        } else if (command === 'thetalk') {
            msg.channel.send("", {file: "https://78.media.tumblr.com/9beae816f6c1247b6fb17069deaa1274/tumblr_nq92toNafF1s307p6o1_500.gif"});
                   
        } else {
            return;
        }
    } else {
        return;
    }
});

client.login(config.token);
