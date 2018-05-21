const Discord = require('discord.js');
const config = require("./config.json");
const Music = require('discord.js-musicbot-addon');
const random = require('./random.js');

const client = new Discord.Client();

require('events').EventEmitter.defaultMaxListeners = Infinity;

const music = new Music(client, {youtubeKey: process.env.ytkey, //Youtube Dev API3 Key
    prefix: config.prefix, maxQueueSize: 100, thumbnailType: 'default', deVolume: 100, anyoneCanSkip: true, messageHelp: true,
    botOwner: '363749294362066945', helpCmd: 'assist', playCmd: 'play',    skipCmd: 'skip', queueCmd: 'queue', pauseCmd:  'pause', 
	resumeCmd: 'resume', volumeCmd: 'vol', leaveCmd: 'leave', clearCmd: 'clear', setCmd: 'set', loopCmd: 'loop', searchCmd: 'search', 
	ownerCmd: 'owner', enableQueueStat: true});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setPresence({game:{type: "WATCHING", name:"sunflowers grow"}});
});

client.on('message', msg => {
    const pref = msg.content.slice(0, 2);
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if (pref === config.prefix) {

        if (command === 'ping') {
            msg.channel.send("Ponged!", {file: "https://uproxx.files.wordpress.com/2014/01/anime.gif"});
		
        } else if (command === 'sunshine') {
            msg.channel.send(":sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower:")
          
        } else if (command === 'hugkirbea') {
            msg.channel.send("", {file: "https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif"});
          
        } else if (command === 'help') {
            msg.channel.send("Have no fear for Sunny is here!^-^")
          
        } else if (command === 'facepalm') {
            msg.channel.send("", {file: "https://i.gifer.com/YYBe.gif"});
                                 
        } else if (command === 'facedesk') {
            msg.channel.send("", {file: "http://i.neoseeker.com/mgv/59301-Insanity%20Prevails/301/26/facedesk_display.gif"});
        
        } else if (command === 'thetalk') {
            msg.channel.send("", {file: "https://78.media.tumblr.com/9beae816f6c1247b6fb17069deaa1274/tumblr_nq92toNafF1s307p6o1_500.gif"});
        
        } else if (command === 'pillowfight') {
	    msg.channel.send("", {file: "https://media1.tenor.com/images/9d8aff140d0c5f608d47447e97959e9b/tenor.gif"});
		
	} else if (command === 'flipflop') {
	    msg.channel.send("", {file: "https://cdn.discordapp.com/attachments/444633646045986816/445123348385628160/flip_flop_slap.gif"});
	
	} else if (command === 'tacos') {
	    msg.channel.send("", {file: "https://media.giphy.com/media/3o7TKCTt7cNHg10utO/giphy.gif"});
	
	} else if (command === 'headache') {
	    msg.channel.send("Here are a few treatments ~ If you have almonds take a handful or more and eat them, Acetaminophen or aspirin, rest, You could be dehydrated, so make sure you drink some water, You could be dehydrated, If you have a migraine, place a cold pack on your forehead. Ice cubes wrapped in a towel, a bag of frozen peas, or even a cold shower may lessen the pain. Keep the compress on your head for 15 minutes, then take a break for 15 minutes.If you have a tension headache, place a heating pad on your neck or the back of your head. If you have a sinus headache, hold a warm cloth to the area that hurts. A warm shower might also do the trick, You can make ginger tea.");
		
	} else if (command === 'newspaper') {
	    msg.channel.send("", {file: "https://media.discordapp.net/attachments/402702616267718657/445074586279608348/giphy.gif"});
		
	} else if (command === 'watergun') {
	    msg.channel.send("", {file: "https://thumbs.gfycat.com/OrnerySimilarCanary-max-1mb.gif"});
		
	} else if (command === 'gang') {
		msg.channel.send("", {file: random.select('gang')});
		
	} else if (command === 'puns') {
		msg.channel.send(random.select('puns'));
			
	} else if (command === 'hug') {
		msg.channel.send("", {file: random.select('hug')});
	
	} else if (command === 'fistbump') {
		msg.channel.send("", {file: random.select('fistbump')});
		
        } else {
            return;
        }
    } else {
        return;
    }
});

client.login(process.env.token);
