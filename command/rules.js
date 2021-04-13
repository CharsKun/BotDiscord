module.exports = {
	name: 'rules',
	description: "",
	execute(message,args,Discord){
		const newEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Rules')
		.setDescription(`
			<--> WAJIB <-->\n
			:one: Pick role di <#804080932675256330> untuk melanjutkan akses server dan reset nama Anonymous\n
			:two: Share RockStar SocialClub Name di <#802500011345575957> (Player GTA) untuk mendapat role <@&797510438484443217> / <@&804078272643203093> - GIRL\n
			:three: Jika kalian bermain game lain role dapat diambil di <#822240365666893865> dan share nickname kalian di <#805418998455074866>\n\n
			<--> POINT UTAMA <-->\n
			:one: Berlaku baik sesama member server\n
			:two: Bercanda jangan sampai timbul salah paham yang berujung ricuh\n
			:three: Jangan adanya sara antar member\n
			:four: Utamakan kenyamanan sesama anggota\n\n
			<--> EVENT <-->\n
			:one: Pada saat event dilarang ada yang rusuh\n
			:two: Patuhi setiap arahan yang diberikan oleh <@&827193886735859733>/<@&827194196263043092>\n
			:three: Jika ada yang rusuh kami tidak segan-segan akan mengeluarkan kalian dari Server ini.\n\n
			<--> POINT TAMBAHAN <-->\n
			:one: Subscribe channel kita bersama : https://youtube.com/channel/UC4fjNb_OOj0i77Jdor-Wphw\n
			:two: Cek semua video cinematic official kita di <#798017000277803088>\n
			:three: Bagi temen2 yang punya Youtube Channel bisa dikirim linknya ke <#801204311870537749> agar nanti dibuatkan notifikasi otomatis di server kita. Info lebih lanjut kontak <@&827194196263043092>.\n\n\n
			
			`)

		.setImage('https://prod.cloud.rockstargames.com/crews/sc/2612/54629768/publish/emblem/emblem_512.png')
		.setFooter('Salam E-Conspiracy.');
		message.channel.send(newEmbed);
	}
}