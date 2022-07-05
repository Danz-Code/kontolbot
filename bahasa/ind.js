exports.wait = () => {
	return`*「 WAIT 」 SEDANG DIPROSES YAH KAK :) MOHON BERSABAR*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`「 ❗ 」*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`「 ❗ 」*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「❗」 Silahkan Daftar terlebih dahulu sebelum menggunakan fitur ini.\nDaftar ketik : #daftar Nama|17 ( Contoh )\nAtau ketik : @verifybot`
}

exports.rediregis = () => {
	return`*「 ❗ SUDAH TERDAFTAR ❗ 」*\n\n*Kamu sudah terdaftar di database DANZ-bot*`
}

exports.stikga = () => {
	return`*「 ❗ Error ❌ 」\n Yah gagal coba ulangi beberapa saat lagi*`
}

exports.doneOwner = () => {
        return`「 ✅ 」*Done bos*`
}

exports.linkga = () => {
	return`「 ❌ 」*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`「 ❗ 」*「FITUR INI BUAT DI GRUP BERO」*`
}

exports.ownerb = () => {
	return`「 ❗ 」*「FITUR INI KHUSUS OWNER OM :)」*`
}

exports.ownerg = () => {
	return`「 ❗ 」*「OWNER GROUP ONLY]*`
}

exports.admin = () => {
	return`「 ❗ 」*「ADMIN GROUP ONLY]*`
}

exports.badmin = () => {
	return`「 ❗ 」*「JADIIN ADMIN DLU BERO BOTNYA 」*`
}

exports.nsfwoff = () => {
	return`「 ❗ 」*NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner Danz, Laporan palsu atau main² tidak akan ditanggapi.*`
}

exports.wrongf = () => {
	return`「 ❗ 」*Format salah/text kosong*`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA DANZ  BOT 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱Nama\n┗⊱${namaUser}\n┏━⊱Nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱Umur\n┗⊱${umurUser}\n┏━⊱Waktu Pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : Kamu akan terkena banned apabila nama kamu mengandung sara/penghinaan`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}listmenu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.ownergans1 = (pushname) => {
        return`*Halo Owner ${pushname} Yg gans/Cans. Tpi yg paling gans owner Danz Only🐦*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT KAMU MENDAPATKAN LIMIT 」*
 📊➤ Nama : ${pushname}
 📊➤ Nomer : ${sender.split("@")[0]}
 📊➤ Xp : ${getLevelingXp(sender)}
 📊➤ Limit :  +3
 📊➤ Pangkat :  ${role}
 📊➤ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`
{
  "status": true,
  "creator": "@danz.nih._",
  "result": {
    "type": "limit",
    "text": "Maaf Limit kamu sudah Habis. Silahkan hubungi Nomor Owner Dibawah.",
    "contact": "wa.me/62895325677273"
  }
}
`
}

exports.limitcount = (limitCounts) => {
	return`
"status": true,
  "creator": "@danz.nih._",
  "result": {
    "type": "limit",
    "text": "Sisa Limit kamu ${limitCounts}",
    "contact": "wa.me/62895325677273",
"note": "Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit."
  }
}
`}

exports.satukos = () => {
	return`「 ❗ 」*Tambah parameter 1/enable atau 0/disable`
}

exports.menglimit = (limitCounts) => {
        return`${limitCounts}`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *「 ATM 」*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  └─ ❏ *Uang* : ${uangkau}
`}
