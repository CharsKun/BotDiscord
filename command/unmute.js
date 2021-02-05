module.exports = {
    name: 'unmute',
    description: "",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'MEMBER');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'MUTE');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> telah diunmute`);
        } else{
            message.channel.send('Tidak menemukan user!');
        }
    }
}