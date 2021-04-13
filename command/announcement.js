module.exports = {
	name: 'announcement',
	description: "",
	execute(message,args,Discord){
		const newEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')

		.setTitle('MotoGP')
		//.setDescription(`--Halo kalian @everyone--\nUntuk event 3 minggu kedepan ada yang mau kasi saran?\nkalo ada boleh kasi tau ke admin\ntar kalo cocok akan dipilah dan difilter lagi\n\n----------------\nSetelah Event 3 minggu kedepan\nakan ada event menarik yaitu Event Race Car\nnamun dengan mobil yang sama\nReward:\n100k Pulsa pure dari kantong sendiri\n\nDengan syarat:\nYang make mod akan didiskualifikasi & tentunya akan di ban dari server.`)
		.setDescription(`
			Halo @everyone\n\n
			
			Event weekly kali ini kita akan mengadakan event Racing MotoGP, untuk detail event akan diberitahukan lebih lanjut.\n\n

			\nHari, Tanggal	: Jumat, 16 April 2021
			\nWaktu			: 21.00 WIB - Selesai
			\nTitik Kumpul 	: Casino
			\nOutfit		: Akan diberitahukan lebih lanjut

			\n
			`)
		.setImage('https://prod.cloud.rockstargames.com/crews/sc/2612/54629768/publish/emblem/emblem_512.png')
		.setFooter('Salam E-Conspiracy.');
		message.channel.send(newEmbed);
	}
}