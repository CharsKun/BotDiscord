module.exports = {
    name: 'kick',
    description: "",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User telah di kick dari server!");
        }else{
            message.channel.send(`Kamu tidak kick siapapun dari server!`);
        }
    }
}