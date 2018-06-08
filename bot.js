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
	client.user.setPresence({game:{type: "WATCHING", name:"Suzy behind the fridge"}});
});

client.on('message', msg => {
    const pref = msg.content.slice(0, 2);
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if (pref === config.prefix) {

        if (command === 'ping') {
            msg.channel.send("**Ponged!**", {file: "https://uproxx.files.wordpress.com/2014/01/anime.gif"});

        } else if (command === 'sunshine') {
            msg.channel.send(":sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower::sunflower:")
          
        } else if (command === 'hugkirbea') {
            msg.channel.send("", {file: "https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif"});
          
        } else if (command === 'help') {
            msg.channel.send("Have no fear for **Sunny** is here!^-^")
          
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
	    msg.channel.send("", {file: "http://content.forums.previously.tv/monthly_2017_11/psych_det.gif.0c328743a39d9bb92ed5291d126e865f.gif"});
	
	} else if (command === 'headache') {
	       var headache = new Discord.RichEmbed()
               .setTitle('__These Treatments Should Help You__ ')
               .addField('__(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧__', '- If you have almonds take a handful or more and eat them\n' + '- Acetaminophen or Aspirin\n' + '- You chould be dehydrated, so make sure you drink water\n' + '- If you have a migraine place a cold pack on your forehead. If you do not have those you could place ice cubes wrapped in a towel, a bad of frozen peas, or even a shower may lessen the pain. Keep the compress on your hear for 15mins, then take a break for 15min\n' + '- If you have a sinus headache hold a warm cloth to the area that hurts\n' + '- A warm shower might also do the trick\n' + '- Ginger Tea\n')
               .setColor(0x990000);
               msg.channel.sendEmbed(headache);
		
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
	
	} else if (command === 'hide') {
		msg.channel.send("", {file: random.select('hide')});
		
	} else if (command === 'info') {
		var info = new Discord.RichEmbed()
		.setTitle('Here are the magical commands that can help you ^-^ ')
		.addField('__Owner__ |','WarriorOfFaith#1055')
		.addField('__Prefix__ |','.+')
		.addField('__Commands__ |', 'Facedesk / Facepalm [When you need to smack your face on something] - Fistbump [*balalalalalala*]- Flipflop [Use only for those need it] - Gang [Your fambam] - Headache [Have a headache? Feel free to use this command] - Hide [Use if you need to hide] - Hug [When you want to loaf someone] - Hugkirbea [Loaf towards the Kirby] - Info [Learn about my commands] - Newspaper [For someone who is being a troublemaker] - Pillowfight [Want to smack someone? Use this ;3] - Ping [Ping pong game] - Puns [When you are feeling punny] - Thetalk [Use if someone is being bad] - Tacos [You can use this when you are in the taco mood] - Watergun [When you want to squirt at someone]')
		.setColor(0xEE7600);
		msg.channel.sendEmbed(info);
			
        } else {
            return;
        }
    } else {
        return;
    }
});

client.login(process.env.token);
