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
			
			Untuk Jumat ini kami akan mengadakan event Team DeathMatch 2v2\n
			Daftarkan tim kalian ke @SON OF KRONOS\n\n
			\nHari, Tanggal	: Jumat, 26 Februari 2020
			\nWaktu			: 20.00 WIB - Selesai
			\nTitik Kumpul 	: Shandy Shores Airfield
			\n\n
			Note:\n
			Tidak semua senjata yang diperbolehkan, senjata yang diperbolehkan hanya Assault Rifle, Sub MachineGun, Pistol, Sniper.\n
			Selain senjata yang disana tidak diperbolehkan termasuk MK2 Weapon, Throwable, Explosion, Up & Automizer, MachineGun.\n
			Setiap tim akan bertanding untuk menjadi juara, Challange your skills.\n
			Arena pertempuran akan dipersiapkan oleh Kami :D\n\n

			RULES :\n
			Untuk para spectator atau penonton jangan ikut membantu atau rusuh.\n
			Jangan menggunakan senjata yang tidak diperbolehkan, jika dilanggar maka pemain tersebut dianggap kalah.\n
			\n
			Aturan permainan dapat berubah seiring pertandingan.\n
			Untuk pemberhantuan lebih lanjut akan kami sampaikan nanti.\n\n
			Thank you.\n

			`)
		.setImage('https://prod.cloud.rockstargames.com/crews/sc/2612/54629768/publish/emblem/emblem_512.png')
		.setFooter('Salam E-Conspiracy.');
		message.channel.send(newEmbed);
	}
}