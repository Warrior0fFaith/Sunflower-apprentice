const Discord = require('discord.js');
const config = require("./config.json");
const Music = require('discord.js-musicbot-addon');

const client = new Discord.Client();

require('events').EventEmitter.defaultMaxListeners = Infinity;

const music = new Music(client, {youtubeKey: process.env.ytkey, //Youtube Dev API3 Key
    prefix: config.prefix, maxQueueSize: 100, thumbnailType: 'default', deVolume: 100, anyoneCanSkip: true, messageHelp: true,
    botOwner: '363749294362066945', helpCmd: 'assist', playCmd: 'play',    skipCmd: 'skip', queueCmd: 'queue', pauseCmd:  'pause', 
	resumeCmd: 'resume', volumeCmd: 'vol', leaveCmd: 'leave', clearCmd: 'clear', setCmd: 'set', loopCmd: 'loop', searchCmd: 'search', 
	ownerCmd: 'owner', enableQueueStat: true});

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
        
	} else if (command === 'pillowfight') {
	    msg.channel.send("", {file: "https://marklipinskisblog.files.wordpress.com/2015/07/giphy.gif?w=630"});
				  
        } else {
            return;
        }
    } else {
        return;
    }
});

client.login(process.env.token);
