module.exports = {
    name: 'reactionrole',
    description: "",
    async execute(message, args, Discord, client) {
        const channel = '804080932675256330';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "BOY");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "GIRL");
 
        const yellowTeamEmoji = '👱';
        const blueTeamEmoji = '👩';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('E-Conspiracy Role')
            .setDescription('Pilih role kamu terlebih dahulu untuk lebih akrab dengan kami!\n\n'
                + `${yellowTeamEmoji} Boy\n`
                + `${blueTeamEmoji} Girl`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
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
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   