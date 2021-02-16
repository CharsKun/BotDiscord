module.exports = {
	name: 'announcement',
	description: "",
	execute(message,args,Discord){
		const newEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('OFFROAD MEET EVENT')
		//.setDescription(`--Halo kalian @everyone--\nUntuk event 3 minggu kedepan ada yang mau kasi saran?\nkalo ada boleh kasi tau ke admin\ntar kalo cocok akan dipilah dan difilter lagi\n\n----------------\nSetelah Event 3 minggu kedepan\nakan ada event menarik yaitu Event Race Car\nnamun dengan mobil yang sama\nReward:\n100k Pulsa pure dari kantong sendiri\n\nDengan syarat:\nYang make mod akan didiskualifikasi & tentunya akan di ban dari server.`)
		.setDescription(`
			\nHari, Tanggal	: Jumat, 20 Februari 2020
			\nWaktu			: 21.00 WIB - Selesai
			\nTitik Kumpul 	: Los Santos Costume
			\nOutfit		: Bebas, asal ga aneh-aneh
			\n\nNo Respawn at all, Challange your skill, Arena war vehicle are not allowed.\n
			Jika kendaraan kalian hancur/rusak, pilihanmu hanyalah berhenti atau numpang dengan kendaraan teman.\n\n
			VEHICLE LIST\n\n
			SOUTHERN SAN ANDREAS :\n
			- CANIS SEMINOLE FRONTIER\n
			- DUNDREARY LANDSTALKER\n
			- KARIN EVERON\n
			- ANNIS HELLION\n
			- VAPID CARACARA 4X4\n
			- KARIN BEEJAY XL\n
			- FATHOM FQ 2\n
			- BENEFACTOR SERRANO\n
			- MAMMOTH PATRIOT\n
			- CANIS KAMACHO\n
			- VAPID RIATA\n
			- VAPID CONTENDER\n
			- VAPID GUARDIAN\n
			- BF INJECTION\n
			- VAPID SANDKING\n
			- VAPID SANDKING SWB\n
			- BRAVADO BISON\n
			- CANIS BODHI\n
			- KARIN REBEL (CLEAN)\n
			- DECLASSE RANCHER XL\n
			- DECLASSE GRANGER\n
			- GALLIVANTER BALLER\n
			- ALBANY CAVALCADE\n\n
			RULES :\n
			Jangan rusuh, Jangan PK (Player Killer), No Baper\n
			Cukup ikuti arahan kami :D\n\n

			Thank you.\n

			`)
		.setImage('https://prod.cloud.rockstargames.com/crews/sc/2612/54629768/publish/emblem/emblem_512.png')
		.setFooter('Salam E-Conspiracy.');
		message.channel.send(newEmbed);
	}
}