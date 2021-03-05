module.exports = {
	name: 'announcement',
	description: "",
	execute(message,args,Discord){
		const newEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('RACING EVENT - REANNOUNCE')
		//.setDescription(`--Halo kalian @everyone--\nUntuk event 3 minggu kedepan ada yang mau kasi saran?\nkalo ada boleh kasi tau ke admin\ntar kalo cocok akan dipilah dan difilter lagi\n\n----------------\nSetelah Event 3 minggu kedepan\nakan ada event menarik yaitu Event Race Car\nnamun dengan mobil yang sama\nReward:\n100k Pulsa pure dari kantong sendiri\n\nDengan syarat:\nYang make mod akan didiskualifikasi & tentunya akan di ban dari server.`)
		.setDescription(`
			Halo @everyone\n\n
			Maaf buat pemain tadi yang sudah hadir, kami mengucapkan terima kasih dan mohon maaf sebesar-besarnya karena terjadi kendala, karena kesalahan jaringan / network, yang dimana beberapa pemain tidak dapat join, maka dari itu kami mengundurkan jadwal event ke hari esok.\n
			\n
			\nHari, Tanggal	: Sabtu, 6 Maret 2020
			\nWaktu			: 21.00 WIB - Selesai
			\nTitik Kumpul 	: Los Santos Airport
			\n\n
			Rules:\n
			Slot pemain sekitar 20-25 orang yang akan dibagi menjadi 5 grup secara random. Kendaraan akan disiapkan oleh panitia untuk balancing.\n
			Sistem permainan dibagi menjadi 2 yaitu eliminasi grup & sudden death.\n
			Pemain tidak boleh menggunakan kendaraan masing-masing. dan pemain tidak boleh menggunakan mod / cheat, jika ketahuan maka akan didiskualifikasi.\n\n

			Note:\n
			Sebelum pertandingan semua pemain prepare pada jam 19.00 - 21.00 membawa kendaraan supercar / sportnya dengan menggunakan modif seindah mungkin & menggunakan dresscode masing-masing. 
			`)
		.setImage('https://prod.cloud.rockstargames.com/crews/sc/2612/54629768/publish/emblem/emblem_512.png')
		.setFooter('Salam E-Conspiracy.');
		message.channel.send(newEmbed);
	}
}