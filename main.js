const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "-";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./command/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./command/${file}`);
 
    client.commands.set(command.name, command);
}

client.on('ready', () =>{
	console.log('E-CONS is online!');

});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'joincrew'){
		client.commands.get('joincrew').execute(message,args);
	}else if(command === 'clearmessage'){
		client.commands.get('clearmessage').execute(message,args);
	}else if(command === 'ban'){
		client.commands.get('ban').execute(message,args);
	}else if(command === 'kick'){
		client.commands.get('kick').execute(message,args);
	}else if(command === 'mute'){
		client.commands.get('mute').execute(message,args);
	}else if(command === 'unmute'){
		client.commands.get('unmute').execute(message,args);
	}else if(command === 'reactionrole'){
		client.commands.get('reactionrole').execute(message,args,Discord,client);
	}
});

client.on('guildMemberAdd', guildMember => {
	guildMember.guild.channels.cache.get('797378010717224985').send(`Halo <@${guildMember.user.id}> Selamat datang di E-Conspiracy, kami harap kamu dapat berbaur dengan member lain.`)
});


client.login('ODA3MTM5Nzg4MDI5MTY1NTY5.YBzpgQ.DXYWmzMljGw2lchF9bmvNnQClWc');