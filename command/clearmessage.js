module.exports = {
	name: 'clearmessage',
	description: "",
	async execute(message,args){
		if(!args[0]) return message.reply("Input seberapa banyak history chat yang ingin kamu hapus : ");
		if(isNaN(args[0])) return message.reply("Tolong masukkan input dalam bentuk angka!");
		if(args[0] > 100) return message.reply("Kamu tidak bisa menghapus lebih dari 100 pesan!");
		if(args[0] < 1) return message.reply("Setidaknya kamu harus menghapus lebih dari satu pesan!");

		await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    	});
    }
}