module.exports = {
	name: 'rules',
	description: "",
	execute(message,args,Discord){
		const newEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Rules')
		.setDescription(`
			<--> WAJIB <-->\n
			:one: Pick role di #〔👥〕pick-role untuk melanjutkan akses server dan reset nama Anonymous\n
			:two: Share RGSC di #〔🃏〕socialclub (Player GTA) untuk mendapat role @VERIFIED - BOY & @VERIFIED - GIRL\n
			:three: Share NICK VALORANT di #〔🀄〕nick-name (Valorant Player) untuk mendapat role @VERIFIED - BOY & @VERIFIED - GIRL\n\n
			<--> POINT UTAMA <-->
			:one: Berlaku baik sesama warga server\n
			:two: Bercanda jangan sampai timbul salah paham yang berujung ricuh\n
			:three: Jika ada hal kurang berkenan dihati temen2, mohon dibicarakan\n
			:four: Utamakan kenyamanan sesama anggota\n\n
			<--> POINT TAMBAHAN <-->\n
			:one: Subscribe channel kita bersama : https://youtube.com/channel/UC4fjNb_OOj0i77Jdor-Wphw\n
			:two: Cek Machinima kita di #〔:clapper:〕yt-update\n
			:three: Bagi temen2 yang punya Youtube Channel bisa dikirim linknya ke #〔🔗〕share-any-link agar nanti dibuatkan notifikasi otomatis di server kita. Info lebih lanjut kontak @Son Of Kronos .\n\n\n
			
			`)

		.setImage('https://prod.cloud.rockstargames.com/crews/sc/2612/54629768/publish/emblem/emblem_512.png')
		.setFooter('Salam E-Conspiracy.');
		message.channel.send(newEmbed);
	}
}