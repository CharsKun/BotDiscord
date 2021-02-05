module.exports = {
    name: 'ban',
    description: "",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User telah di ban dari server!");
        }else{
            message.channel.send(`Kamu tidak ban siapapun dari server!`);
        }
    }
}