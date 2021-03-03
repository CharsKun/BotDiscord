module.exports = {
	name: 'announcement',
	description: "",
	execute(message,args,Discord){
		const newEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('TEAM DEATH MATCH EVENT')
		//.setDescription(`--Halo kalian @everyone--\nUntuk event 3 minggu kedepan ada yang mau kasi saran?\nkalo ada boleh kasi tau ke admin\ntar kalo cocok akan dipilah dan difilter lagi\n\n----------------\nSetelah Event 3 minggu kedepan\nakan ada event menarik yaitu Event Race Car\nnamun dengan mobil yang sama\nReward:\n100k Pulsa pure dari kantong sendiri\n\nDengan syarat:\nYang make mod akan didiskualifikasi & tentunya akan di ban dari server.`)
		.setDescription(`
			Halo @everyone\n\n
			
			Untuk Jumat ini kami akan mengadakan event Racing yang berhadiah 100K Pulsa.\n
			\n
			\nHari, Tanggal	: Jumat, 5 Maret 2020
			\nWaktu			: 20.00 WIB - Selesai
			\nTitik Kumpul 	: Los Santos Airport
			\n\n
			Rules:\n
			Slot pemain sekitar 20-25 orang yang akan dibagi menjadi 5 grup secara random. Kendaraan akan disiapkan oleh panitia untuk balancing.\n
			Sistem permainan dibagi menjadi 2 yaitu eliminasi grup & sudden death.\n
			Pemain tidak boleh menggunakan kendaraan masing-masing. dan pemain tidak boleh menggunakan mod / cheat, jika ketahuan maka akan didiskualifikasi.\n\n

			Note:\n
			Sebelum pertandingan semua pemain prepare pada jam 18.00 / 19.00 membawa kendaraan supercar / sportnya dengan menggunakan modif seindah mungkin & menggunakan dresscode masing-masing. 
			`)
		.setImage('https://prod.cloud.rockstargames.com/crews/sc/2612/54629768/publish/emblem/emblem_512.png')
		.setFooter('Salam E-Conspiracy.');
		message.channel.send(newEmbed);
	}
}