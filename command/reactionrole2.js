module.exports = {
    name: 'reactionrole',
    description: "",
    async execute(message, args, Discord, client) {
        const channel = '804080932675256330';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "BOY");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "GIRL");
 
        const valorant = ':valorant:';
        const pb = ':pb:';
        const warthunder = ':warthunder:';
        const apexlegends = ':apexlegends:';
        const leagueoflegends = ':leagueoflegends:';
        const pubg = ':pubg:';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('E-Conspiracy Game Role')
            .setDescription('Pilih role game yang kamu mainkan.\n\n'
                + `${valorant} Valorant\n`
                + `${pb} Point Blank\n`
                + `${warthunder} War Thunder\n`
                + `${apexlegends} Apex Legends\n`
                + `${leagueoflegends} League of Legends\n`
                + `${pubg} PUBG Lite`
                );
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === valorant) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(valorant);
                }
                if (reaction.emoji.name === pb) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pb);
                }
                if (reaction.emoji.name === warthunder) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(warthunder);
                }
                if (reaction.emoji.name === apexlegends) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(apexlegends);
                }
                if (reaction.emoji.name === leagueoflegends) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(leagueoflegends);
                }
                if (reaction.emoji.name === pubg) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pubg);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === valorant) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(valorant);
                }
                if (reaction.emoji.name === pb) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pb);
                }
                if (reaction.emoji.name === warthunder) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(warthunder);
                }
                if (reaction.emoji.name === apexlegends) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(apexlegends);
                }
                if (reaction.emoji.name === leagueoflegends) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(leagueoflegends);
                }
                if (reaction.emoji.name === pubg) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pubg);
                }
            } else {
                return;
            }
        });
    }
 
}   