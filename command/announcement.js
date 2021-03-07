module.exports = {
	name: 'announcement',
	description: "",
	execute(message,args,Discord){
		const newEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
<<<<<<< HEAD
		.setTitle('SHORT MOVIE')
		//.setDescription(`--Halo kalian @everyone--\nUntuk event 3 minggu kedepan ada yang mau kasi saran?\nkalo ada boleh kasi tau ke admin\ntar kalo cocok akan dipilah dan difilter lagi\n\n----------------\nSetelah Event 3 minggu kedepan\nakan ada event menarik yaitu Event Race Car\nnamun dengan mobil yang sama\nReward:\n100k Pulsa pure dari kantong sendiri\n\nDengan syarat:\nYang make mod akan didiskualifikasi & tentunya akan di ban dari server.`)
		.setDescription(`
			Halo @everyone\n\n
			Event weekly kali ini kita akan membuat short movie lagi yang bertemakan perang di daerah hutan (Paleto Forest). Untuk story, tema, dll akan kami beritahukan lebih lanjut.
			\n
			\nHari, Tanggal	: Jumat, 12 Maret 2020
			\nWaktu			: 20.00 WIB - Selesai
			\nTitik Kumpul 	: Paleto Forest
			\nOutfit 		: Akan diberitahukan lebih lanjut.
=======
		.setTitle('TEAM DEATH MATCH EVENT')
		//.setDescription(`--Halo kalian @everyone--\nUntuk event 3 minggu kedepan ada yang mau kasi saran?\nkalo ada boleh kasi tau ke admin\ntar kalo cocok akan dipilah dan difilter lagi\n\n----------------\nSetelah Event 3 minggu kedepan\nakan ada event menarik yaitu Event Race Car\nnamun dengan mobil yang sama\nReward:\n100k Pulsa pure dari kantong sendiri\n\nDengan syarat:\nYang make mod akan didiskualifikasi & tentunya akan di ban dari server.`)
		.setDescription(`
			Halo @everyone\n\n
			
			Untuk Jumat ini kami akan mengadakan event Racing yang berhadiah 100K Pulsa.\n
			\n
			\nHari, Tanggal	: Jumat, 5 Maret 2020
			\nWaktu			: 20.00 WIB - Selesai
			\nTitik Kumpul 	: Los Santos Airport
>>>>>>> parent of 6608dd7 (announcement 4.2)
			\n\n
			Note:\n
<<<<<<< HEAD
			Sebelum short movie dibuat diharapkan semua telah memakai pakaian atau outfit yang sudah diarahkan, jika belum maka di hari H- kita akan mengatur outfit bagi yang belum mempunyai outfit.\n
=======
			Sebelum pertandingan semua pemain prepare pada jam 18.00 / 19.00 membawa kendaraan supercar / sportnya dengan menggunakan modif seindah mungkin & menggunakan dresscode masing-masing. 
>>>>>>> parent of 6608dd7 (announcement 4.2)
			`)
		.setImage('https://prod.cloud.rockstargames.com/crews/sc/2612/54629768/publish/emblem/emblem_512.png')
		.setFooter('Salam E-Conspiracy.');
		message.channel.send(newEmbed);
	}
}