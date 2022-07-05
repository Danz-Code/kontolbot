////FULL FREE WEB APIKEY
//THANKS TO 
//YOGI
//HANS
//ALPINGAY
// DANZ

//THX FOR REST API
//ZEKS.API
//TOBZ.API
//DOCS.JOJO
//SHIZUKA.API
//API.FDCI
//MNAZRIA
//SOMERANDOMAPI
//ILUSER.API

//JANGAN HAPUS TQTO GOBLOG
//Bau2 cumri case

//Ganteng Doang
//kontol
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const ms = require('parse-ms')
const fs = require("fs") 
const toMs = require('ms')
const request = require('request')
const crypto = require('crypto')
const util = require('util')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { sewa } = require('./lib/sewa')
const { negara } = require('./lib/kodenegara')
const { ownergans } = require('./menu/ownergans')
const { donasi } = require('./lib/donasi')
const { developer } = require('./lib/developer')
const { randompict } = require('./lib/randompict')
const { imageeditmenu } = require('./menu/imageeditmenu')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { soundmenu } = require('./menu/soundmenu')
const { uangbot } = require('./menu/uangbot')
const { tourff } = require('./menu/tourff')
const { simplemenu } = require('./menu/simplemenu')
const { vipmenu } = require('./menu/vipmenu')
const { hematbot } = require('./menu/hematbot')
const { listupdate } = require('./menu/listupdate')
const { ownermenu } = require('./menu/ownermenu')
const { groupmenu } = require('./menu/groupmenu')
const { apkmenu } = require('./menu/apkmenu')
const { informationmenu } = require('./menu/informationmenu')
const { makermenu } = require('./menu/makermenu')
const { hargabot } = require('./menu/hargabot')
const { funmenu } = require('./menu/funmenu')
const { rulesff } = require('./menu/rulesff')
const { mediamenu } = require('./menu/mediamenu')
const { nsfwmenu } = require('./menu/nsfwmenu')
const { closefitur } = require('./menu/closefitur')
const { downloadmenu } = require('./menu/downloadmenu')
const { animemenu } = require('./menu/animemenu')
const { listdm } = require('./menu/listdm')
const { randomimgmenu } = require('./menu/randomimagemenu')
const { quotesmenu } = require('./menu/quotesmenu')
const { toolsmenu } = require('./menu/toolsmenu')
const { cekduit } = require('./menu/cekduit')
const { storagemenu } = require('./menu/storagemenu')
const fontPath = ('./lib/Zahraaa.ttf')
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const FormData = require('form-data')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./bahasa')

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Danzツ\n' //ganti nama lu! 
            + 'ORG: Owner Danz-Bot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=62895325677273:+62 895325677273\n'  //ganti nomor lu! 
            + 'END:VCARD'

const vcard2 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Rellツ\n' //ganti nama lu!
            + 'ORG: Owner Danz-Bot;\n'                                                                           
	    + 'TEL;type=CELL;type=VOICE;waid=6281314670856:+62 81314670856\n'  //ganti nomor lu!
            + 'END:VCARD'
prefix = '#'
blocked = []   
limitawal = 5
uangawal = 0
saldoawal = 0
memberlimit = 1
public = false
cr = '*DANZ BOT*'

//apikey
const YogiPwKey = 'yogipw' 
const LolhumanKey = 'danzgans' 
const TobzKey = 'QM3yCEiTr4LtX2fA70uV' //Kalau invalid beli sendiri / tunggu update

/******** OWNER NUMBER**********/
const ownerNumber = JSON.parse(fs.readFileSync('./database/pengguna/owner.json'))
const pacarNumber = ["6281319326901@s.whatsapp.net","62895325677273@s.whatsapp.net"]  //Script By Danz
const DeveloperNumber = ["6281319326901@s.whatsapp.net","62895325677273@s.whatsapp.net","62895326098599@s.whatsapp.net","mek.key.fromMe"]
/************************************/

       
/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/kelompok/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/kelompok/antilink.json'))
const link = JSON.parse(fs.readFileSync('./database/kelompok/link.json'))
const _level = JSON.parse(fs.readFileSync('./database/pengguna/level.json'))
const antisckvid = JSON.parse(fs.readFileSync('./database/kelompok/antisckvid.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/pengguna.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const welkom2 = JSON.parse(fs.readFileSync('./database/bot/welkom2.json'))
const premium = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/pengguna/limit.json'))
const _sewa = JSON.parse(fs.readFileSync('./database/pengguna/sewa.json'))
const saldo = JSON.parse(fs.readFileSync('./database/pengguna/saldo.json'))
const _uang = JSON.parse(fs.readFileSync('./database/pengguna/uang.json'))
/*const setting = JSON.parse(fs.readFileSync('./setting.json'))*/
const uang = JSON.parse(fs.readFileSync('./database/pengguna/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/pengguna/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
const premiumnumber = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
const Exif = require('./lib/exif');
const exif = new Exif();
const adm = JSON.parse(fs.readFileSync('./database/pengguna/admin.json'))
const own = JSON.parse(fs.readFileSync('./database/pengguna/owner.json'))
const bad = JSON.parse(fs.readFileSync('./database/kelompok/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/kelompok/badword.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/kelompok/antivirtex.json'))
const setiker = JSON.parse(fs.readFileSync('./strg/stiker/stik.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const akinator = JSON.parse(fs.readFileSync('./database/akinator.json'))
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
const getSewaPosition = (groupId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }
const getSewaExpired = (groupId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}
const checkSewa = (groupId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupId) {
            status = true
        }
    })
    return status
}
const expiredCheck = (_dir , client , message , groupId) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Sewa Expired: ${_dir[position].id}`)
            _dir.splice(position, 1)
            fs.writeFileSync('./database/pengguna/sewa.json', JSON.stringify(_dir))
            client.leaveGroup(groupId)
        }
    }, 1000)
}
const getAllSewa = (_dir) => {
    const array = []
    Object.keys(_dir).forEach((i) => {
        array.push(_dir[i].id)
    })
    return array
}
        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }
const addSewaGroup = (groupId, expired, _dir) => {
    const obj = { id: groupId, expired: Date.now() + toMs(expired) }
    _dir.push(obj)
    fs.writeFileSync('./database/pengguna/sewa.json', JSON.stringify(_dir))
}
        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        const Saldouser = (sender) => {
                let position = false
            Object.keys(saldo).forEach((i) => {
                if (saldo[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }

        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }

         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }


function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

const client = new WAConnection()
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('QR code is ready, Scan now..','white'),color('Danzツ','red'),color('X','lime'),color('Bot','red'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./self-bot.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./self-bot.json') && client.loadAuthInfo('./self-bot.json')
client.connect();


/*client.on('group-participants-update', async(chat) => {
		if (!welkom2.includes(chat.jid)) return
        try {
            mem = chat.participants[0]
            try {
                var pp_user = await client.getProfilePicture(mem)
            } catch (e) {
                var pp_user = 'https://i.ibb.co/VQgzwW7/20210407-005215.jpg'
            }                                                                                                                                                                                
		 if (chat.action == 'add') {
                ini_user = chat.participants[0]
                ini_img = await getBuffer(`https://api.lolhuman.xyz/api/welcomeimage?apikey=${LolhumanKey}&img=${pp_user}&text=${pushname}`)
                group_info = await client.groupMetadata(chat.jid)                                                                                                                              
		 welkam = `*Hallo Ngab/Ngen ( Ngen artinya neng yah Kak :) )* @${mem.split('@')[0]}\nWelcome to ${group_info.subject}`
                client.sendMessage(chat.jid, ini_img, MessageType.image, { caption: welkam })
            }
            if (chat.action == 'remove') {
                ini_user = client.contacts[mem]
                ini_out = `${mem.split('@')[0]}, Yahah anjg beban grub keluar 🗿`
                client.sendMessage(chat.jid, ini_out, MessageType.text)
            }
        } catch (e) {
            console.log('Error :', e)
        }
    })
/*client.on('group-participants-update', async (anu) => {
                if (!welkom2.includes(anu.jid)) return
                try {
                        const mdata = await client.groupMetadata(anu.jid)
                        console.log(anu)
                        if (anu.action == 'add') {
                                num = anu.participants[0]
                                try {
                                        ppimg = await getBuffer(`https://api.lolhuman.xyz/api/welcomeimage?apikey=${LolhumanKey}&img=${pp_user}&text=${ini_user.notify}`)
                                } catch {
                                        ppimg = 'https://i.ibb.co/VQgzwW7/20210407-005215.jpg'
                                }
                                teks = `*Hallo Ngab/Ngen ( Ngen artinya neng yah Kak :) )* @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*\nJangan rusuh ya anjg\nIntro Jangan lupa @${num.split('@')[0]} 🗣`
                                let buff = await getBuffer(ppimg)
                                client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
                                } else if (anu.action == 'remove') {
                                num = anu.participants[0]
                                try {
                                        ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
                                } catch {
                                        ppimg = 'https://i.ibb.co/VQgzwW7/20210407-005215.jpg'
                                }
                                teks = `*Alhamdullilah beban grup keluar🗿* @${num.split('@')[0]}\n*Berkurang 1 beban Gc〽*`                                                  
				let buff = await getBuffer(ppimg)  
				 client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
                        }
                } catch (e) {
                        console.log('Error : %s', color(e, 'red'))                                                                                            }
        })*/
client.on('group-participants-update', async (anu) => {
		if (!welkom2.includes(anu.jid)) return
		try {
			mem = anu.participants[0]
            try {
                var pp_user = await client.getProfilePicture(mem)
            } catch (e) {
                var pp_user = 'https://i.ibb.co/VQgzwW7/20210407-005215.jpg'
            }
            if (anu.action == 'add') {
            	num = anu.participants[0]
                anu_user = client.contacts[mem]
                anu_img = await getBuffer(`http://api.lolhuman.xyz/api/welcomeimage?apikey=${LolhumanKey}&img=${pp_user}&text=${anu_user.notify}`)
                group_info = await client.groupMetadata(anu.jid)
                welkam = `┌──────────────────╮
│ *@${num.split('@')[0]} intro*                            
├─ ❏ Nama : 
├─ ❏ Umur :
├─ ❏ Askot :
├─ ❏ Cewe/Cowo?
└───────────────────╯
~ BATAS AMAN BOT DANZ ~
┌─────────────────
│Hello Njeng ✅
├─ Selamat datang brother di grub 
├─ ${group_info.subject} 
│Intro diatas gk wajib :v Yg wajib tuh follow ig 
│@ff.firebold
│@danz.nih._
│*SUBSCRIBE JUGA*
│_Jancok kun_ 🗿
└────────────────
PENGEN SEWA BOT DANZ? 
MAHAL BOS KALO GK MAMPU GK USAH NYEWA
~~~~~~~~~~~~~~~~~~~~~~~
PERMANEN? TIDACK ADA ( 80K+ Gass )
PERBULAN 25K ( OWNER) 
PERMINGGU 8K ( MEMBER ) 
PERHARI 2K ( MEMBER  ) 
~~~~~~ SEWA BOT + PREMIUM ~~~~~~~
PERBULAN 35K ( PREMIUM )
PERMINGGU 12K ( PREMIUM )
PERHARI 5K( PREMIUM  )
LU BELI PREMIUM? LAYANAN SPESIAL
DARI BOT DANZ & CEO DANZ :)
~~~~~BOT DANZ~~~~~~
Anda kaya? wa.me/62895325677273 ( DANZ )
Ketik ${prefix}listmenu Untuk melihat menu.`
                client.sendMessage(anu.jid, anu_img, MessageType.image, { caption: welkam })
            }
            if (anu.action == 'remove') {
            	num = anu.participants[0]
                anu_user = client.contacts[mem]
                anu_img = await getBuffer(`http://api.lolhuman.xyz/api/welcomeimage?apikey=${LolhumanKey}&img=${pp_user}&text=${anu_user.notify}`)
/*		anu_img = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=${LolhumanKey}&img1=${pp_user}&img2=${pp_user}&background=https://i.ibb.co/8B6Q84n/LTqHsfYS.jpg&username=${anu_user.notify}&member=${groupMembers.length}&groupname=${group_info.subject}`)*/
                group_info = await client.groupMetadata(anu.jid)
                out = `*Yahaha beban group keluar anjg 🗿@${num.split('@')[0]}*`
                client.sendMessage(anu.jid, anu_img, MessageType.image, { caption: out })
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/VQgzwW7/20210407-005215.jpg'
				}
				teks = `*Hallo Ngab/Ngen ( Ngen artinya neng yah Kak :) )* @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*\nJangan rusuh ya anjg\nIntro Jangan lupa @${num.split('@')[0]} 🗣`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/VQgzwW7/20210407-005215.jpg'
				}
				teks = `*Alhamdullilah beban grup keluar🗿* @${num.split('@')[0]}\n*Berkurang 1 beban Gc〽*`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
client.on('message-update', async (mek) => {
		try {
	   const from = mek.key.remoteJid
		var { items, name, formattedTitle } = chat
		const { mentionedJidList } = chat 
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const groupId = isGroupMsg ? chat.groupMetadata.id : ''
	
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const fromm = mek.key.remoteJid
			const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
			    
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no :i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `		 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Text
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* *${body ? body : '-'}*`
				client.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* *Sticker*
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`

				const buff = fs.readFileSync(savedFilename)
				client.sendMessage(from, strConversation, MessageType.text, opt4tag)
				client.sendMessage(from, buff, MessageType.sticker, pingbro23)
				// console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Image
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* ${body ? body : '-'}\`\`\``
				client.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})
	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe && !mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
/*			const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply  == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)*/
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const ar = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const botNumber = client.user.jid
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
           
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
		const itsMe = sender === botNumber ? true : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isWelkom2 = isGroup ? welkom2.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntisckvid = isGroup ? antisckvid.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isLink = isGroup ? link.includes(from) : false
			const isAntivirtex = isGroup ? antivirtex.includes(from) : false
/*			const isOwner = ownerNumber.includes(sender)*/
			const isDeveloper = DeveloperNumber.includes(sender)
			const isPacar = pacarNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const chat = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
			const isSewa = _sewa.includes(sender)
			const isOwner = own.includes(sender)
			const isAdmin = adm.includes(sender)
			const isPremium2 = premiumnumber.includes(sender)
			const isImage = type === 'imageMessage'
			const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*DANZ BOT!! CREATED BY DANZ :} *", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }
/*			const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*DANZ*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49He/BADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}*/
/*			const freplyy = key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { conversation: cr}}}*/
/*			const freplyy = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh                                                                                             0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_DANZ MENU😎_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1090, "width": 1089, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}}*/
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    client.sendMessage(from, audio, mp3, {quoted:mek})
		    }
/*const fakestatus = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": cr,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./image/odc.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="*/
                      
	        /*****************END SCURITY FEATURE ********/
			
		//role level
        const levelRole = getLevelingLevel(sender)
	var role = 'Null'        
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'
	} else if (levelRole <= 9999999) {
            role = 'God Of Bot 忍'
	}	
           var prema = 'Free'
			 if (isAdmin) {
				prema = 'Adminban'
			}
			if (isPremium) {
				prema = 'Premium'
			} 
			if (isOwner) {
				prema = 'Owner'
			}
			if (isDeveloper) {
				prema = 'CEO'
			}
                        if (mek.key.fromMe) {
                                prema = 'CEO'
			}

			//funtion nobadword
			if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG ANJG!! 😠")
                        .then(() => client.groupRemove(from, sender))
                        .then(() => {
                            client.sendMessage(from, `*「 ANTI BADWORD 」*\nDANZ-Bot akan kick kamu karena berkata kasar!`, text ,{quoted: mek})
                        }).catch(() => client.sendMessage(from, `Untung Gw bukan admin,klo gw admin auto gw kick lu tod!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }
			
	        //function leveling
         /*   if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }*/
if (isGroup && isRegistered && isLevelingOn) {
				const currentLevel = getLevelingLevel(sender)
				const checkId = getLevelingId(sender)
				try {
					if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
					const amountXp = Math.floor(Math.random() * 10) + 500
					const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
					const getLevel = getLevelingLevel(sender)
					addLevelingXp(sender, amountXp)
					if (requiredXp <= getLevelingXp(sender)) {
						addLevelingLevel(sender, 1)
						bayarLimit(sender, 3)
						await reply(indlevelup(pushname, sender, getLevelingXp, getLevel, getLevelingLevel, role))
					}
				} catch (err) {
					console.error(err)
				}
			}
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
		// AFK
/*            for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "Maaf user yang anda reply atau tag sedang afk. "
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "Dengan alasan " + afk[x.split('@')[0]]
                    }
                    client.sendMessage(from, ini_txt, text, {quoted: mek})
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply("Anda telah keluar dari mode afk.")
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./src/afk.json", JSON.stringify(afk))
            }		*/
			//funtion limited
const isLimit = (sender) =>{
                      let position = false 
 for (let i of _limit) {
              if (i.id === sender) {
  let limits = i.limit
              if (limits >= limitawal ) {
                  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
                _limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
                const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit))
           return false
       }
     }


            if (isGroup) {
                                try {
                                        const getmemex = groupMembers.length
                                            if (getmemex <= memberlimit) {
                                            }
				 } catch (err) { console.error(err)  }
        }
//funtion saldo
const isSaldo = (sender) =>{       
 let position = false
  for (let i of saldo) {
              if (i.id === sender) {

  let saldos = i.saldo 
		if (saldos >= saldoawal ) {
                  position = true
 client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
 saldo
                  position = true
		   return false
 }
             }                                                                                                  }
  if (position === false) {
                const objm = { id: sender, limit: 0 }
                saldo.push(objm)
                fs.writeFileSync('./database/pengguna/saldo.json',JSON.stringify(_limit))
           return false
       }
     }


            if (isGroup) {                                                                                                           try {
                                        const getmemex = groupMembers.length
                                            if (getmemex <= memberlimit) {
                                            }
                                 } catch (err) { console.error(err)  }
        } 
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
		 console.error(err)
        }
}
        if (budy.includes("https://")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isOwner) return reply('Karena kakak adalah owner maka bot tidak bisa kick kakak :')
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#danzgans")) return reply("izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 3detik lagi`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3500)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 2500)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 0)
        }
        if (budy.includes("//chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntisckvid) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 0)
	}
if (budy.includes("//chat.whatsapp.com/")){
                if (!isGroup) return
                if (!isLink) return
                if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
                client.updatePresence(from, Presence.composing)                                                                         
                if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
                var kic = `${sender.split("@")[0]}@s.whatsapp.net`
                reply(`Link Group Terdeteksi ${sender.split("@")[0]} anda saya peringatkan untuk tidak spam link.`)
		setTimeout( () => {
		}, 0)
}
if (budy.includes("ผิดุท้เึางืผิดุท้เึางื","~*👿▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂ *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨*","๒๒๒๒๒๒๒๒","pantạngᅟ์ɱÛƞƉÛɌ.cc","🔥⃠♚͚𝗥⃯𝗔𝗭𝗜𝗡𝗠𝗔𝗞𝗘⃮𝗥♚͚🔥⃠  😈͡♤𝖛𝖎𝖗𝖚𝖘 𝖒𝖆𝖐𝖊𝖗 𝖋𝖔𝖗 𝖜𝖍𝖆𝖙𝖘𝖆𝖕𝖕🤺⃟⚖ ঔৣ͜͡ᴀᴛᴛᴀᴄᴋᴇᷱʀͤ ᴊᷧøͬᴋͤᴇʀ ᴍᴀ𝙵ɪᴀ͜͡࿐","๒๒๒๒๒๒๒๒")){
                if (!isGroup) return
                if (!isAntivirtex) return
                if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
                client.updatePresence(from, Presence.composing)
                if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		 var kic = `${sender.split("@")[0]}@s.whatsapp.net`
                reply(`virtex Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
                setTimeout( () => {  
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
                }, 3000)
                setTimeout( () => {
                        client.updatePresence(from, Presence.composing)
                        reply("1detik")
                }, 2000)
                setTimeout( () => {
                        client.updatePresence(from, Presence.composing)
                        reply("2detik")
                }, 1000)
                setTimeout( () => {
                        client.updatePresence(from, Presence.composing)
                        reply("3detik")
                }, 0)
        }
             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			//private chat message
/*if (itsMe){
			if (chats.toLowerCase() === `${prefix}self`){
				public = false
				client.sendMessage(from, `Sukses`, `Status: SELF`)
			}
			if (chats.toLowerCase() === 'status'){
				client.sendMessage(from, `STATUS: ${public ? 'PUBLIC' : 'SELF'}`)
			}
		}
		if (!public){
			if (!mek.key.fromMe) return
		}*/
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXECUTE\x1b[1;37m]', 'Script By : Danz', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length)), 'SCRIPT BY : DANZ'
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mGAGAL\x1b[1;37m]','Script By : Danz', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length)),'SCRIPT BY : DANZ'
	 
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXECUTE\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length)), 'SCRIPT BY : DANZ'
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mGAGAL\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length)), 'SCRIPT BY : DANZ'

/*if (code15.includes(q))
{
    let hari = '15'
    await reply(`Sukses Memasukan Premium Code 15 Hari` )
    premium.addPremiumUser(sender.id, '15d', _premium)
    await reply(`*「 PREMIUM 15 HARI 」*\n\n➸ *NAMA*: ${pushname}\n➸ *ID*: ${sender.id}\n➸ *Expired*: ${ms(toMs(hari)).days} day(s) ${ms(toMs(hari)).hours} hour(s) ${ms(toMs(hari)).minutes} minute(s)`, id)
    let codee = code15.indexOf(q);
    code15.splice(codee,1)
    fs.writeFileSync('./settings/code15.json', JSON.stringify(code15 , null, 2))
    let prem = premiumcode.indexOf(q);
    premiumcode.splice(prem,1)
    fs.writeFileSync('./settings/premiumcode.json', JSON.stringify(premiumcode , null, 2))
}

if (code30.includes(q))
{
    let hari = '30d'
    await reply(`Sukses Memasukan Premium Code 30 Hari / 1BULAN` , id)
    premium.addPremiumUser(sender.id, '30d', _premium)
    await reply(`*「 PREMIUM 30 HARI 」*\n\n➸ *NAMA*: ${pushname}\n➸ *ID*: ${sender.id}\n➸ *Expired*: ${ms(toMs(hari)).days} day(s) ${ms(toMs(hari)).hours} hour(s) ${ms(toMs(hari)).minutes} minute(s)`, id)
    let codeee = code30.indexOf(q);
    code30.splice(codeee,1)
    fs.writeFileSync('./settings/code30.json', JSON.stringify(code30 , null, 2))
    let prem = premiumcode.indexOf(q);
    premiumcode.splice(prem,1)
    fs.writeFileSync('./settings/premiumcode.json', JSON.stringify(premiumcode , null, 2))
}

if (code60.includes(q))
{
    let hari = '60d'
    await reply(`Sukses Memasukan Premium Code 60 Hari / 2BULAN`)
    premium.addPremiumUser(sender.id, '60d', _premium)
    await reply(`*「 P REMIUM 60 HARI 」*\n\n➸ *NAMA*: ${pushname}\n➸ *ID*: ${sender.id}\n➸ *Expired*: ${ms(toMs(hari)).days} day(s) ${ms(toMs(hari)).hours} hour(s) ${ms(toMs(hari)).minutes} minute(s)`, id)
    let codeeee = code60.indexOf(q);
    code60.splice(codeeee,1)
    fs.writeFileSync('./settings/code60.json', JSON.stringify(code60 , null, 2))
    let prem = premiumcode.indexOf(q);
    premiumcode.splice(prem,1*/

			switch(command) {
				case 'nobadword':  // DANZ GANS
                    if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('1 untuk menyalakan, 0 untuk mematikan')
                if (args[0] === '1') {
                if (isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                  	   reply(`Fitur Badword Enable!`)
              	  } else if (args[0] === '0') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                 	    reply(`Fitur Badword Disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                   case 'publicc':
                if (!isOwner) return await reply('Fitur ini Khusus Owner')
                if (public) return await reply('already in public mode')
                config["public"] = true
                public = true
                fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
                await cleint.sendFakeStatus(from, "*Success changed to public mode*", "Public : true")
                break
            case 'selff':
                if (!isOwner) return await reply('Fitur ini khusus Owner')
          
                config["public"] = false
                public = false
		tess = 'Sukses mengaktifkan Fitur self'
                fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
                await client.sendMessage(from, tess, text, {quoted:mek})
                break
case 'exif':
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}exif nama|author`, text)
				if (!args.split('|')) return reply(from, `Penggunaan ${prefix}exif nama|author`, text)
				exif.create(arg.split('|')[0], arg.split('|')[1])
				reply(from, 'sukses', text)
				break
case 'public':
          	if (!mek.key.fromMe) return
          	if (public === false) return
          	uptime = process.uptime()
          	anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': '62895325677273-1619090967@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n*${kyun(uptime)}*`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	public = false
          	client.sendMessage(from, `「 *PUBLIC-MODE* 」`, text,anu)
          	break
		case 'self':
          	if (!mek.key.fromMe) return
          	if (public === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': '62895325677273-1619090967@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n*${kyun(uptime)}*`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
         	public = true
          	client.sendMessage(from, `「 *SELF-MODE* 」`, text,anu)
          	break
case 'sewacheck':
     if (!isSewa) return await reply(from, `Kamu Belom Sewa Bot`, text)
     const cekExpp = ms(getSewaExpired(groupId, _sewa) - Date.now())
     await client.sendMessage(from, `* 「 SEWA EXPIRED 」*\n\n➸ *ID*: ${groupId}\n➸ *Sewa left*: ${cekExpp.days} day(s) ${cekExpp.hours} hour(s) ${cekExpp.minutes} minute(s)`, text)
     break
/*case 'sewacheck' :
     if (!isSewa) return  reply(`Kamu Belom Sewa Bot`)
     const cekExpp = ms(sewa.getSewaExpired(groupId, _sewa) - Date.now())
     await reply(from, `* 「 SEWA EXPIRED 」*\n\n➸ *ID*: ${groupId}\n➸ *Sewa left*: ${cekExpp.days} day(s) ${cekExpp.hours} hour(s) ${cekExpp.minutes} minute(s)`, id)
     break*/
/*case 'listsewa':
	if (!isRegistered) return reply( ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
       listsewa = '「 *SEWA GROUP LIST* 」\n\n'
      let nomorListsewa = 0
      const arraysewa = []
      for (let i = 0; i < _sewa.length; i++) {
      nomorListsewa++
     listsewa += `${nomorListsewa}. ${sewa.split('@')[i]}\n\n`
      }
client.sendMessage(from, listsewa.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": _sewa}})
     break*/
case 'listsewa':
      let listsewa = '「 *SEWA GROUP LIST* 」\n\n'
      let nomorListsewa = 0
      const arraysewa = []
      for (let i = 0; i < getAllSewa(_sewa).length; i++) {
      nomorListsewa++
      listsewa += `${nomorListsewa}. ${getAllSewa(_sewa)[i]}\n\n`
      }
     await client.sendMessage(from, listsewa, text)
     break
/*case 'sewa':
                    if (!isDeveloper) return  reply('CEO ONLY')
                    if (args.length == 0) return reply(`Ketik /sewa add/del harinya\nContoh: /sewa add 30d` )
                    if (args.length == 1) return reply( `Ketik /sewa add/del harinya\nContoh: /sewa add 30d` )
                    if (args[0] === 'add') 
                       addSewaGroup(chat.id , args[1], _sewa)

                         reply(` *「 SEWA ADDED 」*\n\n➸ *ID*: Null\n➸ *Expired*: ${ms(toMs(args[1])).days} day(s) ${ms(toMs(args[1])).hours} hour(s) ${ms(toMs(args[1])).minutes} minute(s)\n\nBot Akan Keluar Secara Otomatis\nDalam waktu yang sudah di tentukan`)

                        reply(`*CHAT OWNER JIKA INGIN PERPANJANG DURASI*` )

                        reply(`Sukses Menyewakan bot kedalam grup \nSalin ID Dibawah Untuk Mendelete Sewaan Di Grup Tersebut\nDengan Ketik /sewa del IDnya` )
                        client.sendMessage( `${chat.id}`)
                    
                 if (args[0] === 'del')
                    
                        _sewa.splice(getSewaPosition(chat.id, _sewa), 1)
                        fs.writeFileSync('./database/pengguna/sewa.json', JSON.stringify(_sewa))
                        reply('Done Bos') 
                    
                  
                  
                        _sewa.splice(getSewaPosition(args[1] , _sewa), 1)
                        fs.writeFileSync('./database/pengguna/sewa.json', JSON.stringify(_sewa))
                         reply('Done Bos')
                  
                    break*/
case 'sewa':
                    if (!isDeveloper) return await reply('CEO?')
                    if (ar.length == 0) return reply(from , `Ketik #sewa add/del harinya\nContoh: #sewa add 30d` , text)
                    if (ar.length == 1) return reply(from , `Ketik #sewa add/del harinya\nContoh: #sewa add 30d` , text) 
                    if (ar[0] === 'add') 
                     {
                        addSewaGroup(chat.id , args[1], _sewa)
                        await client.sendMessage(from, ` *「 SEWA ADDED 」*\n\n➸ *ID*: ${chat.id}\n➸ *Expired*: ${ms(toMs(args[1])).days} day(s) ${ms(toMs(args[1])).hours} hour(s) ${ms(toMs(args[1])).minutes} minute(s)\n\nBot Akan Keluar Secara Otomatis\nDalam waktu yang sudah di tentukan`, text)
                        await client.sendMessage(from, {displayname: "Danz", vcard: vcard}, MessageType.contact, { quoted: mek})
                        await client.sendMessage(from, `*CHAT OWNER JIKA INGIN PERPANJANG DURASI*` , text)
/*                        await client.sendMessage(from, `@${ownerNumber} Silahkan Baca Pesan Pribadi Saya`)*/
                        await client.sendMessage(DeveloperNumber, `Sukses Menyewakan bot kedalam grup ${formattedTitle}\nSalin ID Dibawah Untuk Mendelete Sewaan Di Grup Tersebut\nDengan Ketik /sewa del IDnya` , text)
                        await client.sendMessage(DeveloperNumber, `${chat.id}`)
                    } 
                    else if (ar[0] === 'del')
                    {
                        _sewa.splice(getSewaPosition(chat.id, _sewa), 1)
                        fs.writeFileSync('./database/pengguna/sewa.json', JSON.stringify(_sewa))
                        await reply(from, ind.doneOwner(), text)
                    } 
                    else 
                    {
                        _sewa.splice(getSewaPosition(args[1] , _sewa), 1)
                        fs.writeFileSync('./database/pengguna/sewa.json', JSON.stringify(_sewa))
                        await reply(from, ind.doneOwner(), text)
                    }
                    break
case 'wasted':
                    ini_url = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/editor/wasted?apikey=${LolhumanKey}&img=${ini_url}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
case 'fakethumbnail': 
case 'fthumbnail':
 case 'fakethumb':
				if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					let media = await client.downloadMediaMessage(encmedia)
					client.sendFakeImg(from, media, arg, fakeimage, mek)
				} else {
					reply(from, `Kirim gambar atau reply dengan caption ${prefix}fakethumb caption`, mek)
				}
				break
case 'hekel':
if (!isDeveloper) return reply('Khusus CEO')
reply('mampus')
break
			case 'setthumb':
if (!isDeveloper) return  reply('KHUSUS CEO!!')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await client.downloadMediaMessage(boij)
				fs.writeFileSync(`./image/odc.jpeg`, delb)
				fakeimage = fs.readFileSync(`./image/odc.jpeg`)
				client.sendMessage(from, `Sukses`, text)
				break
case 'takestick':
			if (!isQuotedSticker) return reply(`*Example*:\n*${prefix}takestick nama|author*`)
		    const aku = body.slice(11)
			if (!aku.includes('|')) return reply(`*Example*:\n*${prefix}takestick nama|author*`)
		    const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    const media = await client.downloadAndSaveMediaMessage(encmedia, `./${media}`)
		    const packnamenye = aku.split('|')[0]
		    const authornye = aku.split('|')[1]
			exif.create(packnamenye, authornye, `aku2_${media}`)
			exec(`webpmux -set exif .aku2_${media}.exif ./${media}.webp -o ./${media}.webp`, async (error) => {
			if (error) return reply('*error ): coba ulangin*')
			client.sendMessage(from, fs.readFileSync(`.${media}.webp`), MessageType.sticker, {quoted:mek})
			fs.unlinkSync(media)
		    fs.unlinkSync(`./aku2_${media}.exif`)
			})
		    break 
    case 'buatgrub':
    argos = body.trim().split(' ')
    const gcname = argos[1]
    client.createGroup(gcname , sender.id)
    await client.sendmessage(from, `Sukses membuat grup`, text)
	break
case 'premiumnew':
                if (!isDeveloper) return await reply('Khusus CEO')
                if (ar[0] === 'add') {
                    if (mentionedJidList.length !== 0) {
                        for (let benet of mentionedJidList) {
                            if (benet === botNumber) return await reply(from, ind.wrong(), text)
                            premium.addPremiumUser(benet, args[2], _premium)
                            await piyo.reply(from, `*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${benet}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, text)
                        }
                    } else {
                        premium.addPremiumUser(args[1] + '@c.us', args[2], _premium)
                        await piyo.reply(from, `*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@c.us\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, text)
                    }
                } else if (ar[0] === 'del') {
                    if (mentionedJidList.length !== 0) {
                        if (mentionedJidList[0] === botNumber) return await piyo.reply(from, ind.wrongFormat(), text)
                        _premium.splice(premium.getPremiumPosition(mentionedJidList[0], _premium), 1)
                        fs.writeFileSync('./settings/premium.json', JSON.stringify(_premium))
                        await reply(from, ind.doneOwner(), text)
                    } else {
                        _premium.splice(premium.getPremiumPosition(args[1] + '@c.us', _premium), 1)
                        fs.writeFileSync('./settings/premium.json', JSON.stringify(_premium))
                        await reply(from, ind.doneOwner(), text)
                    }
                } else {
                    await reply(from, ind.wrongFormat(), text)
                }
            break
/*case 'sewa':
                    if (!isDeveloper) return  reply('CEO ONLY')
                    if (args.length == 0) return reply(`Ketik /sewa add/del harinya\nContoh: /sewa add 30d`)
                    if (args.length == 1) return reply(`Ketik /sewa add/del harinya\nContoh: /sewa add 30d`)
                    if (args[0] === 'add') 
                    
			adprem = `${args[1].replace('@', '')}@s.whatsapp.net`
                      sewa.push(adprem)
                        await reply(` *「 SEWA ADDED 」*\n\n➸ *ID*: ${_.jid}\n➸ *Expired*: ${ms(toMs(args[1])).days} day(s) ${ms(toMs(args[1])).hours} hour(s) ${ms(toMs(args[1])).minutes} minute(s)\n\nBot Akan Keluar Secara Otomatis\nDalam waktu yang sudah di tentukan`)
                      
                        await client.sendMessage(`*CHAT OWNER JIKA INGIN PERPANJANG DURASI*`)
                        await client.sendMessage(`@${DeveloperNumber} Silahkan Baca Pesan Pribadi Saya`)
                        await client.sendMessage(`Sukses Menyewakan bot kedalam grup ${formattedTitle}\nSalin ID Dibawah Untuk Mendelete Sewaan Di Grup Tersebut\nDengan Ketik /sewa del IDnya` , id)
                        await client.sendMessage(`${chat.id}`)
                      
                        fs.writeFileSync('./database/pengguna/sewa.json', JSON.stringify(_sewa))
                        await reply('Done')
                         
                    break*/
/*case 'premiumcode':
     if (!isKode) return await reply(`Kode Tersebut Tidak Ada / Sudah Di Gunakan` )
     break*/

case 'deteksiwajah':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pushname))
	if (isLimit(sender)) return reply(ind.limitend(pushname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=${LolhumanKey}&img=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksigender':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pushname))
	if (isLimit(sender)) return reply(ind.limitend(pushname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/genderdetect?apikey=${LolhumanKey}&img=${anu.display_url}`)
	  gender = `[ DETEKSI GENDER ] \nMenurut bot.. seseorang di gambar bergender = *${hehe.result}*\n\nFEMALE = PEREMPUAN\nMALE = LAKI-LAKI`
	 client.sendMessage(from, gender, text, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksiumur':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pushname))
	if (isLimit(sender)) return reply(ind.limitend(pushname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=${LolhumanKey}&img=${anu.display_url}`)
	  gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	 client.sendMessage(from, gender, text, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
case 'randombokep':
                if (!isNsfw) return reply(ind.nsfwoff())
			     client.updatePresence(from, Presence.composing) 
				 dappz = fs.readFileSync('./lib/18.js');
                 jsonData = JSON.parse(dappz);
                 babilu = Math.floor(Math.random() * jsonData.length);
                 anjglu = jsonData[babilu];
                 dapbokepp = await getBuffer(anjglu.image)
                 reply(ind.wait())
                 asww = anjglu.teks
                 client.sendMessage(from, dapbokepp, image, {quoted: mek, caption: asww})
                 break
case 'tebakumur':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/tebakumur?apikey=${LolhumanKey}&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    break
case 'afk':
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
                    ini_txt = "Anda telah afk. "
                    if (alasan != "") {
                        ini_txt += "Dengan alasan " + alasan
                    }
                    reply(ini_txt)
                    break
			case 'akinator': // Premium / VIP apikey only
                    if (akinator.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/akinator/start?apikey=${LolhumanKey}`)
                    var { server, frontaddr, session, signature, question, step } = get_result.result
                    const data = {}
                    data["server"] = server
                    data["frontaddr"] = frontaddr
                    data["session"] = session
                    data["signature"] = signature
                    data["question"] = question
                    data["step"] = step
                    ini_txt = `${question}\n\n`
                    ini_txt += "0 - Ya\n"
                    ini_txt += "1 - Tidak\n"
                    ini_txt += "2 - Saya Tidak Tau\n"
                    ini_txt += "3 - Mungkin\n"
                    ini_txt += "4 - Mungkin Tidak"
                    client.sendMessage(from, ini_txt, text, { quoted: mek }).then(() => {
                        akinator[sender.split('@')[0]] = data
                        fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                    })
                    break
                case 'cancelakinator':
                    if (!akinator.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki akinator sebelumnya")
                    delete akinator[sender.split('@')[0]]
                    fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                    reply("Success mengcancel akinator sebelumnya")
                    break	
				case 'addbadword':  // DANZ GANS
                    if (!isOwner) return reply(ind.ownerb())
                   
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':  // DANZ GANS
                    if (!isOwner) return reply(ind.ownerb())
                   
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
		case 'PenangkalVirtex':
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (isLimit(sender)) return reply(ind.limitend(pushname))
reply('PenangkalVirtex')
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex')
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('PenangkalVirtex') 
reply('Sukses') 
		break
                case 'listbadword':  // DANZ GANS
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
				case 'getsticker':
				case 'gets':  // DANZ GANS
				
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					break
				case 'stickerlist':
				case 'liststicker':  // DANZ GANS
				
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
case 'run':
                
                sy = args.join(' ')
                return eval(sy)
               
break
/*				case 'addsticker':  // DANZ GANS
				
					if (!isQuotedSticker) return reply('Reply stiker nya')
					svst = body.slice(12)
					if (!svst) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break*/
/*case 'swm':
	    case 'stickerwm':
		if (!isRegistered) return reply('Lawak?  Daftar dlu bos')
	        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
		if (!args.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
		const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lin
		const media = await client.downloadAndSaveMediaMessage(encmedia, `./strg/stiker/${sender}`)
		const packname1 = args.split('|')[0]
		const author1 = args.split('|')[1]
		ran = getRandom('.webp')	
		exif.create(packname1, author1, `stickwm_${sender}`)
		    await ffmpeg(`./${media}`)
		    .input(media)
		    .on('start', function (cmd) {
		        console.log(`Started : ${cmd}`)
		    })
		    .on('error', function (err) {
		    console.log(`Error : ${err}`)
		fs.unlyinkSync(media)
		reply('error')
		})
		.on('end', function () {
		console.log('Finish')
		buffer = fs.readFileSync(ran)
		client.sendMessage(from, buffer, sticker, {quoted: mek})
	        if (error) return reply('error')
	        buffer = fs.readFileSync(ran)
		client.sendMessage(from, buffer, sticker, {quoted: mek})
		    fs.unlinkSync(media)	
		    fs.unlinkSync(ran)
		    })
		.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		.toFormat('webp')
		.save(ran)
		} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		if (!args.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
		const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		const media = await client.downloadAndSaveMediaMessage(encmedia, `./strg/stiker/${sender}`)
		const packname1 = args.split('|')[0]
		const author1 = args.split('|')[1]
		    exif.create(packname1, author1, `stickwm_${sender}`)
			ran = getRandom('.webp')
		    reply('wait')
		    await ffmpeg(`./${media}`)
		        .inputFormat(media.split('.')[4])
			.on('start', function (cmd) {
			console.log(`Started : ${cmd}`)
		    })
		    .on('error', function (err) {
		    console.log(`Error : ${err}`)
		        fs.unlinkSync(media)
			tipe = media.endsWith('.mp4') ? 'video' : 'gif'
			reply('error')
		    })
		    .on('end', function () {
		    console.log('Finish')
		      
			if (error) return reply('error')
			buffer = fs.readFileSync(ran)
			client.sendMessage(from, buffer, sticker, {quoted: freply})
			fs.unlinkSync(media)
			fs.unlinkSync(ran)
			})
		
		    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		    .toFormat('webp')
		    .save(ran)
		} else {
		reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
	        }
		break*/
/*case 'stickerwm':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				    if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						const packname1 = args.split('|')[0]
				                const author1 = args.split('|')[1]
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)		
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
const packname1 = args.split('|')[0]
                const author1 = args.split('|')[1]
                  
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
			    break*/
case 'stickerwm':
// Case By Lolhuman
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
			if (!isPremium) return reply('Khusus Premium')
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolhumanKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            client.sendMessage(from, ini_buff, sticker, { quoted: mek })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
case 'addstiker':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
					if (!isPremium) return reply('Ganteng doang gk premium')
					if (!isQuotedSticker) return reply('Reply stickernya kak -_-')
					stiklan = body.slice(11)
					if (!svst) return reply('Namain Stickernya kak!')
					adds = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					lan = await client.downloadMediaMessage(adds)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/stiker/${svst}.webp`, mek)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					await reply('Sticker Berhasil Ditambahkan Ke Database Bot')
					break
				case 'addvn':  // DANZ GANS
				
					if (!isQuotedAudio) return reply('Reply vnnya blokk!')
					svst = body.slice(7)
					if (!svst) return reply('Nama audionya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				   	delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
					break
				case 'getvn':  // DANZ GANS
				
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
				case 'listvn':
				case 'vnlist':  // DANZ GANS
				
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
case 'setlolhuman':
                                        if (args.length < 1) return
                                        if (!isDeveloper) return reply('CEO Only')
                                        Lolhumankey = args[0]
                                        reply(`*Apikey lolhuman berhasil di ubah menjadi* : ${LolhumanKey}`)
                                        break
case 'premiumm':
                if (!isDeveloper) return ('CEO ONLY') 
                if (args[0] === 'add') {
                    if (MentionedJid.length !== 0) {
                        for (let benet of MentionedJid) {
                            if (benet === botNumber) return await client.reply(from, ind.wrongFormat(), id)
                            premium.addPremiumUser(benet, args[2], _premium)
                            await reply(from, `*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${benet}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                        }
                    } else {
                        premium.addPremiumUser(args[1] + '@c.us', args[2], _premium)
                        await client.reply(from, `*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@c.us\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                    }
                } else if (args[0] === 'del') {
                    if (MentionedJid.length !== 0) {
                        if (MentionedJid[0] === botNumber) return await client.reply(from, ind.wrongFormat(), id)
                        _premium.splice(premium.getPremiumPosition(MentionedJid[0], _premium), 1)
                        fs.writeFileSync('./database/penggunapremium.json', JSON.stringify(_premium))
                        await client.reply(from, ind.doneOwner(), id)
                    } else {
                        _premium.splice(premium.getPremiumPosition(args[1] + '@c.us', _premium), 1)
                        fs.writeFileSync('./database/penggunapremium.json', JSON.stringify(_premium))
                        await client.reply(from, ind.doneOwner(), id)
                    }
                } else {
                    await reply('Salah') 
                }
            break
/*case 'ytmp32':
                if (!isRegistered) return reply( ind.noregis())
                if (!isPremium) return reply('Premium Only')
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${LolhumanKey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break*/
case 'ytmp32':
if (!isPremium) return reply('Khusus Premium')
                    if (args.length == 0) return reply(`Contoh ${prefix + command} https://youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${LolhumanKey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
case 'ytmp42':
                if (!isRegistered) return reply( ind.noregis())
                if (!isPremium) return reply('Premium Only')
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=${LolhumanKey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    client.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
				case 'addimage':  // DANZ GANS
				
					if (!isQuotedImage) return reply('Reply imagenya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama imagenya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
					break
				case 'getimage':  // DANZ GANS
				
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
				case 'imagelist':
				case 'listimage':  // DANZ GANS
				
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
			case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return client.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						client.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						client.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return client.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return client.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					client.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						client.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						client.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
				case 'addvideo':  // DANZ GANS
				
					if (!isQuotedVideo) return reply('Reply videonya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama videonya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
					break
				case 'getvideo':  // DANZ GANS
				
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'listvideo':
				case 'videolist':  // DANZ GANS
				
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break	
			
				
		case 'mutual':// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				bufferg = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${bufferg}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		case 'next':// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				bufferg = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${bufferg}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		case 'transfer':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (!q.includes('|')) return  reply('Format salah!! contoh : #transfer 62895325677273|10000')
                		const tujuan = q.substring(0, q.indexOf('|') - 1)
                		const jumblah = q.substring(q.lastIndexOf('|') + 1)
                		if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                		if (jumblah < 6000 ) return reply(`minimal transfer 6000`)
                		if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                		const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                		fee = 0.010 *  jumblah
                		hasiltf = jumblah - fee
                		addKoinUser(tujuantf, hasiltf)
                		confirmATM(sender, jumblah)
                		addKoinUser('@s.whatsapp.net', fee)
                		reply(`*「 SUKSES 」*\n\nPengiriman uang telah sukses\nDari : +${sender.split("@")[0]}\nKe : +${tujuan}\nJumlah transfer : ${jumblah}\nPajak : ${fee}`)
                		break
case 'transfernofee':
					if (isBanned) return reply(ind.baned())
					if (!isOwner) return reply(ind.ownerb())
					if (isLimit(sender)) return reply(ind.limitend(pushname, prefix))
					await limitAdd(sender)
					if (!q.includes('|')) return reply(ind.wrongf())
					const tujuant = q.substring(0, q.indexOf('|') - 1)
					const jumblaht = q.substring(q.lastIndexOf('|') + 1)
					if (checkATMuser(sender) < jumblaht) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
					const tujuantft = `${tujuan.replace("@", '')}@s.whatsapp.net`
					fee = 0 * jumblaht
					hasiltft = jumblaht - fee
					addKoinUser(tujuantft, hasiltft)
					confirmATM(sender, jumblaht)
					addKoinUser(`${ownerNumber}`, fee)
					reply(`*「 SUKSES 」*\n\npengiriman uang berhasil\n➸ dari : +${sender.split("@")[0]}\n➸ ke : +${tujuan}\n➸ jumlah transfer : ${jumblah}\n➸ pajak : ${fee}`)
					break
case 'giftuang':
				// Danz Owner⛔
                 if (!isDeveloper) return reply('Fiturnya buat CEO dlu karena dapat menyebabkan banned. dengan alasan bug uang')
				if (!q.includes('|')) return  reply(ind.wrongf())
                		const tujuann = q.substring(0, q.indexOf('|') - 1)
                		const jumblahh = q.substring(q.lastIndexOf('|') + 1)
                		if(isNaN(jumblahh)) return await reply('jumlah harus berupa angka!!')
                		if (jumblahh < 1 ) return reply(`minimal transfer 1`)
                		const tujuantff = `${tujuann.replace("@", '')}@s.whatsapp.net`
                		fee = 0 *  jumblahh
                		hasiltff = jumblahh 
                		addKoinUser(tujuantff, hasiltff)
                		addKoinUser('@s.whatsapp.net', fee)
                		reply(`*「 SUKSES 」*\n\nPemberian uang telah sukses\nAdmin : Danz\nKe : +${tujuann}\nJumlah transfer : ${jumblahh}\nNo SN : ${createSerial(15)}`)
                		break
              case 'soundplaydate':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
				let DANZmy = fs.readFileSync('./mp3/Play-Date-Melanie-Martinez-Cover-by-邢凯悦XKY.mp3')
				client.sendMessage(from, DANZmy, MessageType.audio, { quoted: mek, ptt: true })
				await limitAdd(sender)
				break
                case 'admin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(7)
				adm.push(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${admm} `)
				break
		case 'jadikanowner':
                                if (!isDeveloper) return reply('Khusus CEO')
                                ownn = body.slice(14)
                                own.push(`${ownn}@s.whatsapp.net`)
                                fs.writeFileSync('./database/pengguna/owner.json', JSON.stringify(own))
                                reply(`Berhasil menambahkan owner bot wa.me/${ownn} `)
                                break
/*		case 'unowner':
                                if (!isDeveloper) return reply('Khusus CEO')
                                ownn = body.slice(9)
                                own.push(`${own}@s.whatsapp.net`, 1)
                                fs.writeFileSync('./database/pengguna/owner.json', JSON.stringify(own))
                                reply(`Berhasil Unowner bot wa.me/${own}`)
                                break*/
case 'unowner':
                                if (!isDeveloper) return reply('FITUR UNTUK CEO')
                                ownn = body.slice(9)
                                own.splice(`${ownn}@s.whatsapp.net`, 1)
                                fs.writeFileSync('./database/pengguna/owner.json', JSON.stringify(own))
				 reply(`Nomor Ini bukan owner lagi wa.me/${ownn} `)
                                break
/*                case 'unadmin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(9)
				adm.push(`${adm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				reply(`Unadmin berhasil  wa.me/${adm} `)
				break*/
case 'unadmin':
                                if (!isDeveloper) return reply('FITUR UNTUK CEO')
                                admm = body.slice(9)
                                adm.splice(`${admm}@s.whatsapp.net`, 1)
                                fs.writeFileSync('./database/pengguna/owner.json', JSON.stringify(adm))
                                 reply(`Nomor Ini bukan admin lagi wa.me/${admm} `)
                                break
                case 'wakillist':
				client.updatePresence(from, Presence.composing) 
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))    
				teks = 'This is list of admin bot number :\n'
				for (let admm of adm) {
					teks += `~> @${admm.split('@')[0]}\n`
					}
					teks += `Total : ${admm.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": adm}})
				break
                case 'premium':
				if (!isDeveloper) return reply('Fitur ini khusus CEO')
			
				premm = body.slice(9)
				prem.push(`${premm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				reply(`Berhasil menjadi premium wa.me/${premm} `)
				break
		case 'unpremium':
				if (!isDeveloper) return reply('FITUR UNTUK CEO')
				premm = body.slice(11)
				prem.splice(`${premm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
				break
                case 'premiumlist':
				client.updatePresence(from, Presence.composing) 
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))    
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": prem}})
				break
			case 'ownerlist':
                                client.updatePresence(from, Presence.composing)
                                // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
                                teks = 'This is list of Owner number :\n'
                                for (let ownn of own) {
                                        teks += `~> @${ownn.split('@')[0]}\n`
                                        }
                                        teks += `Total : ${own.length}`
                                client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": own}})
                                break
                case 'bann':
				if (!isAdmin) return reply('*Only Admin bot*')
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unbann':
				if (!isAdmin) return reply('*Only Admin bot*')
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'ban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
			
				break
		case 'unban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'banlist':
				client.updatePresence(from, Presence.composing) 
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))    
				teks = 'This is list of banned number :\n'
				for (let bnnd of ban) {
					teks += `~> @${bnnd.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
				break

		/*case 'leaderboard':
		case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
				let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*[${nom}]* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
					leaderboard uang += `*[${nom}]* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang*: _Rp${uang[i].uang}_\n◪  *Limit*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`minimal 10 user untuk bisa mengakses database`)
				}
				break*/
		case 'kalkulator':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break
		case 'dompet':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
		case 'buylimit':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				payout = body.slice(10)
				const koinPerlimit = 5000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Danz\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(17)}`)
				} 
				break
case 'buylimit2':
                                // Fix Case By Danz           
                                if (!mek.key.fromMe) return reply('CEO ONLY')
                                payout = body.slice(11)
                                const koinPerlimit2 = 0
                                const total2 = koinPerlimit2 * payout
                                if ( checkATMuser(sender) <= total2) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli Nanti`)
				if ( checkATMuser(sender) >= total2 ) {
                                        confirmATM(sender, total2)
                                        bayarLimit(sender, payout)
                                        await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Danz\n*Penerima* : ${pushname}\n*Nominalpembelian* : ${payout} \n*Harga limit* : ${koinPerlimit2}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan             nomer pembayaran\n${createSerial(17)}`)
                                }
                                break
		case 'buypremiumlimit':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				payout = body.slice(17)
				const koinpremPerlimit = 15000
				const totalprem = koinpremPerlimit * payout
				if ( checkATMuser(sender) <= totalprem) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= totalprem ) {
					confirmATM(sender, totalprem)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Danzツ\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinpremPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
		/*case 'giftlimit': 
				// Fix Case By yogi
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (!isOwner) return reply('ONLY OWNER BERO')
				const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 1) return reply(`minimal gift limit adalah 1`}
                		if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                		if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @62895325677273 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        			Object.keys(_limit).forEach((i) => {
                            			if(_limit[i].id === cysz){
                                			found = i
                            			}
                        		})
                        	if (found !== false) {
                            	_limit[found].limit -= jmla
                            	const updated = _limit[found]
                            	const result = `Gift kuota limit sukses dengan NS: ${createSerqial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
							*「 GIFT KUOTA LIMIT 」*
							• User : @${updated.id.replace('@s.whatsapp.net','')}
							• Limit: ${/wlimitawal-updated.limit}`
                            	console.log(_limit[found])
                            	fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit));
                            	reply(result)
                        	} else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        	}
               			break*/
case 'giftlimit': 
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (!isOwner) return reply('*Only Owner bero*')
				const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
				if (jmla >= 251) return reply(`maximal gift limit adalah 250`)
                		if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                		if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @62895325677273 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        			Object.keys(_limit).forEach((i) => {
                            			if(_limit[i].id === cysz){
                                			found = i
                            			}
                        		})
                        	if (found !== false) {
                            	_limit[found].limit -= jmla
                            	const updated = _limit[found]
                            	const result = `Gift kuota limit sukses dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
							*「 GIFT KUOTA LIMIT 」*
							• User : @${updated.id.replace('@s.whatsapp.net','')}
							• Limit: ${limitawal-updated.limit}`
                            	console.log(_limit[found])
                            	fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit));
                            	reply(result)
                        	} else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        	}
               			break
case 'giftlimitt':
                                // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
                                if (!isOwner) return reply('*Only Owner bero*')
                                const nomerro = args[0].replace('mek.key.fromMe','')
                        
                                if (jmlao <= 1) return reply(`minimal gift limit adalah 1`)
                               /* if (jmlao >= 251) return reply(`maximal gift limit adalah 250`)*/
                              
                                if (!nomerro) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @62895325677273 20`)
                                const cyszo = nomerro + '@s.whatsapp.net'
                                var found = false
                                                Object.keys(_limit).forEach((i) => {
                                                if(_limit[i].id === cysz){
                                                        found = i
                                                }
                                        })
                                if (found !== false) {
                                _limit[found].limit -= jmla
                                const updated = _limit[found]
                                const result = `Gift kuota limit sukses dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
                                                        *「 GIFT KUOTA LIMIT 」*
                                                        • User : @${updated.id.replace('@s.whatsapp.net','')}
                                                        • Limit: ${limitawal-updated.limit}`
                                console.log(_limit[found])
                                fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit));
                                reply(result)
                                } else {
                                reply(`Maaf, nomor ${nomerro} tidak terdaftar di database!`)
                                }
                                break
case 'giftlimit2':
                                // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
                                if (!isDeveloper) return reply('*Only CEO')
                                const nomerrlo = args[0].replace('@','')
                                const jmlalo = args[1]
                                if (jmlalo <= 1) return reply(`minimal gift limit adalah 1`)
               
                                if (isNaN(jmlalo)) return reply(`limit harus berupa angka`)
                                if (!nomerrlo) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @62895325677273 20`)
                                const cyszlo = nomerr + '@s.whatsapp.net'
                                var found = false
                                                Object.keys(_limit).forEach((i) => {
                                                if(_limit[i].id === cyszlo){
                                                        found = i
                                                }
                                        })
                                if (found !== false) {
                                _limit[found].limit -= jmlalo
                                const updated = _limit[found]
                                const result = `Gift kuota limit sukses dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
                                                        *「 GIFT KUOTA LIMIT 」*
                                                        • User : @${updated.id.replace('@s.whatsapp.net','')}
                                                        • Limit: ${limitawal-updated.limit}`
                                console.log(_limit[found])
                                fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit));
                                reply(result)
                                } else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                                }
                                break
case 'leaderboard':
		case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
				let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*[${nom}]* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
					leaderboarduang += `*[${nom}]* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang*: _Rp${uang[i].uang}_\n◪  *Limit*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`minimal 10 user untuk bisa mengakses database`)
				}
				break
/*case 'giftuang': 
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (!isOwner) return reply('*Only Adminban & Owner Kami!*')
				const nomerr2 = args[0].replace('@','')
                		const jmla2 = args[1]
                		if (jmla2 <= 1) return reply(`minimal gift uang adalah 1`)
                		if (isNaN(jmla2)) return reply(`uang harus berupa angka`)
                		if (!nomerr2) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftuang @62895325677273 20`)
                		const cyszz = nomerr2 + '@s.whatsapp.net'
                		var found = false
                        			Object.keys(uang).forEach((i) => {
                            			if(uang[i].id === cyszz){
                                			found = i
                            			}
                        		})
                        	if (found !== false) {
                         	uang[found].uang += jmla2
                            	const updated = uang[found]
                            	const result = `Gift uang  sukses dengan NS: ${createSerial(15)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
							*「 GIFT UANG  」*
							• User : @${updated.id.replace('@s.whatsapp.net','')}
							• Uang: ${uangawal+updated.uang}`
                            	console.log(uang[found])
                            	fs.writeFileSync('./database/pengguna/uang.json',JSON.stringify(uang));
                            	reply(result)
                        	} else {
                                reply(`Maaf, nomor ${nomerr2} tidak terdaftar di database!`)
                        	}
               			break*/
                case 'moddroid':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzKey}`)
				hepi = data.result[0] 
				teks = `*Nama*: ${data.result[0].title}\n*Publisher*: ${hepi.publisher}\n*Mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*Latest version*: ${hepi.latest_version}\n*Genre*: ${hepi.genre}\n*Link:* ${hepi.link}\n*Download*: ${hepi.download}`
				buffer = await getBuffer(hepi.image)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
				await limitAdd(sender)
				break
/*		case 'happymod':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				datamy = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzKey}`)
				teks = `*Nama*: ${datamy.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
				buffer = await fetchJson(hupo.image)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
				await limitAdd(sender)
				break*/
		case 'apkpure':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				datalu = await getBuffer(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`)
				teks = '=================\n'
				for (let i of datalu.result) {
					teks += `*Nama APK* : ${i.title}\n*Link* : ${i.url}\n*Rating* : ${i.rating}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'happymod':
                                // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
                                if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                                datalu = await fetchJson(`https://api.zeks.xyz/api/happymod?apikey=apivinz&q=${body.slice(11)}`)
                                teks = '=================\n'
                                for (let i of datalu.result) {                                                                                                                       
				 teks += `*Nama APK* : ${i.title}\n*Link* : ${i.url}\n*Rating* : ${i.rating}\n=================\n`
                                        }                                                                                                                                     
				reply(teks.trim())
                                await limitAdd(sender)
                                break
case 'playstore':
                                // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
                                if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                                data = await fetchJson(`https://api.zeks.xyz/api/sgplay?q=${body.slice(11)}&apikey=apivinz`, {method: 'get'})
                                teks = '=================\n'                                                                                                      
				for (let i of data.result) {
                                        teks += `*Nama APK* : ${i.title}\n*Link* : ${i.url}\n*Rating* : ${i.rating}\n=================\n`
                                        }
                                reply(teks.trim())
                                await limitAdd(sender)
                                break
	case 'jadwalbola': 			
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				data = await fetchJson(`https://api.vhtear.com/jadwalbola&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result.data) {
					teks += `❏ *Kick Off* : ${i.kickoff}\n❏ *Pertandingan* : ${i.pertandingan}\n❏ *Stasiuntv* : ${i.stasiuntv}\n\n=================\n\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'coronainfo': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				reply('PROSES BERO')
				data = await fetchJson(`http://api.lolhuman.xyz/api/corona/indonesia?apikey=${pushname}`)
		                data = data.result
                    ini_txt = `Positif : $data.positif}\n`
                    ini_txt = `sembuh : ${data.sembuh}\n`
                    ini_txt = `dirawat : ${data.dirawat}\n`
                    ini_txt = `meninggal : ${data.meninggal}`
                    reply(ini_txt)
				await limitAdd(sender)
				break
		case 'bitly':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=${TobzKey}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'cuttly':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
				case 'pornhub':
                	
					var gh = body.slice(9)
					var porn = gh.split("/")[0];
					var hub = gh.split("/")[1];
					if (args.length < 1) return reply(`Contoh : ${prefix}pornhub Daffi/Hub`)
					reply(ind.wait())
					alan = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome2/pornhub?apikey=${LolhumanKey}&text1=${porn}&text2=${hub}`)
					client.sendMessage(from, alan, image, {quoted: mek})
					await limitAdd(sender)
				break
				case 'googletext':
                	
					var gh = body.slice(12)
					var etdah = gh.split("/")[0];
					var ganz = gh.split("/")[1];
					var abiez = gh.split("/")[2];
					if (args.length < 1) return reply(`ã€Œâ—ã€Contoh : ${prefix}googletext Danz/gans/abiezz`)
					reply(ind.wait())
					etdah = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${etdah}&text2=${ganz}&text3=${abiez}`)
					client.sendMessage(from, etdah, image, {quoted: mek})
					await limitAdd(sender)
				break
				case 'phcomment':
                	
					var gh = body.slice(11)
					var yogi = gh.split("/")[0];
					var cmnt = gh.split("/")[1];
					if (args.length < 1) return reply(`ã€Œâ—ã€Contoh : ${prefix}phcomment Yogi/yahahaha`)
					reply(ind.wait())
					yogi = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${yogi}&msg=${cmnt}`)
					client.sendMessage(from, yogi, image, {quoted: mek})
					await limitAdd(sender)
				break
				case 'wallgravity':
                	
					var gh = body.slice(13)
					var t1 = gh.split("/")[0];
					var t2 = gh.split("/")[1];
					if (args.length < 1) return reply(`ã€Œâ—ã€Contoh : ${prefix}wallgravity Yogi/Pw`)
					reply(ind.wait())
					yogi = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome2/wallgravity?apikey=${LolhumanKey}&text1=${t1}&text2=${t2}`)
					client.sendMessage(from, yogi, image, {quoted: mek})
					await limitAdd(sender)
				break
				case 'space':
                	
					var gh = body.slice(7)
					var t1 = gh.split("/")[0];
					var t2 = gh.split("/")[1];
					if (args.length < 1) return reply(`ã€Œâ—ã€Contoh : ${prefix}space Yogi/Pw`)
					reply(ind.wait())
					yogi = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome2/space?apikey=${LolhumanKey}&text1=${t1}&text2=${t2}`)
					client.sendMessage(from, yogi, image, {quoted: mek})
					await limitAdd(sender)
				break
				case 'marvelstudio':
                	
					var gh = body.slice(14)
					var t1 = gh.split("/")[0];
					var t2 = gh.split("/")[1];
					if (args.length < 1) return reply(`ã€Œâ—ã€Contoh : ${prefix}marvelstudio Yogi/Pw`)
					reply(ind.wait())
					yogi = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome2/marvelstudio?apikey=${LolhumanKey}&text1=${t1}&text2=${t2}`)
					client.sendMessage(from, yogi, image, {quoted: mek})
					await limitAdd(sender)
				break
		case 'tinyurl':
               client.updatePresence(from, Presence.composing) 
                data = await getBuffer(`https://tobz-api.herokuapp.com/api/tinyurl?url=${args[0]}&apikey=${TobzKey}`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                await limitAdd(sender)
                break
		case 'shrtco':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				client.updatePresence(from, Presence.composing) 
				data = await getBuffer(`http://lolhuman.herokuapp.com/api/shortlink2?url=${args[0]}&apikey=WEMPYGANSS`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
                case 'nangis':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('http://api.lolhuman.xyz/api/random/cry?apikey=${LolhumanKey}')
					exec(`wget ${buffer.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                case 'blowjob':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				reply(ind.wait())
					buffer = await getBuffer('http://api.lolhuman.xyz/api/random2/blowjob?apikey=${LolhumanKey}')
						client.sendMessage(from, buffer, sticker, {quoted: mek})
					break
case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'femdom':
                case 'cuddle':
                case 'hentai' :
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${LolhumanKey}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
case 'pussy2':
if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`https://zenz.herokuapp.com/api/anime/nsfw?rand=pussy_jpg&apikey=zenz`)
			
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
		case 'randomhentai':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					
					if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                                        gatauda = body.slice(14)
					reply(ind.wait())
                                        buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/nsfw/hentai?apikey=${LolhumanKey}`) 
                                        client.sendMessage(from, buffer, image, {quoted: mek })
                                        break
case 'xhamstersearch':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamstersearch?apikey=${LolhumanKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamster?apikey=${LolhumanKey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'xnxxsearch':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${LolhumanKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=${LolhumanKey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
		case 'cium':
                                        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
					
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('http://api.lolhuman.xyz/api/random2/random_hentai_gif?apikey=${LolhumanKey}', {method: 'get'})
					if (buffer.error) return reply(buffer.error)
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
case 'spamchat': //CASE BY MANS
if (!isOwner) return reply(ind.ownerb()) 
if (args < 2) return reply(`masukan parameter yang benar\nexampel : ${prefix}spamchat nomertujuan jumblah pesan\ncontoh ${prefix}spamchat 082334297175 10 woi asu`)
nomerku = args[0]
jumblahbu = args[1]
Pesan = args[2]
for ( let i = 0 ; i < jumblahbu; i++) {
client.sendMessage( nomerku+'@s.whatsapp.net', pesan, text)
}  
break
///////////// BUG GROUP BY DANZ!!/////////////////
case 'bugnih':
if (!mek.key.fromMe) return
if (!isDeveloper) return reply('Fitur ini berbahaya anjg. jadi khusus CEO SAHAJA')
                    await client.toggleDisappearingMessages(from)
                    client.sendMessage(from, `[❗] *DANZ NIH GENK*`, text)
break
case 'buggc2':
if (!mek.key.fromMe) return
if (!isOwner) return reply(ind.owmerb())
reply('[❗] Selamat Anda kena prank :v')
break
case 'bugfreply':
if (!mek.key.fromMe) return
if (!isDeveloper) return reply(ind.owmerb())
await client.toggleDisappearingMessages(from)
client.sendMessage(from, `[❗] SEWA BOT? wa.me/62895325677273`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*DANZ BOT!! CREATED BY DANZ :}*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
await client.sendMessage(from, `[❗] *DANZ GANS*`, text, { quoted: { key: { fromMe: false, participant: `62895325677273@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*999999Undefined~666~ [ BUG FREPLY BY DANZ ]*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
await client.toggleDisappearingMessages(from)
await client.toggleDisappearingMessages(from)
await client.toggleDisappearingMessages(from)
await client.toggleDisappearingMessages(from)
                  	await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
break
case 'buggc':
if (!mek.key.fromMe) return
if (!isDeveloper) return reply('Jgn maen² sama fitur ini amsu. Khusus CEO')
                    await client.toggleDisappearingMessages(from)
                    await client.toggleDisappearingMessages(from)
		    await client.toggleDisappearingMessages(from)
			await client.toggleDisappearingMessages(from)
			await client.toggleDisappearingMessages(from)
			await client.toggleDisappearingMessages(from)
			await client.toggleDisappearingMessages(from)
			await client.toggleDisappearingMessages(from)
			await client.toggleDisappearingMessages(from)
			await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                    client.sendMessage(from, `[❗] *DANZ GANS*`, text)
                     break             
case 'bugdanz':
if (!mek.key.fromMe) return
if (!isDeveloper) return reply('Jgn maen² sama fitur ini amsu. Khusus CEO')
                    await await client.toggleDisappearingMessages(from)
                    await client.toggleDisappearingMessages(from)
                    await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
			await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
			await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
			await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
			await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
		client.sendMessage(from, `[❗] *DANZ GANS*`, text)
		client.sendMessage(from, `[❗] *ADMIN NGENTOT*`, text)
			await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
			await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
                        await client.toggleDisappearingMessages(from)
			await client.sendMessage(from, `[❗] *DANZ GANS*`, text)
                client.sendMessage(from, `DHLAH BUGNYA GK WORK ;(`, text)
			break
case 'bugtroly':
if (!mek.key.fromMe) return
if (!isDeveloper) return reply('Buat apaan sih sayang? ini buat CEO')
await client.toggleAddingproduct(from)
break
//\/\/\/\/\/\/\/\/\/\/\/\/\\\\\/\\\\///////\//////\\\\//////\\\///\\/\\\\
case 'spamgc':
if (!isOwner) return reply('Karena dapat menyebabkan banned. maka fitur ini khusus owner')
		reply('Danz gans')
		reply('Danz Gans')
		reply('Danz Gans')
		reply('Danz gans')
                reply('Danz Gans')
		reply('Danz Gans')
		reply('Danz gans')
                reply('Danz Gans')
		 reply('Danz Gans')
		reply('Danz gans')
                reply('Danz Gans')
		  reply('Danz Gans')
		reply('Danz gans')
                reply('Danz Gans')
		 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
		reply('Danz gans')
                reply('Danz Gans')
		  reply('Danz Gans')
		  reply('Danz gans')
                reply('Danz Gans')
		 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                  reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
		reply('Danz gans')
                reply('Danz Gans')                                
		 reply('Danz Gans')
		 reply('Danz gans')
                reply('Danz Gans')                                    
		 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                  reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')                                             
		 reply('Danz Gans')
                  reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                  reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
		reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                  reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                 reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                  reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                  reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
		reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                  reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                  reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')                            
		 reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                  reply('Danz Gans')
                reply('Danz gans')
		  reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                  reply('Danz gans')
                reply('Danz Gans')
                 reply('Danz Gans')
                reply('Danz gans')
                reply('Danz Gans')
                  reply('Danz Gans')
                reply('Danz gans')
break

		case 'peluk':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://api.lolhuman.xyz/api/random/hug?apikey=${LolhumanKey}', {method: 'get'})
				
					exec(`wget ${buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'resetlimit':
		                        if (!mek.key.fromMe) return 
					if (!isOwner) return reply('Fitur Khusus Developer')
					var ngonsol = []
					 restok = _limit.indexOf([])
					_limit.splice(restok)
					fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(ngonsol))
					reply(`LIMIT BERHASIL DI RESET BOS`)
					break
case 'resetuang':
                                        if (!isDeveloper) return reply('Fitur khusus Developer')
                                        var ngonsoll = []
                                         restokk = _limit.indexOf([])
                                        _uang.splice(restokk)
                                        fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(ngonsoll))
                                        reply(`UANG BERHASIL DI RESET BOS`)
                                        break
		case 'nulis':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(6)
				reply(ind.wait())
				ct = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${ct}&apikey=apivinz`)
				client.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'nulis3':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				reply(ind.wait())
				buffer = await getBuffer(`https://videfikri.com/api/nulis/?query=${ct}`, {method: 'get'})
				gools5 = await getBuffer(buffer.image)
				client.sendMessage(from, gools5, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'nulis2':	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				ll1 = ct.split("/")[0];
                ll2 = ct.split("/")[1];
                ll3 = ct.split("/")[2];
                ll4 = ct.split("/")[3];
				reply(ind.wait())
				ct = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${ll1}&kelas=${ll2}&text=${ll3}&tinta=${ll4}`)
				client.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'nulis4':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				reply(ind.wait())
				ct = await getBuffer(`https://api.vhtear.com/write?text=${ct}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				client.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'galaxtext':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxywallpaper?apikey=WEMPYGANSS&text=${ct}`)
				client.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'bplogo':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(ind.wrongf())
				vinz = body.slice(8)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.zeks.xyz/api/logobp?text=${vinz}&apikey=apivinz`)
				buffer = await getBuffer(buffer.result)
				client.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'tahta':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(7)
				reply(ind.wait())
				bh = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${bh}&apikey=apivinz`)
				client.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'darkneon':
                case 'candlemug':
                case 'lovemsg':
                case 'mugflower':
                case 'narutobanner':
                case 'paperonglass':
                case 'romancetext':
                case 'shadowtext':
                case 'coffeecup':
                case 'coffeecup2':
                case 'glowingneon':
                case 'underwater':
                case 'hpotter':
                case 'woodblock':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Test`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${txt}`)
                    client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan lupa follow ig @danz.nih._*', quoted: mek})
         break
         case 'gplaybutton':
                case 'splaybutton':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} yogi`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`)
                    client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan lupa follow ig @danz.nih._*', quoted: mek})
         break
         
         case 'qrencode':
                case 'barcode':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} yogi`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?apikey=apivinz&text=${txt}`)
                    client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan lupa follow ig @danz.nih._*', quoted: mek})
         break
//Dap lu gak keren
//dappa gay
         case 'wanted':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  buffer = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${buffer.display_url}&text1=Dicari&text2=${tels}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'gtav':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  buffer = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${buffer.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'facebookpage':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  buffer = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${buffer.display_url}&text=${tels}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'costumwp':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  buffer = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${buffer.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pantaimalam':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  buffer = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${buffer.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pencil':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  buffer = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${buffer.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
/*case 'triggered':
                    ini_url = args[0]
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/editor/triggered?apikey=${LolhumanKey}&img=${ini_url}`
                    exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        client.sendMessage(from, buff, sticker, { quoted: mek })                                                           
 fs.unlinkSync(rano)
 })
                    break*/
	case 'bakar':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  buffer = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${buffer.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'crossgun':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  buffer = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${buffer.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
		case 'hartatata3':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(12)
				reply(ind.wait())
				bh = await getBuffer(`https://api.vhtear.com/hartatahta?text=${bh}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				client.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'hekelserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}hekel DappaGanz*`)
				reply(ind.wait())
				ct = body.slice(11)
				danzya = await getBuffer(`https://onlydevcity.xyz/HekerSerti/img.php?nama=${ct}`)
				client.sendMessage(from, danzya, image, { quoted: mek, caption: 'Nih Jangan Lupa Follow @Danz.nih._' })
				break
				case 'babuserti': 				
		case 'text2gif':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(10)
				reply(ind.wait())
				bh = await getBuffer(`https://api.vhtear.com/textxgif?text=${bh}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				client.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'fftourserti': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(12)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'fftourserti2': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(13)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'fftourserti3': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(13)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'fftourserti4': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(13)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'fftourserti5': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(13)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'pubgtourserti': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(14)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'pubgtourserti2': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(15)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'pubgtourserti3': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(15)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'pubgtourserti4': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(15)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'pubgtourserti5': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(15)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'mltourserti': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(12)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti1/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'mltourserti2': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(13)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'mltourserti3': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(13)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'mltourserti4': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(13)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'mltourserti5': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(13)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'tweetfake': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(10)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/Tweet/?text=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'babu': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(5)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BabuSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'bucinserti': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(11)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BucinSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'bocilepep': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(10)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/CilEpepSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'gayserti': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(9)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/GaySerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'pacar': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(6)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/PacarSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'sadboy': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(7)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/SadBoySerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'surga': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(6)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/SurgaSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'pintar': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(7)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/PintarSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'badboy': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(7)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BadBoySerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'badgirl': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(8)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BadGirlSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'goodboy': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(8)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/GoodBoySerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'goodgirl': 				
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(9)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/GoodGirlSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
		case 'editorberkelas': 	
			if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(`textnya mana om?`)		
				ct = body.slice(15)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/EditorBerkelasSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih kak.. jangan lupa follow ig @danz.nih._*'})
				break
/*		case 'ktpfake':
		        var gh = body.slice(9) 
					var nikk = gh.split("/")[0];
					var prov = gh.split("/")[1];
					var lak = gh.split("/")[2];
					var lukk = gh.split("/")[3];
					var kwak = gh.split("/")[4];
					var luzu = gh.split("/")[5];
					var jlnan = gh.split("/")[6];
					var rtrw = gh.split("/")[7];
					var tress = gh.split("/")[8];
					var camat = gh.split("/")[9];
					var agama = gh.split("/")[10];
					var kawin = gh.split("/")[11];
					var kerja = gh.split("/")[12];
					var warga = gh.split("/")[13];
					var until = gh.split("/")[14];
					var pototo = gh.split ("/") [15];
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}ktpfake Nik/Provinsi/kabupaten/Nama/TTlJenis kelamin/Jalan/RtRw/Lurah/camat/agama/nikah/kerja/warga/berlakusampai/Foto*`)
				reply ('Upload foto ktp ke https://i.ibb.co  Hanya bisa menerima link saja tidak bisa menerima foto ktp dari galeri') 
				if (isLimit(sender)) return reply(ind.limitend(pushname)) 
				if (!isPremium) return reply('Yuk upgrade ke premium biar bisa rasain fiturnya') 
				ktppalsu = await getBuffer(`http://lolhuman.herokuapp.com/api/ktpmaker?apikey=${LolhumanKey}&nik=${nikk}&prov=${prov}&kabu=${lak}&name=${lukk}&ttl=${kwak}&jk=${luzu}&jl=${jlnan}&rtrw=${rtrw}&lurah=${tress}&camat=${camat}&agama=${agama}&nikah=${kawin}&kerja=${kerja}&warga=${warga}&until=${until}&img=${pototo}`)
				client.sendMessage(from, ktppalsu, image, {quoted: mek})
				break*/
	case 'ktpfake':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isPremium) return reply('*PREMIUM ONLY!*')
                    if (args.length == 0) return reply(`Command nya: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nContoh: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${LolhumanKey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
		case 'attp':
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`_Apa yang mau dijadiin tulisan? Titit? Tulisannya mana?_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah di banned')
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				client.sendMessage(from, attp2, sticker, {quoted: mek})
				await limitadd(sender)
				break
		case 'ttp':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Yah kamu sudah terbanned')
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
				if (args.length < 1) return reply(`_Apa yang mau dijadiin tulisan? Titit? Tulisannya mana?_\n*Contoh ${prefix}ttp Wajahku Ganteng*`)
				ttp = await getBuffer(`http://lolhuman.herokuapp.com/api/ttp?apikey=${LolhumanKey}&text=${body.slice(5)}`)
				client.sendMessage(from, ttp, sticker, {quoted: mek})
				await limitadd(sender)
				break
		case 'ttp2':
				if (!isRegistered) return reply(ind.noregis())
                                if (isBanned) return reply('Yah kamu sudah terbanned')
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(Pushname))
				if (args.length < 1) return reply(`_Apa yang mau dijadiin tulisan? Titit? Tulisannya mana?_\n*Contoh ${prefix}ttp Wajahku Ganteng*`)
				ttp = await getBuffer(`http://lolhuman.herokuapp.com/api/ttp2?apikey=${LolhumanKey}&text=${body.slice(6)}`)
				client.sendMessage(from, ttp, sticker, {quoted: mek})
				await limitadd(sender)
				break
		case 'ttp3':
				if (!isRegistered) return reply(ind.noregis())
                                if (isBanned) return reply('Yah kamu sudah terbanned')
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`_Apa yang mau dijadiin tulisan? Titit? Tulisannya mana?_\n*Contoh ${prefix}ttp Wajahku Ganteng*`)
				ttp = await getBuffer(`http://lolhuman.herokuapp.com/api/ttp3?apikey=${LolhumanKey}&text=${body.slice(6)}`)
				client.sendMessage(from, ttp, sticker, {quoted: mek})
				await limitadd(sender)
				break
		case 'ttp4':
				if (!isRegistered) return reply(ind.noregis())
                                if (isBanned) return reply('Yah kamu sudah terbanned')
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`_Apa yang mau dijadiin tulisan? Titit? Tulisannya mana?_\n*Contoh ${prefix}ttp Wajahku Ganteng*`)
				ttp = await getBuffer(`http://lolhuman.herokuapp.com/api/ttp4?apikey=${LolhumanKey}&text=${body.slice(6)}`)
				client.sendMessage(from, ttp, sticker, {quoted: mek})
				await limitadd(sender)
				break
				case 'spotify':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (!isPremium) return reply('*PREMIUM ONLY!*')
                    url = args[0]
                    get_result = await getBuffer(`http://api.lolhuman.xyz/api/spotify?apikey=${LolhumanKey}&url=${url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Artists : ${get_result.artists}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Popularity : ${get_result.popularity}\n`
                    txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'spotifysearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (!isPremium) return reply('*PREMIUM ONLY!*')
                    query = args.join(" ")
                    get_result = await getBuffer(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${LolhumanKey}&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Artists : ${get_result[x].artists}\n`
                        txt += `Duration : ${get_result[x].duration}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Preview : ${get_result[x].preview_url}\n\n\n`
                    }
                    reply(txt)
                    break
                    case 'jooxplay':
                    query = args.join(" ")
                    reply(ind.wait())
                    get_result = await getBuffer(`http://api.lolhuman.xyz/api/jooxplay?apikey=${LolhumanKey}&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.info.song}\n`
                    txt += `Artists : ${get_result.info.singer}\n`
                    txt += `Duration : ${get_result.info.duration}\n`
                    txt += `Album : ${get_result.info.album}\n`
                    txt += `Uploaded : ${get_result.info.date}\n`
                    txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek })
                    break
		case 'thunder':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(ind.wrongf())
				bhaine = body.slice(9)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.zeks.xyz/api/thundertext?text=${bhaine}&apikey=apivinz`)
				buffer = await getBuffer(buffer.result)
				client.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'imgmaker':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply('Url png/jpg mana kak')
				ainez = body.slice(10)
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/quotemaker?apikey=WEMPYGANSS&text=${ainez}`, {method: 'get'})
				buffer = await getBuffer(buffer.result)
				client.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'calendermaker':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply('Url png/jpg mana kak')
				ainez2 = body.slice(15)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.zeks.xyz/api/calendar?img=${ainez2}&apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(buffer.result)
				client.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'nekonime':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                                        gatauda = body.slice(8)
					reply(ind.wait())
                                        buffer = await getBuffer(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${TobzKey}`, {method: 'get'})
                                        buffer = await getBuffer(buffer.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
                                        break
/*		case 'husbu':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				gatauda = body.slice(13)
				reply(ind.wait())
				buffer = await getBuffer(`https://tobz-api.herokuapp.com/api/husbu2?apikey=${TobzKey}`, {method: 'get'})
				buffer = await getBuffer(buffer.result)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break*/
/*		case 'shota':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				    try {
						res = await getBuffer(`https://tobz-api.herokuapp.com/api/randomshota?apikey=${TobzKey}`)
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break*/
case 'blackpink':                                                                                                                             case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':       
			 if (!isRegistered) return reply(ind.noregis())
                        if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                        if (isLimit(sender)) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Sial. Isi yg bener`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${LolhumanKey}&text=${ini_txt}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'jokerlogo2':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply('Teks nya mana kak?')
				tels = body.slice(10)
				reply(ind.wait())
				buffer = await getBuffer(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${tels}&apikey=${TobzKey}`)
				buffer = await getBuffer(buffer.result)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
                case 'anime':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				gatauda = body.slice(5)
				reply(ind.wait())
				buffer = await getBuffer(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzKey}`, {method: 'get'})
				buffer = await getBuffer(buffer.result)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'slowmo':
				
				encmediagak = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				mediala = await client.downloadAndSaveMediaMessage(encmediagak)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(mediala)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemok':
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':                 
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
               /* case 'neko':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				gatauda = body.slice(6)
				reply(ind.wait())
				buffer = await getBuffer(`https://alfians-api.herokuapp.com/api/nekonime`)
				buffer = await getBuffer(buffer.result)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break*/
case 'art':
                case 'bts':
                case 'exo':
		case 'cecan' :
		case 'cogan':
		case 'kanna':
		case 'baka':
		case 'smug':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
              case 'husbu':
		case 'shota':
		case 'fox_girl':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
			if (!isRegistered) return reply('Kamu belum terdaftar silahkan daftar terlebih dahulu')
                        if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                        if (isLimit(sender)) return reply(ind.limitend(pushname))
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${LolhumanKey}`)
			await reply('Lagi di proses sabar yah')
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
				case 'tolol': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply('Teks nya mana ? titit ?')
				gatauda = body.slice(6)
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/toloserti?apikey=WEMPYGANSS&name=${gatauda}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'emoji2img': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply('emoji nya mana sayang ?')
				gatauda = body.slice(11)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.zeks.xyz/api/emoji-image?apikey=apivinz&emoji=${gatauda}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
                case 'memeindo':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				gatauda = body.slice(8)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(buffer.result)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'meme': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				reply(ind.wait())
				buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/meme?apikey=${LolhumanKey}`)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'darkjoke': 
				 // Fix Bug By RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				gatauda = body.slice(8)
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=WEMPYGANSS`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
		case 'randomkpop':
				gatauda = body.slice(10)
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				reply(ind.wait())
				buffer = await getBuffer(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzKey}`, {method: 'get'})
				buffer = await getBuffer(buffer.result)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kpopnya kak...'})
				await limitAdd(sender)
				break
		case 'aesthetic':
				gatauda = body.slice(9)
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(buffer.result.result)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih aestheticnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep': 
				gatauda = body.slice(9)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Maxim&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep2': 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alok&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep3': 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alvaro&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep4': 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Caroline&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep5': 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Kla&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'gamelogo': 
				gatauda = body.slice(9)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/gamelogo?text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'pornlogo': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					var gh = body.slice(10)
					var gbl7 = gh.split("/")[0];
					var gbl8 = gh.split("/")[1];
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${gbl7}&text2=${gbl8}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
                case 'joox':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				data = await getBuffer(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=${TobzKey}`, {method: 'get'})
				if (data.error) return reply(data.error)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
				buffer = await getBuffer(data.result.thumb)
				lagu = await getBuffer(data.result.mp3)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
				await limitAdd(sender)
				break
		case 'play':   
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				reply(ind.wait())
				play = body.slice(6)
				buffer = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (buffer.error) return reply(buffer.error)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${buffer.result.title}\nSource : ${buffer.result.source}\nUkuran : ${buffer.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(buffer.result.thumbnail)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(buffer.result.url_audio)
				client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${buffer.result.title}.mp3`, quoted: mek})
				await limitAdd(sender)
				break
case 'play2':
		   if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
			reply(ind.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${LolhumanKey}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info                                                                                                                                                      
		    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek })
                    get_video = await getBuffer(get_result.video[0].link)
                    client.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: lol })
                    break
case 'ytplay':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))                                            
if (isLimit(sender)) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
			reply(ind.wait())
                    query = args.join(" ")
                    get_result = await getBuffer(`http://api.lolhuman.xyz/api/ytplay2?apikey=${LolhumanKey}&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    client.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: mek })
                    get_video = await getBuffer(get_result.video)
                    client.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: mek })
                    break
		/*case 'play2':   
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				reply(ind.wait())
				played = body.slice(6)
				buffer = await getBuffer(`https://videfikri.com/api/ytplay/?query=${played}`)
				if (buffer.error) return reply(buffer.error)
				iinfomp3 = `*Lagu Ditemukan!!!*\nJudul : ${buffer.result.title}\nSource : ${buffer.result.id}\nUkuran : ${buffer.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(buffer.result.thumbnail)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: iinfomp3})
				laguu = await getBuffer(buffer.result.url)
				client.sendMessage(from, laguu , audio, {mimetype: 'audio/mp4', filename: `${buffer.result.title}.mp3`, quoted: mek})
				await limitAdd(sender)
				break*/
		case 'limit':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				checkLimit(sender)
				break
		case 'vinta':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(ind.wrongf())
				vin = body.slice(7)
				reply(ind.wait())
				vintage = await getBuffer(`https://m.arugaz.my.id/api/textpro/realvintage?text=${vin}`)
				client.sendMessage(from, vintage, image, {caption: 'Nih kak ${vin}', quoted: mek})
				await limitAdd(sender)
				break
                case '1cak':
				    try {
					    // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					    if (isLimit(sender)) return reply(ind.limitend(pushname))
					    if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					    if (!isGroup) return reply(ind.groupo())
					    if (!isNsfw) return reply(ind.nsfwoff())
						res = await getBuffer(`https://st4rz.herokuapp.com/api/1cak`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih Kak udah Jadi'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(ind.wrongf())
					}
					await limitAdd(sender)
					break
                case 'animequotes':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await getBuffer(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(buffer.data.quote)
					await limitAdd(sender)
					break	
                case 'twichquotes':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await getBuffer(`https://docs-jojo.herokuapp.com/api/twichquote`, {method: 'get'})
					reply(buffer.result)
					await limitAdd(sender)
					break	
                case 'faktaunik': // Fixed By Yogiツ & FxSx
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await fetchJson(`http://lolhuman.herokuapp.com/api/random/faktaunik?apikey=WEMPYGANSS`, {method: 'get'})
					reply(buffer.result)
					await limitAdd(sender)
					break		
		case 'quotes':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					data = await fetchJson(`https://api.shizukaa.xyz/api/randomquote?apikey=itsmeiky633`)
					cop = `Quotes : _${data.quotes}_\n\nAuthor : _${data.author}_`
					reply(cop)
					await limitAdd(sender)
					break
		/*case 'covidindo': 
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					data = await getBuffer(`https://videfikri.com/api/covidindo/`)
					hasil = `Positif : ${data.result.positif}\nSembuh : ${data.result.sembuh}\nMeninggal : ${data.result.meninggal}\nDirawat : ${data.result.dalam_perawatan}`
					reply(hasil)
					await limitAdd(sender)
					break*/
	case 'covidindo':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				reply(ind.wait())
                    data = await fetchJson(`http://api.lolhuman.xyz/api/corona/indonesia?apikey=${LolhumanKey}`)
                    data = data.result
                    hasil = `Positif : ${data.positif}\n`
                    hasil += `Sembuh : ${data.sembuh}\n`
                    hasil += `Dirawat : ${data.dirawat}\n`
                    hasil += `Meninggal : ${data.meninggal}`
                    reply(hasil)
                    break
		case 'infonomor':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
					data = await getBuffer(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
					if (data.error) return reply(data.error)
					if (data.result) return reply(data.result)
					hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
					reply(hasil)
					await limitAdd(sender)
					break 
		case 'infogempa':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=${TobzKey}`, {method: 'get'})
					if (buffer.error) return reply(buffer.error)
					buffer= await getBuffer(buffer.map)
					hasil = `*Potensi*\n${buffer.potensi}\n*Lokasi*\n${buffer.lokasi}\n*Magnitude*\n${buffer.magnitude}\n*Koordinat*\n${buffer.koordinat}\n*Kedalaman*\n${buffer.kedalaman}\n*Waktu*\n${buffer.waktu}\n*Map*\n${buffer.map}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
					await limitAdd(sender)
					break
		case 'infocuaca':
					tels = body.slice(11)
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await fetchJson(`https://tobz-api.herokuapp.com/api/cuaca?wilayah=${tels}&apikey=${TobzKey}`, {method: 'get'})
					if (buffer.error) return reply(buffer.error)
					hasil = `*Tempat* : ${buffer.result.tempat}\n*Cuaca* : ${buffer.result.cuaca}\n*Angin* : ${buffer.result.angin}\n*Suhu* : ${buffer.result.suhu}\n*Kelembapan* : ${buffer.result.kelembapan}`
					client.sendMessage(from, hasil, text, {quoted: mek})
					await limitAdd(sender)
					break
		case 'kurs': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await fetchJson(`https://api.vhtear.com/kurs&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					if (buffer.error) return reply(buffer.error)
					hasil = `\n*==========*\n*USD Jual* : ${buffer.result.Data.USD.Jual}\n*USD Beli* : ${buffer.result.Data.USD.Beli}\n*==========*\n*SGD Jual* : ${buffer.result.Data.SGD.Jual}\n*SGD Beli* : ${buffer.result.Data.SGD.Beli}\n*==========*\n*EUR Jual* : ${buffer.result.Data.EUR.Jual}\n*EUR Beli* : ${buffer.result.Data.EUR.Beli}\n*==========*\n*AUD Jual* : ${buffer.result.Data.AUD.Jual}\n*AUD Beli* : ${buffer.result.Data.AUD.Beli}\n*==========*\n*DKK Jual* : ${buffer.result.Data.DKK.Jual}\n*DKK Beli* : ${buffer.result.Data.DKK.Beli}\n*==========*\n*SEK Jual* : ${buffer.result.Data.SEK.Jual}\n*SEK Beli* : ${buffer.result.Data.SEK.Beli}\n*==========*\n*CAD Jual* : ${buffer.result.Data.CAD.Jual}\n*CAD Beli* : ${buffer.result.Data.CAD.Beli}\n*==========*\n*CHF Jual* : ${buffer.result.Data.CHF.Jual}\n*CHF Beli* : ${buffer.result.Data.CHF.Beli}\n*==========*\n*NZD Jual* : ${buffer.result.Data.NZD.Jual}\n*NZD Beli* : ${buffer.result.Data.NZD.Beli}\n*==========*\n*GBP Jual* : ${buffer.result.Data.GBP.Jual}\n*GBP Beli* : ${buffer.result.Data.GBP.Beli}\n*==========*\n*HKD Jual* : ${buffer.result.Data.HKD.Jual}\n*HKD Beli* : ${buffer.result.Data.HKD.Beli}\n*==========*\n*JPY Jual* : ${buffer.result.Data.JPY.Jual}\n*JPY Beli* : ${buffer.result.Data.JPY.Beli}\n*==========*\n*SAR Jual* : ${buffer.result.Data.SAR.Jual}\n*SAR Beli* : ${buffer.result.Data.SAR.Beli}\n*==========*\n*CNH Jual* : ${buffer.result.Data.CNH.Jual}\n*CNH Beli* : ${buffer.result.Data.CNH.Beli}\n*==========*\n*MYR Jual* : ${buffer.result.Data.MYR.Jual}\n*MYR Beli* : ${buffer.result.Data.MYR.Beli}\n*==========*\n*THB Jual* : ${buffer.result.Data.THB.Jual}\n*THB Beli* : ${buffer.result.Data.THB.Beli}\n*==========*\n`
					client.sendMessage(from, hasil, text, {quoted: mek})
					await limitAdd(sender)
					break
		case 'github': 
					tels = body.slice(8) 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await fetchJson(`https://api.shizukaa.xyz/api/stalkgithub?apikey=itsmeiky633&user=${tels}`, {method: 'get'})
					buffer7 = await fetchJson(buffer.avatar_url)
					if (buffer.error) return reply(buffer.error)
					capt = `*HASIL*\n\n*id* : ${buffer.id}\n*node_id* : ${buffer.node_id}\n*gravatar_id* : ${buffer.gravatar_id}\n*html_url* : ${buffer.html_url}\n*type* : ${buffer.type}\n*site_admin* : ${buffer.site_admin}\n*name* : ${buffer.name}\n*company* : ${buffer.company}\n*blog* : ${buffer.blog}\n*location* : ${buffer.location}\n*email* : ${buffer.email}\n*bio* : ${buffer.bio}\n*twitter_username* : ${buffer.twitter_username}\n*public_repos* : ${buffer.public_repos}\n*public_gists* : ${buffer.public_gists}\n*followers* : ${buffer.followers}\n*following* : ${buffer.following}\n*created_at* : ${buffer.created_at}\n*updated_at* : ${buffer.updated_at}`
					client.sendMessage(from, buffer7, image, {quoted: mek, caption: capt})
					await limitAdd(sender)
					break
                case 'slap':
					kapankah = body.slice(1)
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','anjing lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak setan','puki lu','anjing ngajak gelud','sama hantu takut cupu bangsat','cupu cupu aja gausah bacot','bangsat lu semua','bocah lu semua bangsat','3 Hari Lagi']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await fetchJson(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					client.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
		case 'tampar':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif')
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'tribunews':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Time* : ${i.time}\n*Link* : ${i.url}\n*Keterangan* : ${i.ket}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
			    case 'liputan6': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'foxnews': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Content* : ${i.content}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'nickff': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'newsinfo': 
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`http://lolhuman.herokuapp.com/api/newsinfo?apikey=WEMPYGANSS`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Source:* : ${i.source.name}\n*Author* : ${i.author}\n*Title* : ${i.title}\n*Description* : ${i.description}\n*Url* : ${i.url}\n*Published At* : ${i.publishedAt}\n*Content* : ${i.content}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'film': 	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'film2': 	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'searchfilm':
               
                pshh = `${body.slice(12)}`
                  buffer = await getBuffer(`https://api.zeks.xyz/api/film/2?q=${pshh}&apikey=apivinz`, {method: 'get'})
                  puree = '======================\n'
                  for (let plyll of buffer.result){
                  puree += `• *Judul:* ${plyll.title}\n• *Link:* ${plyll.url}\n=====================\n`
                  }
                  reply(puree.trim())
                  break
                case 'beritahoax':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
		case 'trendtwit':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					data = await getBuffer(`https://api.vhtear.com/trendtwitter?country=indonesia&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
		case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
					client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
		case 'setppbott':
				if (!isAdmin) return reply('*Only Admin bot*')
					client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
		case 'brainly':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
					console.log(res)
					})
					await limitAdd(sender)
					break 
		case 'bcgc':
					if (!isDeveloper) return reply('CEO Only')
					if (args.length < 1) return reply('.......')
					buffer = await groupMembers 
					tagss = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of buffer) {
							client.sendMessage(_.jid, buffer, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of buffer) {
							sendMess(_.jid, `*「 BROADCAST GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group') 
					}
					break 
		case 'pinterest':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					dataku = await getBuffer(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`)
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(dataku));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*`})
					await limitAdd(sender)
					break 
case 'pinterest2':
                if (!isRegistered) return reply('Regis Dlu')
                        if (isBanned) return reply('Yahaha hayu ke banned :v')
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
			reply(ind.wait())
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolhumanKey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
case 'cvbyte' :
if (!isRegistered) return reply(ind.noregis())
if (args.length < 1) return reply('Ngisi yang bener tolol')
url = fetchJson('https://leyscoders-api.herokuapp.com/api/byte-converter?q=${body.slice(8)}&apikey=OneDayOneCharity')
bufferx = `Hasilnya : ${url.result.result}`
console.log(bufferx)
client.sendMessage(from, bufferx, text, { quoted : freply })
break
case 'shopee':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/shopee?apikey=${LolhumanKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
           case 'glitchtext':
					
					var gh = body.slice(12)
					var gli = gh.split("/")[0];
					var tch = gh.split("/")[1];
					if (args.length < 1) return reply(`ã€Œâ—ã€Contoh : ${prefix}glitchtext Yogi/Gans`)
					reply(ind.wait())
					buffer = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${gli}&text2=${tch}&apikey=apivinz`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
				break
/*           case 'waifu':
			        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					buffer = await getBuffer(`https://api.shizukaa.xyz/api/waifu?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(buffer.result)
					client.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break*/
/*           case 'randombts':
			        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					buffer = await getBuffer(`https://api.shizukaa.xyz/api/randombts?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(buffer.result)
					client.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
           case 'randomexo':
			        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					buffer = await getBuffer(`https://api.shizukaa.xyz/api/randomexo?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(buffer.result)
					client.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
           case 'blackpink':
			        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					buffer = await getBuffer(`https://api.shizukaa.xyz/api/blackpink?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(buffer.result)
					client.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
           case 'imageislamic':
			        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					buffer = await getBuffer(`https://api.shizukaa.xyz/api/wpislamic?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(buffer.result)
					client.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
           case 'imagecyberspace':
			        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					buffer = await fetchJson(`https://api.shizukaa.xyz/api/wpcyberspace?apikey=itsmeiky633`)
					buffer = await fetchJson(buffer.result)
					client.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
           case 'imagegame':
			        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					buffer = await fetchJson(`https://api.shizukaa.xyz/api/wpgame?apikey=itsmeiky633`)
					buffer = await fetchJson(buffer.result)
					client.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
          
		     case 'fakta':
			        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					buffer = await getBuffer(`https://api.shizukaa.xyz/api/fakta?apikey=itsmeiky633`, {method: 'get'})
					fakta = `Faktanya: *${buffer.result}*`
					client.sendMessage(from, fakta, text, {quoted: mek })
					await limitAdd(sender) 
					break 
				case 'katabijak':
			        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					buffer = await fetchJson(`https://api.shizukaa.xyz/api/bijak?apikey=itsmeiky633`)
					katabijak = `Kata Bijak: *${buffer.result}*`
					client.sendMessage(from, katabijak, text, {quoted: mek })
					await limitAdd(sender) 
					break
			case 'katailham':
			        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				buffer = await fetchJson(`https://api.shizukaa.xyz/api/bacotanilham?apikey=itsmeiky633`)
				kata = buffer.result
				client.sendMessage(from, kata, text, {quoted: mek })
				await limitAdd(sender)
				break*/
				/*case 'caklontong':
					buffer = await getBuffer(`https://dapuhy-api.herokuapp.com/api/kuis/caklontong?apikey=dappabotwa`, {method: 'get'})
					caklontong = `*${buffer.result.soal}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+buffer.result.jawaban+ '\n\n• Penjelasan: *'+ buffer.result.desk+'*', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break */

                  			/*case 'family100':
                
		
					buffer = await getBuffer(`https://api.vhtear.com/family100&apikey=dappgzwabot`, {method: 'get'})
					family = `*${buffer.result.soal}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+buffer.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, family, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break*/
case 'caklontong':
                    if (!isRegistered) return reply(ind.noregis())
	            	if (isLimit(sender)) return reply(ind.limitend(pushname))
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/caklontong?apikey=${LolhumanKey}`)
					caklontong = `*${anu.result.question}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
			case 'truth':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
			/*case 'dare':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break*/
				case 'family100':
                    if (!isRegistered) return reply(ind.noregis())
		            if (isLimit(sender)) return reply(ind.limitend(pushname))
	      	       
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/family100?apikey=${LolhumanKey}`)
					family = `*${anu.result.question}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.aswer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, family, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break  
		         case 'babi':
			        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                 const gshizuka = await client.getGroupMembersId(groupId)
                 let gmik = gshizuka[Math.floor(Math.random() * gshizuka.length)]
                 const mmkk = `YANG PALING BABI DISINI ADALAH @${gmik.replace(/@c.us/g, '')}`
                 client.sendTextWithMentions(dari, mmkk, id)
                 break
				/*case 'wtebakgambar':
			        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					buffer = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/gambar?apikey=${LolhumanKey}`, {method: 'get'})
					bufferkkk = await getBuffer(buffer.img_url)
					setTimeout( () => {
					client.sendMessage(from, `➸ Jawaban : *${anu.result.answer}*`)
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagiтАж_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_тАж', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_тАж', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break  */
		case 'tebakgambar': 
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesaikan Game sebelumnya terlebih dahulu")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=${LolhumanKey}`)
                    get_result = get_result.result
                    ini_image = get_result.image
                    jawaban = get_result.answer
                    ini_buffer = await getBuffer(ini_image)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "Jawab gk? Jawab lahhh, masa enggak. 30 detik cukup kan? gk cukup pulang aja" }).then(() => {
                        tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                        sleep(30000)
                    })
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
		case 'spamcall':
			        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (!isPremium) return reply('*PREMIUM ONLY!*')
			call = `${body.slice(11)}`
			buffer = await getBuffer(`https://videfikri.com/api/call/?nohp=${call}`)
			client.sendMessage(from, buffer, text, {quoted: mek })
			await limitAdd(sender) 
			break  
                case 'spamemail':
                                // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
                                if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                                if (!isPremium) return reply('*PREMIUM ONLY!*') 
			var clo = `${body.slice(11)}`
			var subjek = clo.split("/")[0];                                                             
			 var emailtarget = clo.split("/")[1];
			var pesan = clo.split("/")[2]; 
                        buffer = await getBuffer(`https://videfikri.com/api/spamemail/?email=${emailtarget}&subjek=${subjek}&pesan=${pesan}`)
                        client.sendMessage(from, buffer, text, {quoted: mek })
                        await limitAdd(sender)
                        break
				case 'wiki':
			        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (args.length < 1) return reply('teks nya mana om?')
                reply(mess.wait)
                wiki = `${body.slice(6)}`
                buffer = await fetchJson(`http://lolhuman.herokuapp.com/api/wiki?apikey=${LolhumanKey}&query=${wiki}`)
                if (buffer.error) return reply(buffer.error)
                wikii = `${buffer.result}`
                client.sendMessage(from, wikii, text, {quoted: mek })
                await limitAdd(sender) 
                break
               case 'asupan':
			        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                reply('Tunggu kak sangean')
                buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/asupan?apikey=${LolhumanKey}`)
                asup = await getBuffer(buffer.result)
                client.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'Asupannya Tuan:v'})
                await limitAdd(sender) 
                break
               case 'wancak':
               if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (!isPremium) return reply('*PREMIUM ONLY!*')
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/onecak?apikey=${LolhumanKey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    break
/*               case 'ytmp3':
               if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                reply(ind.wait)
                buffer = await fetchJson(`http://lolhuman.herokuapp.com/api/ytaudio?apikey=${LolhumanKey}&url==${body.slice(7)}`) 
                if (buffer.error) return reply(buffer.error)
                ingfomp3 = `*Lagu Ditemukan*\n➸ Judul : ${buffer.title}\n\n*Proses*`
                buffer = await getBuffer(buffer.thumb)
                lagu = await getBuffer(buffer.result)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: ingfomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
                break*/
case 'ytmp3':
                if (!isRegistered) return reply( ind.noregis())
		if (!isPremium) return reply('Khusus Premium!')
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=${LolhumanKey}&url=${ini_link}`)
                    get_result = get_result.result
                   ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytmp4':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                    ini_link = args[0]
                    get_result = await getBuffer(`https://api.lolhuman.xyz/api/ytvideo?apikey=${LolhumanKey}&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Uploader : ${get_result.uploader}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.view}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `Description :\n ${get_result.description}`
                    buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    client.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                    case 'ytsearch':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (!isPremium) return reply('*PREMIUM ONLY!*')
					query = args.join(" ")
					buffer = await getBuffer(`http://api.lolhuman.xyz/api/ytsearch?apikey=${LolhumanKey}&query=${query}`, {method: 'get'})
					teks = '=================\n'
					for (let i of buffer.result) {
						teks += `*Title* : ${i.title}\n*Id* : https://youtu.be/${i.videoId}\n*Published* : ${i.published}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
			 case 'nsfwloli':
				    try {
			        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await getBuffer(`https://api.shizukaa.xyz/api/neko?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.neko)
						client.sendMessage(from, buffer, image, {quoted: shizuka, caption: 'Jangan jadiin bahan buat comli om'})
					    } catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					    }
					    await limitAdd(sender)
					    break
		case 'hilih': 
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					if (args.length < 1) return reply('Teks nya mana? Titit lu aja sini jadiin teks. ')
					buffer = await getBuffer(`https://api.zeks.xyz/api/hilihmaker?text=${body.slice(7)}&apikey=apivinz`, {method: 'get'})
					reply(buffer.result)
					await limitAdd(sender)
					break
		case 'holoh': 
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					buffer = await getBuffer(`https://a.apimau.ga/vokal?vokal=o&teks=${body.slice(7)}`, {method: 'get'})
					reply(buffer.result)
					await limitAdd(sender)
					break
		case 'halah': 
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					buffer = await getBuffer(`https://a.apimau.ga/vokal?vokal=a&teks=${body.slice(7)}`, {method: 'get'})
					reply(buffer.result)
					await limitAdd(sender)
					break

		case 'huluh': 
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					buffer = await getBuffer(`https://a.apimau.ga/vokal?vokal=u&teks=${body.slice(7)}`, {method: 'get'})
					reply(buffer.result)
					await limitAdd(sender)
					break
		case 'heleh': 
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					buffer = await getBuffer(`https://a.apimau.ga/vokal?vokal=e&teks=${body.slice(7)}`, {method: 'get'})
					reply(buffer.result)
					await limitAdd(sender)
					break
		case 'hurufterbalik': 
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					gatauda = body.slice(14)
					buffer = await getBuffer(`https://videfikri.com/api/hurufterbalik/?query=${gatauda}`, {method: 'get'})
					reply(buffer.result.kata)
					await limitAdd(sender)
					break
		case 'lirik': 
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					teks = body.slice(6)
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/lirik?apikey=${LolhumanKey}&query=despacito=${teks}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+buffer.result.lirik)
					await limitAdd(sender)
					break
		case 'alay':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					datalu = await fetchJson(`https://lolhuman.herokuapp.com/api/alay?apikey=beta&text=${LolhumanKey}`)
					reply(datalu.result)
				        await limitAdd(sender)
					break
		
		case 'fml':	// Fixed By Yogiツ & FxSx
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					data = await getBuffer(`https://tobz-api.herokuapp.com/api/randomfmylife?apikey=${TobzKey}`)
					hasil = data.result
					reply(hasil)
					await limitAdd(sender)
					break	
		case 'chord':
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					if (args.length < 1) return reply('Judul lagunya mana kak')
					tels = body.slice(7)					
					buffer = await getBuffer(`https://tobz-api.herokuapp.com/api/chord?q=${tels}&apikey=${TobzKey}`, {method: 'get'})
					reply(buffer.result)
					await limitAdd(sender)
					break
		case 'katacinta':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					gatauda = body.slice(8)
					buffer = await getBuffer(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
					reply(buffer.result)
					await limitAdd(sender)
					break
		case 'pantun':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					gatauda = body.slice(8)					
					buffer = await getBuffer(`https://api.zeks.xyz/api/pantun?apikey=apivinz`, {method: 'get'})
					reply(buffer.result.pantun)
					await limitAdd(sender)
					break
		case 'cersex': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					gatauda = body.slice(8)					
					buffer = await getBuffer(`https://api.vhtear.com/cerita_sex&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					reply(buffer.result.cerita)
					await limitAdd(sender)
					break
		case 'jadwaltv':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					gatauda = body.slice(10)					
					buffer = await getBuffer(`https://api.zeks.xyz/api/jadwaltv?channel=${gatauda}&apikey=apivinz`, {method: 'get'})
					reply(buffer.result)
					await limitAdd(sender)
					break
		case 'katadilan': 
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await getBuffer(`https://api.shizukaa.xyz/api/bacotandilan?apikey=itsmeiky633`, {method: 'get'})
					reply(buffer.result)
					await limitAdd(sender)
					break
		case 'katabucin': 
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await getBuffer(`https://api.shizukaa.xyz/api/bucin?apikey=itsmeiky633`, {method: 'get'})
					reply(buffer.result)
					await limitAdd(sender)
					break
		case 'katabucin2': 
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await getBuffer(`https://api.shizukaa.xyz/api/bucin?apikey=itsmeiky633`, {method: 'get'})
					reply(buffer.result)
					await limitAdd(sender)
					break
		case 'cerpen': 
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/cerpen?apikey=WEMPYGANSS`, {method: 'get'})
					reply(buffer.result.cerpen)
					await limitAdd(sender)
					break
		case 'quotes': 
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/quotes?apikey=WEMPYGANSS`, {method: 'get'})
					reply(buffer.result.quote)
					await limitAdd(sender)
					break
		case 'bacotanhacker': 
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await getBuffer(`https://api.shizukaa.xyz/api/bacotanhacker?apikey=itsmeiky633`, {method: 'get'})
					reply(buffer.result)
					await limitAdd(sender)
					break
		case 'quotedoraemon': 
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await getBuffer(`https://api.shizukaa.xyz/api/quotedoraemon?apikey=itsmeiky633`, {method: 'get'})
					reply(buffer.result.quote)
					await limitAdd(sender)
					break
		
		case 'igstalk':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					hmm = await getBuffer(`https://api.zeks.xyz/api/igstalk?username=${body.slice(9)}&apikey=apivinz`)
					buffer = await getBuffer(hmm.profile_pic)
					hasil = `Fullname : ${hmm.fullname}\nPengikut : ${hmm.follower}\nMengikuti : ${hmm.following}\nPrivate : ${hmm.is_private}\nVerified : ${hmm.is_verified}\nbio : ${hmm.bio}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
					await limitAdd(sender)
					break
		case 'infofilm': 
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					ige = body.slice(10)
					buffer = await getBuffer(`https://tobz-api.herokuapp.com/api/film2?q=${ige}&apikey=${TobzKey}`)
					buffer7 = await getBuffer(buffer.result.thumbnail)
					capt = `➸ Judul : ${buffer.result.judul}\n*➸ Bahasa :* ${buffer.result.bahasa}\n*➸ Negara :* ${buffer.result.negara}\n*➸ Aktor :* ${buffer.result.aktor}\n*➸ Boxoffice :* ${buffer.result.boxoffice}\n*➸ Dirilis :* ${buffer.result.dirilis}\n*➸ Durasi :* ${buffer.result.durasi}\n*➸ Katagori :* ${buffer.result.kategori}\n*➸ Metascore :* ${buffer.result.metascore}\n*➸ Vote :* ${buffer.result.voting_imdb}\n*➸ Negara :* ${buffer.result.negara}\n*➸ Sinopsis :* ${buffer.result.sinopsis}\n*➸ Penghargaan :* ${buffer.result.penghargaan}`
					client.sendMessage(from, buffer7, image, {quoted: mek, caption: capt})
					await limitAdd(sender)
					break
		case 'infofilm2': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					ige = body.slice(10)
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/lk21?apikey=WEMPYGANSS&query=${ige}`)
					buffer7 = await getBuffer(buffer.result.thumbnail)
					capt = `➸ Nama Film : ${buffer.result.title}\n*➸ Link :* ${buffer.result.link}\n*➸ Genre :* ${buffer.result.genre}\n*➸ Views :* ${buffer.result.views}\n*➸ Durasi :* ${buffer.result.duration}\n*➸ Dirilis :* ${buffer.result.tahun}\n*➸ Rating :* ${buffer.result.rating}\n*➸ Description :* ${buffer.result.desc}\n*➸ Aktor :* ${buffer.result.actors}\n*➸ Location :* ${buffer.result.location}\n*➸ Date Release :* ${buffer.result.date_release}\n*➸ Language :* ${buffer.result.language}\n*➸ Link Download :* ${buffer.result.link_dl}`
					client.sendMessage(from, buffer7, image, {quoted: mek, caption: capt})
					await limitAdd(sender)
					break
		case 'heroml':  
					
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				reply(`[❕] Loading`)
				ige = body.slice(8)
				buffer = await getBuffer(`http://api.hurtzcrafter.xyz/herodetail?hero=${ige}`) 
				buffer7 = await getBuffer(buffer.result.image)
				teks = `Hasil\n*Hero Name*: ${buffer.result.hero_name}\n*Quotes Hero*: ${buffer.result.entrance_quotes}\n*Hero Feature*: ${buffer.result.hero_feature}\n*Items*: ${buffer.result.items}\n*Character*: ${buffer.result.character.chara}\n*Movement Speed*: ${buffer.result.attributes.movement_speed}\n*Physical Attack*: ${buffer.result.attributes.physical_attack}\n*Magic Power*: ${buffer.result.attributes.magic_power}\n*Attack Speed*: ${buffer.result.attributes.attack_speed}\n*Physical Defense*: ${buffer.result.attributes.physical_defense}\n*Basic Atk Crit Rate*: ${buffer.result.attributes.basic_atk_crit_rate}\n*HP*: ${buffer.result.attributes.hp}\n*Mana*: ${buffer.result.attributes.mana}\n*ability_crit_rate*: ${buffer.result.attributes.ability_crit_rate}\n*hp_regen*: ${buffer.result.attributes.hp_regen}\n*mana_regen*: ${buffer.result.attributes.mana_regen}\n*Price Hero BP*: ${buffer.result.price.battle_point}\n*Price Hero DM*: ${buffer.result.price.diamond}\n*Price Hero FRAG*: ${buffer.result.price.hero_fragment}\n*Role*: ${buffer.result.role}\n*Durability*: ${buffer.result.skill.durability}\n*offense*: ${buffer.result.skill.offense}\n*skill_effects*: ${buffer.result.skill.skill_effects}\n*difficulty*: ${buffer.result.skill.difficulty}\n*speciality*: ${buffer.result.speciality}\n*laning_recommendation*: ${buffer.result.laning_recommendation}\n*release_date*: ${buffer.result.release_date}`
				client.sendMessage(from, buffer7, image, {quoted: mek, caption: teks})
				await limitAdd(sender)
				break
		case 'heroml2':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    hero = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/heroml/${hero}?apikey=${LolhumanKey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    client.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
                    break
case 'heroml3':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait()) 
				cuk = await fetchJson(`http://docs-jojo.herokuapp.com/api/heroml?hero=alucard`) 
				buffer = await getBuffer(cuk.result.hero.img) 
				ml = `*「 HERO ML 」*\n\nNama : ${cuk.result.hero.name}\nQuotes : ${cuk.result.hero.quotes}\nRole : ${cuk.result.hero.role}\nRelease : ${cuk.result.hero.release_date}\nSpeciality : ${cuk.result.hero.release_date}`
				client.sendMessage(from, buffer, image, {quoted: mek, caption: ml}) 
				break
	case 'translate':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolhumankey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
				case 'igvideo': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(9)
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/instagram?apikey=WEMPYGANSS&url=${args[0]}`, {method: 'get'})
					if (buffer.error) return reply(buffer.error)
					buffer = await getBuffer(buffer.result)
                    client.sendMessage(from, buffer, video, )
				    break
		case 'stickerwa':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${lolhumankey}&img=${x}`)
                        client.sendMessage(from, ini_buffer, sticker)
                    }
                    break
				case 'igpost': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(8)
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/instagram?apikey=WEMPYGANSS&url=${args[0]}`, {method: 'get'})
					if (buffer.error) return reply(buffer.error)
					buffer = await getBuffer(buffer.result)
                    client.sendMessage(from, buffer, image, )
				    break
				case 'igtv': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(6)
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/instagram?apikey=WEMPYGANSS&url=${args[0]}`, {method: 'get'})
					if (buffer.error) return reply(buffer.error)
					buffer = await getBuffer(buffer.result)
                    client.sendMessage(from, buffer, video, )
				    break
/*				case 'tiktoknowm': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
					 ige = body.slice(12)
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${LolhumanKey}&url=${args[0]}`, {method: 'get'})
					if (buffer.error) return reply(buffer.error)
					buffer = await getBuffer(buffer.result.link)
                    client.sendMessage(from, buffer, video, )
				    break*/
case 'tiktoknowm':       
if (!isRegistered) return reply('Registrasi Dlu')
if (!isPremium) return reply('Khusus Premium!!')
	 if (args.length == 0) return reply(`Contoh menggunakannya fitur: ${prefix}tiktoknowm https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]                                                                                    
                 ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${LolhumanKey}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)                                                                
	   client.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
case 'tiktokmp3':
case 'tiktokmusic':
if (!isRegistered) return reply('Regis Dlu')
if (!isPremium) return reply('Khusus Premium')
			await reply ('Wait lagi di proses')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${LolhumanKey}&url=${ini_link}`)
                    client.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
                    break
/*case 'tiktokmp3': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
					 ige = body.slice(11)
                     anu = await getBuffer(`http://lolhuman.herokuapp.com/api/tiktokmusic?apikey=${LolhumanKey}&url=${args[0]}`) 
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.link)
                    client.sendMessage(from, buffer, video, )
				    break*/
				 case 'ccgenerator': 
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                   reply(`_[❕] Loading_`)
				   buffer = await getBuffer(`https://videfikri.com/api/ccgenerator/`, {method:'get'})
				   teks = `*Hasil CCGenerator*\n*♻️NUMBER*: ${buffer.result.card.number}\n*♻️TYPE*: ${buffer.result.card.network}\n*♻️CVV*: ${buffer.result.card.cvv}\n*♻️PIN*: ${buffer.result.card.pin}\n*♻️MONEY*: ${buffer.result.card.balance}\n*♻️EXPIRE-MONTH*: *Custom*\n*♻️EXPIRE-YEAR*: *Custume*\n*♻️COUTRY*: ${buffer.result.customer.country}\n*♻️NAME*: ${buffer.result.customer.name}\n*♻️ADDRESS*: ${buffer.result.customer.address}`
				   client.sendMessage(from, teks, text, {quoted: mek})
				   await limitAdd(sender)
				   break
				 case 'ceritahorror': 
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                   reply(`_[❕] Loading_`)
				   buffer = await getBuffer(`https://naufalhoster.xyz/tools/story_horror?apikey=IgygEb-7vT4iB-h2zOyi`, {method:'get'})
				   teks = `*Hasil Cerita*\n*Nama Cerita*: ${buffer.result.title}\n*Cerita*: ${buffer.result.story}`
				   client.sendMessage(from, teks, text, {quoted: mek})
				   await limitAdd(sender)
				   break
					
                case 'kickall':
			
					if (!isOwner) return reply(ind.ownerb())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break
		case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'setreplyy':
				if (!isAdmin) return reply('*Only Admin bot*')
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'grouplist':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					client.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group DANZ-BOT :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
		//daftar 
		case 'daftar':
                			if (isRegistered) return  reply(ind.rediregis())
                			if (!q.includes('|')) return  reply(ind.wrongf())
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                			const serialUser = createSerial(15)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                			if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                			if (umurUser > 40) return reply(`Umurnya ketuaan om :( batasnya 40 tahun`)
                			if (umurUser < 12) return reply(`Umurnya belum cukup dek buat menggunakan bot ini umur minimalnya 12 keatas`)
                					try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
                					veri = sender
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser,  serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
				        break
		case 'mining':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Admin danz lagi baik nih, dia  akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 1000000000000000000000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
		case 'bisakah':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kapankah':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'apakah':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'bagaimanakah':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'rate':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'sangecek':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					client.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'gaycek':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					client.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'lesbicek':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					client.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'gantengcek':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'cantikcek':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					client.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'watak':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
				        break
		case 'hobby':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'speed5':
		case 'ping3':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					await client.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
					break
		case 'help': 
		case 'listmenu':
            //Gak Usah Di Hapus TQTO Gblk Dimana Harga Diri Lu Gw Capek2 Ngefix malah di hapus 
                 if (!isRegistered) return reply( ind.noregis())
			if (isPremium) reply('Wah kamu bagian dari premium. keren deh')
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					reply('Sabar yah agak low :( Donasi dong biar bisa fast')
					runtime = process.uptime()
					const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
imsak = await fetchJson(`https://lolhuman.herokuapp.com/api/sholat/jakarta?apikey=${LolhumanKey}`)
anu = await fetchJson(`https://videfikri.com/api/covidindo/`)	
nganu = await fetchJson(`https://lolhuman.herokuapp.com/api/corona/global?apikey=${LolhumanKey}`)
                    danz = `◪ INFO DEVELOPER
  ❏ Nama: Danz
  ❏ Wa: wa.me/62895325677273
  ❏ Ig: https://instagram.com/Danz.nih._
  ❏ Expired : 999999 Day
  ----------------------------------
◪ YOUR INFO
  ❏ Prefix📌: 「  ${prefix}  」
  ❏ Nama😎: ${pushname}
  ❏ Duit💸: *Rp.${uangku}.-*
  ❏ Role🙏: *${role}*
  ❏ Level👍: ${getLevelingLevel(sender)}
  ❏ Xp: ${getLevelingXp(sender)}/${reqXp} 
  ❏ Status : *${prema}*
  ❏ Nomer📱: wa.me/${sender.split("@")[0]}
  ----------------------------------

~JAM & TANGGAL⏰ : ${time}

┏━━❰ *CODED BY DANZ* ❱━━━━━━━━
꧁Halo Kak : ${pushname}😁꧂
Skuyy Donasi :) Biar fitur makin mantep
┗━━━━━━━━━━━━━━━━━━━━━━━

╭═════─⊱ ❰ *DANZ BOT* ❱ ⊰────
║  *DANZ BOT*
╠ NOTE : Kalo mau request fitur
╠ ketik #request fitur yg mau di buat
╠ Nemu Bug? Gak Work? Report
╠ Ke Owner : Ketik #lpr jenis bug
╰════─⊱⸨ *DANZ BOT* ⸩⊰─════════──

╭─━━━━❰ *FITUR INTI* ❱━━━━─╮
*${prefix}lpr* 
*${prefix}request* 
*${prefix}blocklist* 
*${prefix}ping*
*${prefix}buypremium*
*${prefix}hargaprem*
*${prefix}hargabot*
*${prefix}sewabot*
*${prefix}sewabothemat* [ HEMAT ABIS!! ]
*${prefix}donasi*
*${prefix}infotourff*
*${prefix}listdiamondffress*
*${prefix}listdiamondmlress*
*${prefix}listdiamondff* 
*${prefix}listdiamondml*
*${prefix}listucpubg* [COMING SOON]
*${prefix}orderpulsa*
*${prefix}listupdate*
*${prefix}beliuangbot*
╰─━━━━━━━━━━━━━━━━━━━━━━─╯

⟡━━━━[ JADWAL SHOLAT ]━━━━⟡
Tanggal : ${imsak.result.tanggal}
sahur : ${imsak.result.sahur}
imsak : ${imsak.result.imsak}
subuh : ${imsak.result.subuh}     
terbit : ${imsak.result.terbit}
dhuha : ${imsak.result.dhuha}
dzuhur ${imsak.result.dzuhur}  
ashar : ${imsak.result.ashar}
Maghrib : ${imsak.result.maghrib}
Isya : ${imsak.result.isya}
⟡━━━━[ DKI JAKARTA ]━━━━⟡

SELAMAT MENUNAIKAN IBADAH PUASA

 ⟡━━━━[ LIST MENU ]━━━━⟡
⎆ ${prefix}groupmenu
⎆ ${prefix}ownermenu
⎆ ${prefix}informationmenu
⎆ ${prefix}makermenu
⎆ ${prefix}imageeditmenu
⎆ ${prefix}funmenu
⎆ ${prefix}apkmenu
⎆ ${prefix}mediamenu
⎆ ${prefix}nsfwmenu [ CLOSE SELAMA PUASA ]
⎆ ${prefix}downloadmenu
⎆ ${prefix}animemenu
⎆ ${prefix}randomimgmenu
⎆ ${prefix}quotesmenu
⎆ ${prefix}toolsmenu
⎆ ${prefix}storagemenu
⎆ ${prefix}cekduit
⟡━━━━[ DANZ BOT ]━━━━⟡
❏ Total Register : ${_registered.length}
❏ User Premium : ${premium.length}
❏ Total Block Contact : ${blocked.length}
❏ Total Chat : ${totalchat.length}
❏ Total Banned : ${ban.length}
❏ Total Owner : ${own.length}
⟡━━━━[ INFO COVID INDO ]━━━━⟡
Negara⚠️ : ${anu.result.country}
Positif⚠️ : ${anu.result.positif}
Sembuh⚠️ : ${anu.result.sembuh}
Dirawat⚠️ : ${anu.result.dalam_perawatan}
Meninggal⚠️ : ${anu.result.meninggal}
⟡━━━━[ INFO COVID GLOBAL ]━━━━⟡
positif⚠️ : ${nganu.result.positif}
Sembuh⚠️ : ${nganu.result.sembuh}
Dirawat⚠️ : ${nganu.result.dirawat}
Meninggal⚠️ : ${nganu.result.meninggal}
╔═════❰ *OTHER MENU* ❱══════❍
║⎆ ${prefix}soundmenu 🎶
║⎆ ${prefix}simplemenu 💾
║⎆ ${prefix}vipmenu [PREMIUM] 👑
╠═════════════════❍
║[ DONATUR BOT ]
║•
║•
║•
║•
╠════ ❰ *BOT* ❱ ═════
║⚠️*TENTANG BOT*⚠
║⎆ Name📌 : ${client.user.name}
║⎆ Browser📀 : ${client.browserDescription[1]}
║⎆ Server🖥 : ${client.browserDescription[0]}
║⎆ Version📂 : ${client.browserDescription[2]}
║⎆ Speed🏃 : ${process.uptime()}
║⎆ Runtime⏰ : ${kyun(runtime)}
║⎆ Handphone📱 : ${client.user.phone.device_manufacturer}
║⎆ ModelHP📱 : ${client.user.phone.model}
║⎆ Version Bot🔧 : 4.1 (BETA)
║⎆ Versi Whatsapp📀 :${client.user.phone.wa_version}
╚════ ⸨ *DanzBot* ⸩  ═══ 

 NOTE ❗:
1. *[ MAINTENANCE ]* Jika ada tanda maintenance.. berarti fitur tersebut sedang error dan sedang diperbaiki😊

2. Spam call,Spam command = *BLOCK + BANNED* [OTOMATIS]

3. Terimakasih untuk para donatur yg baik.

4. Upgrade Premium? Chat Owner Danz`
                   /*client.sendMessage(from, danz, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_LIST MENU😎_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1090, "width": 1089, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})*/
			client.sendMessage(from, danz, text, { quoted: mek })
					break
case 'help2':
                case 'listmenu2':
                 if (!isRegistered) return reply( ind.noregis())
		if (isPremium) reply('Wah kamu bagian dari premium. keren deh')
                                if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                                        runtime = process.uptime()
                                        const reqXpp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
                                        const uangkup = checkATMuser(sender)
                    danz = `◪ INFO DEVELOPER

  ❏ Nama: Danz
  ❏ Wa: wa.me/62895325677273
  ❏ Ig: https://instagram.com/Danz.nih._
  ❏ Expired : 999999 Day
  ----------------------------------
◪ YOUR INFO
  ❏ Prefix📌: 「  ${prefix}  」
  ❏ Nama😎: ${pushname}
  ❏ Duit💸: *Rp.${uangkup}.-*
  ❏ Role🙏: *${role}*
  ❏ Level👍: ${getLevelingLevel(sender)}
  ❏ Xp: ${getLevelingXp(sender)}/${reqXpp}
  ❏ Status : *${prema}*
  ❏ Nomer📱: wa.me/${sender.split("@")[0]}
  ----------------------------------

~JAM & TANGGAL⏰ : ${time}

┏━━❰ *CODED BY DANZ* ❱━━━━━━━━
╠ ꧁Halo Kak : ${pushname}😁꧂
╠ Skuyy Donasi :) Biar fitur makin mantep
┗━━━━━━━━━━━━━━━━━━━━━━━

╭═════─⊱ ❰ *DANZ BOT* ❱ ⊰────
║  *DANZ BOT*
╠ NOTE : Kalo mau request fitur
╠ ketik #request fitur yg mau di buat
╠ Nemu Bug? Gak Work? Report
╠ Ke Owner : Ketik #lpr jenis bug
╰════─⊱⸨ *DANZ BOT* ⸩⊰─════════──

╭─━━━━❰ *FITUR INTI* ❱━━━━─╮
*${prefix}snk* [ RULES BOT ]
*${prefix}lpr*
*${prefix}request*
*${prefix}blocklist*
*${prefix}ping*
*${prefix}buypremium*
*${prefix}hargaprem*
*${prefix}hargabot*
*${prefix}sewabot*
*${prefix}sewabothemat* [ HEMAT ABIS!! ]
*${prefix}donasi*
*${prefix}infotourff*
*${prefix}listdiamondffress*
*${prefix}listdiamondmlress*
*${prefix}listdiamondff*
*${prefix}listdiamondml*
*${prefix}listucpubg* [COMING SOON]
*${prefix}orderpulsa*
*${prefix}listupdate*
*${prefix}beliuangbot*
╰─━━━━━━━━━━━━─╯

 ⟡━━━━[ LIST MENU ]━━━━⟡
⎆ ${prefix}groupmenu
⎆ ${prefix}ownermenu
⎆ ${prefix}informationmenu
⎆ ${prefix}makermenu
⎆ ${prefix}imageeditmenu
⎆ ${prefix}funmenu
⎆ ${prefix}apkmenu
⎆ ${prefix}mediamenu
⎆ ${prefix}nsfwmenu [ CLOSE SELAMA PUASA ]
⎆ ${prefix}downloadmenu
⎆ ${prefix}animemenu
⎆ ${prefix}randomimgmenu
⎆ ${prefix}quotesmenu
⎆ ${prefix}toolsmenu
⎆ ${prefix}storagemenu
⎆ ${prefix}cekduit
⟡━━━━[ DANZ BOT ]━━━━⟡
❏ Total Register : ${_registered.length}
❏ User Premium : ${premium.length}
❏ Total Block Contact : ${blocked.length}
❏ Total Chat : ${totalchat.length}
❏ Total Banned : ${ban.length}
❏ Total Owner : ${own.length}
╔═════❰ *OTHER MENU* ❱══════❍
║⎆ ${prefix}soundmenu 🎶
║⎆ ${prefix}simplemenu 💾
║⎆ ${prefix}vipmenu [PREMIUM] 👑
╠═════════════════❍
║[ DONATUR BOT ]
║•
║•
║•
║•
╠════ ❰ *BOT* ❱ ═════
║⚠️*TENTANG BOT*⚠
║⎆ Name📌 : ${client.user.name}                           
║⎆ Browser📀 : ${client.browserDescription[1]}
║⎆ Server🖥 : ${client.browserDescription[0]}
║⎆ Version📂 : ${client.browserDescription[2]}
║⎆ Speed🏃 : ${process.uptime()}
║⎆ Runtime⏰ : ${kyun(runtime)}
║⎆ Handphone📱 : ${client.user.phone.device_manufacturer}
║⎆ Version Bot🔧 : 4.1 (BETA)
║⎆ Versi Whatsapp📀 :${client.user.phone.wa_version}
╚════ ⸨ *DanzBot* ⸩  ═══
 NOTE ❗:
1. *[ MAINTENANCE ]* Jika ada tanda maintenance.. berarti fitur tersebut sedang error dan sedang diperbaiki😊

2. Spam call,Spam command = *BLOCK + BANNED*

3. Terimakasih untuk para donatur yg baik.

4. Beli premium? Chat owner Danz`
                   /* client.sendMessage(from, danz, text, { quoted: freply })*/
client.sendMessage(from, danz, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_DANZ MENU😎_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1090, "width": 1089, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
/*client.sendMessage(from, danz, text, { quoted: mek })*/
break
					case 'soundmenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, soundmenu(prefix), text, { quoted: freply })
					break
					case 'rulesff':
                                        if (!isRegistered) return reply( ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
				 if (isLimit(sender)) return reply(ind.limitend(pushname))
                                if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                                        client.sendMessage(from, rulesff(prefix), text, { quoted: freply })
                                        break
					case 'hargadiamondff' :
					case 'hargadiamond':
					case 'listdiamondff':
                                       if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					wew = fs.readFileSync(`./src/listdm.jpg`)
					client.sendMessage(from, wew, image, { quoted: mek, caption: listdm(prefix)})
					break
					case 'groupmenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, groupmenu(prefix), text, { quoted: freply })
					break
					case 'infotourff':
                                     if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					wew = fs.readFileSync(`./src/poster.jpg`)
					client.sendMessage(from, wew, image, { quoted: mek, caption: tourff(prefix)})
					break
					case 'beliuangbot':
                                        if (!isRegistered) return reply( ind.noregis())
					   if (isLimit(sender)) return reply(ind.limitend(pushname))
				        client.sendMessage(from, uangbot(prefix), text, { quoted: freply })
                                        break
					case 'simplemenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, simplemenu(prefix), text, { quoted: freply })
					break
				case 'sewabothemat':
                                        if (!isRegistered) return reply( ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pushname)) 
                                if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')                                       
			 client.sendMessage(from, hematbot(prefix), text, { quoted: freply })         
					 break
case 'hargabot':
                                        if (!isRegistered) return reply( ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
                         client.sendMessage(from, hargabot(prefix), text, { quoted: freply })
                                         break
					case 'vipmenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (!isPremium) return reply('*PREMIUM ONLY!*')
					client.sendMessage(from, vipmenu(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_VIP USER👑_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/vip.jpeg')}}}})
					break
					case 'ownermenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (!isOwner) return reply('*OWNER ONLY!*')
					client.sendMessage(from, ownermenu(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_OWNER MENU👑_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
					break
					case 'informationmenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, informationmenu(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_INFORMATION MENU_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
					break
				case 'listupdate':
					if (!isRegistered) return reply( ind.noregis())
					client.sendMessage(from, listupdate(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_List Update👑_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
					break
					case 'makermenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, makermenu(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_MAKER MENU_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
					break
					case 'imageeditmenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, imageeditmenu(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_IMAGE EDIT MENU📷_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
					break
					case 'funmenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, funmenu(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_FUN MENU_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
					break
					case 'apkmenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, apkmenu(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_APK MENU_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
					break
					case 'mediamenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, mediamenu(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_MEDIA MENU_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
					break
					case 'downloadmenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, downloadmenu(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_DOWNLOAD MENU👑_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
					break
					case 'animemenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, animemenu(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_ANIME MENU_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
					break
					case 'nsfwmenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, closefitur(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_NSFW MENU_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
					break
					case 'randomimagemenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, randomimagemenu(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_RANDOM IMAGE MENU_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
					break
					case 'quotesmenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, quotesmenu(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_QUOTES MENU_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
					break
					case 'cekduit':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, cekduit(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_ATM MENU_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
					break
					case 'toolsmenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, toolsmenu(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_TOOLS MENU 🔧_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
					break
					case 'storagemenu':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, storagemenu(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_STORAGE MENU_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
					break
					
					case 'spamsms':
					if (!isRegistered) return reply( ind.noregis())
					if (!isPremium) return reply('*PREMIUM ONLY!*')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    reply('[❕] Sedang spam..')
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${LolhumanKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${LolhumanKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${LolhumanKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${LolhumanKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${LolhumanKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${LolhumanKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${LolhumanKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${LolhumanKey}&nomor=${nomor}`)
                    reply("Sukses")
                    break
	// SOUND MENU
	case 'home':
const home = fs.readFileSync('mp3/home.mp3')
client.sendMessage(from, home, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'gettingold':
const getting = fs.readFileSync('mp3/gettingold.mp3')
client.sendMessage(from, getting, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad':
const sad1 = fs.readFileSync('mp3/sad.mp3')
client.sendMessage(from, sad1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad2':
const sad2 = fs.readFileSync('mp3/sad2.mp3')
client.sendMessage(from, sad2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad3':
const sad3 = fs.readFileSync('mp3/sad3.mp3')
client.sendMessage(from, sad3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad4':
const sad4 = fs.readFileSync('mp3/sad4.mp3')
client.sendMessage(from, sad4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic':
const tetik = fs.readFileSync('mp3/aeshtetic.mp3')
client.sendMessage(from, tetik, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic2':
const tetik2 = fs.readFileSync('mp3/aeshtetic2.mp3')
client.sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic3':
const tetik3 = fs.readFileSync('mp3/aeshtetic3.mp3')
client.sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic4':
const tetik4 = fs.readFileSync('mp3/aeshtetic4.mp3')
client.sendMessage(from, tetik4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'allnight':
const allnight = fs.readFileSync('mp3/allnight.mp3')
client.sendMessage(from, allnight, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'lucas':
const lucas = fs.readFileSync('mp3/lucas.mp3')
client.sendMessage(from, lucas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sowell':
const well = fs.readFileSync('mp3/sowell.mp3')
client.sendMessage(from, well, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'wanna':
const wanna = fs.readFileSync('mp3/wanna.mp3')
client.sendMessage(from, wanna, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'up':
const ups = fs.readFileSync('mp3/up.mp3')
client.sendMessage(from, ups, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yourskin':
const skin = fs.readFileSync('mp3/yourskin.mp3')
client.sendMessage(from, skin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'cutmeoff':
const moff = fs.readFileSync('mp3/cutmeoff.mp3')
client.sendMessage(from, moff, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'beautiful':
const ful = fs.readFileSync('mp3/beautiful.mp3')
client.sendMessage(from, ful, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinggame':
const gam = fs.readFileSync('mp3/loosinggame.mp3')
client.sendMessage(from, gam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinginterest':
const rest = fs.readFileSync('mp3/loosinginterest.mp3')
client.sendMessage(from, rest, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'playdate':
const date = fs.readFileSync('mp3/playdate.mp3')
client.sendMessage(from, date, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi2':
const kursi = fs.readFileSync('mp3/ayatkursi2.mp3')
client.sendMessage(from, kursi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'tilawah':
const tilawah = fs.readFileSync('mp3/tilawah.mp3')
client.sendMessage(from, tilawah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawatnabi':
const nabi = fs.readFileSync('mp3/sholawatnabi.mp3')
client.sendMessage(from, nabi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('mp3/ngaji.mp3')
client.sendMessage(from, ngaji1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('mp3/ngaji2.mp3')
client.sendMessage(from, ngaji2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./mp3/iri.mp3');
client.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('./mp3/pale.mp3')
client.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('./mp3/sound.mp3')
client.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./mp3/sound1.mp3');
client.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./mp3/sound2.mp3');
client.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./mp3/sound3.mp3');
client.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./mp3/sound4.mp3');
client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./mp3/sound5.mp3');
client.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./mp3/sound6.mp3');
client.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./mp3/sound7.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
delapan = fs.readFileSync('./mp3/sound8.mp3');
client.sendMessage(from, delapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break				
case 'sound9':
sembilan = fs.readFileSync('./mp3/sound9.mp3');
client.sendMessage(from, sembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
case 'sound10':
sepuluh = fs.readFileSync('./mp3/sound10.mp3');
client.sendMessage(from, sepuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break					
		case 'crosslogo':
                case 'naruto':
                case 'flowertext':
                case 'silktext':
                case 'flametext':
                case 'glowtext':
                case 'skytext':
                case 'cslogo':
                case 'lithgtext':
                case 'crismes':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Danz`)
                    txt = args.join(" ")
                    reply('[❕] Loading')
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`, {method: 'get'})
                    tod = await getBuffer(buffer.result)
                    client.sendMessage(from, tod, image, {caption: 'Nih kak.. *Jangan lupa follow ig @danz.nih._*', quoted: mek})
         break
         
case 'bneon':
                case 'matrix':
                case 'breakwall':
                case 'dropwater':
                case 'leavest':
                case 'logobp':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} yogi`)
                    txt = args.join(" ")
                    reply('[❕] Loading')
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`)
                    client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan lupa follow ig @danz.nih._*', quoted: mek})
         break
		case 'donasi':
		case 'donate':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					client.sendMessage(from, donasi(), text)
					break
		case 'menupicture':
		case 'menupict':
		case 'pictmenu':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					wew = fs.readFileSync(`./src/logo.jpg`)
					client.sendMessage(from, wew, image, { quoted: mek, caption: randompict(prefix)})
					break
		case 'menuowner':
		case 'ownermenu':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					wew = fs.readFileSync(`./src/logo.jpg`)
					client.sendMessage(from, wew, image, { quoted: mek, caption: developer(prefix)})
					break
		case 'bahasa':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, bahasa(), text)
					await limitAdd(sender)
					break
		case 'kodenegara':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.sendMessage(from, negara(), text)
					await limitAdd(sender)
					break
		case 'del':
		case 'd':
		case 'delete':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
		case 'level':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (!isLevelingOn) return reply(ind.lvlnoon())
					if (!isGroup) return reply(ind.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `◪ *LEVEL*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  ├─ ❏ *User XP* : ${userXp}/${requiredXp}\n  └─ ❏ *User Level* : ${userLevel}\n`
					client.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
					case 'semoji':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${LolhumanKey}`)
                    client.sendMessage(from, buffer, sticker, { quoted: mek })
                    break

case 'semoji2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.whatsapp)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji3':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
		        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.microsoft)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji4':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {                                                                                                                                                                           
			  emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.apple)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji5':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {                                                                                                                                                                           
			  emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.google)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji6':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {                                                                                                                                                                            
		 emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.twitter)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji7':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {                                                                                                                                                                           
  emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.facebook)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji8':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {                                                                                                                                
                                             emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.joypixels)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji9':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {                                                                                                                                                                            
 emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.openmoji)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji10':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {                                                                                                                                                                            
 emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.emojidex)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji11':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {                                                                                                                                                                           
  emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.lg)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji12':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {                                                                                                                                                                           
  emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.htc)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji13':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {                                                                                                                                                     
	  emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.mesengger)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji14':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {                                                                                         
                                                              emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.lg)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji15':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {                                                                                         
                                                              emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.mozzila)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji16':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {                                                                                         
                                                              emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.softbank)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji17':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {                                                                                         
                                                              emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.docomo)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji18':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {                                                                                         
                                                              emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.au_by_KDDI)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji19':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                                                              emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.ig)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
case 'semoji20':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                                                              emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolhumanKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolhumanKey}&img=` + ini_buffer.result.emoji.emojidex)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
		case 'say':
                                        teks = body.slice(5)
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        if (args.length < 1) return reply('teksnya mana kak?')
                                        saying = teks
                                        client.sendMessage(from, saying, text)
					await limitAdd(sender)
                                        break
	/*	case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*INFO OWNER*\n*Owner bot* : Danzツ\n*No Owner* : wa.me/62895325677273\n*Ig owner* : www.instagram.com/@danz.nih._\n━━━━━━━━━━━━━━━━━━━━\n*INFO BOT*\n*Nama bot* : ${me.name}\n*Nomor bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total block contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Ketik* : ${prefix}/wlpr _Untuk melaporkan admin bot melalui bot_\n*Ketik* : ${prefix}owner untuk menghubungi admin bot kami.`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break*/
/*case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*INFO OWNER*\n*Owner bot* : Danzツ\n*No Owner* : wa.me/62895325677273\n*Ig owner* : www.instagram.com/danz.nih._\n━━━━━━━━━━━━━━━━━━━━\n*INFO BOT*\n*Nama bot* : ${me.name}\n*Nomor bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total block contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Ketik* : ${prefix}lpr _Untuk melaporkan admin bot melalui bot_\n*Ketik* : ${prefix}developer untuk menghubungi admin bot kami.`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break*/
case 'info':
					if (!isRegistered) return reply(indnoregis())
	let i = []
       let giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
					mee = client.user
					ca = totalchat
					ginfo = await getBuffer(mee.imgUrl)
					inponya = `━━ 「 *INFO* 」 ━━
❏ Bot type : NodeJS V14
❏ Name : ${client.user.name}
❏ Browser : ${client.browserDescription[1]}
❏ Server : ${client.browserDescription[0]}
❏ Version : ${client.browserDescription[2]}
❏ Speed : ${process.uptime()} Second
❏ Handphone : ${client.user.phone.device_manufacturer}
❏ Versi WA : ${client.user.phone.wa_version}
❏ Personal Chat : ${totalchat.length - giid.length}
❏ Total Chat : ${totalchat.length}
❏ Total Block Contact : ${blocked.length}
❏ Total Owner : ${own.length}
❏ Total Premium : ${prem.length}
❏ Total CEO : 2

*THANKS TO*
❏ Allah swt
❏ Danz
❏ YOGIPW
❏ Dappa 
❏ Hans
❏ RAMLAN ID
❏ AlpinGay
❏ Adiwajshing/baileys
❏ Penyedia API
「 *BOT WHATSAPP* 」`
				client.sendMessage(from, ginfo, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg",  "caption": cr,  "jpegThumbnail": fs.readFileSync(`./image/odc.jpeg`) } } }, caption: inponya })
break
		case 'rulesbot' :
case 'snk':
					me = client.user
					uptime = process.uptime()
					teks = `*Syarat & Ketentuan DANZ-BOT*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
		case 'lpr':
					if (!isRegistered) return reply('Wajib Daftar!!')
					if (isBanned) return reply('Kena banned bos?')
					const bug = body.slice(5)
					if (bug.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					teks1 = `*[LAPORAN]*\nNomor : wa.me/${sender.split("@")[0]}\nPesan : ${bug}`
					var options = {
					text: teks1,
					contextInfo: {mentionedJid: [nomor]},
					}
					client.sendMessage('62895325677273@s.whatsapp.net', options, text, {quoted: mek})
					reply('Masalah telah di laporkan ke owner DANZ-BOT, Laporan palsu atau main² tidak akan ditanggapi.')
					break
		case 'request':
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REQUEST VITUR]*\nNomor : wa.me/${sender.split("@")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					client.sendMessage('62895325677273@s.whatsapp.net', options, text, {quoted: mek})
					reply('REQUEST ANDA TELAH SAMPAI KE OWNER DANZ-BOT, Requests palsu atau main² tidak akan ditanggapi.')
					break
		case 'blocklist': 
					teks = '*This is list of blocked number* :\n'
					for (let block of blocked) {
						teks += `*~>* @${block.split('@')[0]}\n`
					}
					teks += `*Total* : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'hidetag':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
case 'stickertag':
                if (!isGroup) return await reply('Only Group')
                if (!isOwner) return await reply('Khusus Owner Om')
                media = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('c.us', 's.whatsapp.net')).message.extendedTextMessage.contextInfo : mek
                buffer = await client.downloadMediaMessage(media)
                await clent.hideTagSticker(from, buffer, sticker)
                break

                case 'afk':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                                tels = body.slice(4)
                                if (args.length < 1) return reply('Kakak afk karena apa?')
                                var ain = mek.participant
                                const tagzz = {
                                                text: `@${tagzz.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [ain] }
                                        }
                                        client.sendMessage(from, tagzz, text, {quoted: mek})
					await limitAdd(sender)
                                        break
                                        case 'profile':

    				client.updatePresence(from, Presence.composing)

    				try {

					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)

					} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

					}

					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *XP:* ${getLevelingXp(sender)}\n│• *Level:* ${getLevelingLevel(sender)}\n│• *Role:* ${role}\n│• *User Terdaftar:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`


					buffer = await getBuffer(ppimg)

					client.sendMessage(from, buffer, image, {quoted: mek, caption: profile})

					break
                case 'quotemaker':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					var gh = body.slice(12)
					var quote = gh.split("/")[0];
					var wm = gh.split("/")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					buffer = await getBuffer(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(buffer.result)
					client.sendMessage(from, buffer, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
                /*case 'truth':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break*/
/*case 'truth':
					if (isBanned) return reply('Yah kamu sudah di banned,gk keren deh :(')
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					await limitAdd(sender)
					const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n' + ttrth, quoted: Lan })
					break*/

				case 'dare':
					if (isBanned) return reply('Yah kamu sudah dibanned.Gk keren deh :(')
					if (!isRegistered) return reply('Register dlu om')
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					await limitAdd(sender)
					const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: Lan, caption: '*Dare*\n\n' + der })
					break

/*		case 'dare':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break*/
		case 'quoteskehidupan':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					const quotes =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Aku percaya, suatu hari nanti, aku akan memiliki semua hal yang telah aku doa kan selama ini.','Balas dendam yang paling terbaik adalah mengubah dirimu menjadi yang lebih baik lagi.','Hidupku jauh dari kata mewah, kalau kalian lihat aku selalu senang, itu karena aku tau cara menikmati hidup.','Persahabatan bukan tentang orang yang baik didepanmu, tetapi tentang orang yang tetap baik di belakangmu.','Tidak semua bisa dimiliki. Jaga yang sudah termiliki. Tidak semua bisa diterima. Pertahankan yang sudah ada.','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Ibu, sebajingan apapun anakmu ini, Hatiku selalu ingin bisa Membahagiakanmu.','Tidak semua hari berjalan dengan baik tapi ada hal baik di setiap harinya.','Pikiran negatif tidak akan pernah memberi kamu kehidupan yang positif','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Saya percaya bahwa satu-satunya keberanian yang dibutuhkan oleh seseorang adalah keberanian untuk mengikuti impian Anda sendiri.','Arti hidup adalah menemukan hadiahmu. Tujuan hidup adalah untuk memberikannya.','Ada kalanya kita dicari ketika diperlukan, Dan dilupakan setelah dapat apa yang dia inginkan.','Aku suka tidur, Bukan karena aku pemalas Hanya saja mimpiku lebih indah dari kenyataan.','Jika kamu terlahir bukan dari keluarga kaya, Maka pastikanlah keluarga kaya berasal dari mu.','Saat kamu memberi orang lain, sesungguhnya pemberian itu adalah untukmu. Dan saat kamu mendoakan orang lain, sesungguhnya doa itu juga untukmu. Maka sibuklah membahagiakan orang lain, agar kemudian dunia akan sibuk membahagiakanmu.','Pernah salah pilih, Pernah salah jalan, Karena ego, Karena ceroboh, Tapi kalau bukan karena salah, Kita tidak akan pernah belajar.','Teruntuk hatiku semoga kamu sabar dan tabah bukan untuk hari ini, tapi untuk setiap hari.','Apapun yang kamu alami hari ini tetaplah terlihat baik-baik saja, are you oke?','Wajar kulitku hitam, Tanganku kasar, Penampilanku dekil, KARENA KEGIATANKU KERJA BUKAN MEMINTA.','Sibuklah mencintai hidupmu sampai kamu tidak punya waktu untuk membenci, menyesal, ataupun merasa takut.','AKU BAHAGIA KARENA BERSYUKUR, BUKAN BERSYUKUR KARENA BAHAGIA.','Hanya karena kamu bisa melakukan apa saja, bukan berarti kamu mampu melakukan segalanya.','Kegagalan adalah kesempatan untuk memulai lagi dengan cara yang lebih cerdas.','Dulu waktu masih kecil tidak sabar pengen jadi dewasa, tapi ketika udah besar, aku baru sadar bahwa jaman kecil lah yang paling bahagia.','Saya adalah saya, Saya bukan dia ataupun mereka Jika ingin bersama saya, Terimalah apa adanya.','Online ku sangatlah santai ada yang chat ya syukur, tidak ada yang chat ya tidur.','Kamu tidak begitu dalam mengenaliku, jadi tolong berhentilah sok tau tentang hidup ku.','Saya terlahir dari keluarga sederhana jadi maaf kalau penampilan saya apa adanya.','Dirimu sebenarnya adalah apa yang kamu lakukan di saat tiada orang yang melihatmu.','Ada dua pilihan hidup di pagi hari. Kembali tidur untuk melanjutkan mimpi, atau bangun tidur untuk mewujudkan mimpi.','Orang yang dibelakangku membicarakan diriku, keadaanku, keburukanku, mungkin ia membahayakan dalam duniaku tapi yang jelas ia bermanfaat untuk akhiratku, maka biarlah ia meneruskannya. *#Jangan lupa tersenyum untuk setiap harinya*','Lupakanlah masalahmu sejenak, dan berbahagialah kamu.','Mencintai memang tentang penerimaan. Tapi bukan untuk dibodohi.','Hidup adalah keseimbangan antara menggenggam dan melepaskan.','Jalanan yang sulit seringkali membawamu ke tujuan yang paling indah.','Kita tidak gagal. Kita hanya telah belajar dari 1000 cara yang salah.','Kalau kamu menginginkan sesuatu yang belum pernah kamu miliki, kamu harus melakukan sesuatu yang belum pernah kamu lakukan.','Jangan berhenti sebelum kamu bangga dengan dirimu sendiri.','Siapapun yang kamu cari.. Percayalah, dia juga sedang mencarimu.','Bahagia itu tujuan, kecewa itu jalan. Seseorang tidak akan sampai ke tujuan, tanpa melewati sebuah jalan.','Teruslah update status, setidaknya orang lain tau bahwa kamu masih hidup.','Bukan aku yang hebat. Tapi doa orang tua ku.','Kalau kamu sering disakiti orang itu artinya kamu orang baik. Ingat, cuma pohon berbuah yang dilempari batu.','Dalam hidup ini, Sadar itu penting loh, Jangan sabar mulu, CAPEK!','Kamu mempunyai banyak pilihan hidup untuk itu, Pilihlah hanya yang bisa benar-benar menjadikanmu lebih baik.','Aku kuat karena aku pernah lemah. Aku berani karena aku pernah merasa takut. Aku bijak karena aku pernah melakukan kesalahan.','Bukan berdoa untuk meminta hidup yang lebih mudah, Tapi berdoalah untuk bisa menjadi mbuffersia yang lebih tangguh dalam menjalani hidup.','Selalu ada kisah yang kamu tidak tau di balik setiap orang. Selalu ada alasan mengapa mereka menjadi seperti itu. Pikiran hal ini sebelum kamu mencoba menghakimi orang lain.','Orang lain hanya melihat hasil akhir tanpa pernah tau bagaimana lelahnya berproses.','Kebahagiaan bukan milik mereka yang memiliki segalanya, Tetapi untuk mereka yang bisa menghargai apa yang mereka miliki.','Aku hanya ingin diperlakukan spesial lagi.','Terkadang, Hal yang menahan mu untuk bergerak maju hanyalah Pikiranmu sendiri.','Dua hal Menggambarkan dirimu : Kesabaranmu saat tak punya apa-apa Dan Sikapmu saat memiliki segalanya.','Kita hanya bersama bukan bersatu.','Saat kamu benar Semua orang lupa Saat kamu salah Semua orang ingat','Uang memang bukan segalanya tapi Tanpa uang kehidupan ini akan susah','Bila kamu Yakin , Tak perlu ada kata Mungkin','Jadilah kuat untuk melepaskan, Dan sabar untuk apa yang layak kamu dapatkan.','Pembenci itu sangat pemilih, Mereka hanya membenci orang yang hidupnya lebih baik  daripada hidup mereka.','Pasangan adalah cerminan diri kita. Maka teruslah perbaiki diri menjadi lebih baik setiap harinya, Maka pasangan terbaikpun akan diberikan tuhan.','Persahabatan adalah berbagi suka duka dan menua bersama.','Tersenyumlah ketika melihat masa lalu yang kelam, Karena engkau telah berhasil melewatinya.','Ketika banyak permasalahan yang menghampiri dirimu janganlah meminta untuk lekas dihilangkan. Tapi mintalah agar kamu bisa kuat untuk menyelesaikan.','Kehidupanmu adalah buah dari tindakan yang kamu lakukan. Tidak ada yang bisa disalahkan selain dirimu.','Kehidupan bukanlah masalah yang harus diselesaikan namun kenyataan yang harus diambil pengalamannya.','Semoga di tahun baru, Buku baru, Penulisan yang baru dengan isi yang lebih menarik untuk diimbas kembali di penghujung cerita nanti.','Masa lalu memang menyimpan banyak kenangan, Namun itu bukan alasan untuk tidak terus melangkah ke depan.','Santailah, Nikmati saja hidup, Tersenyumlah lebih banyak, Tertawalah lebih banyak, Dan janganlah memikirkan banyak hal.','Setiap perbuatan yang membahagiakan sesama adalah suatu sikap yang mencerminkan pribadi yang mulia.','Jarang yang sadar kalau kegagalan juga merupakan kesempatan emas untuk menuju kesuksesan.','Lebih baik bekerja keras dalam kediamnya kesunyian, Biarkan nanti sukses mu yang berbicara.','Belajar dari kesalahan masa lalu merupakan salah satu langkah awal untuk maju.']
					const quo = quotes[Math.floor(Math.random() * quotes.length)]
					crot = await getBuffer(`https://i.ibb.co/Bj8tD93/IMG-20210126-WA0018.jpg`)
					client.sendMessage(from, crot, image, { quoted: mek, caption: '*Quotes Kehidupan*\n\n'+ quo })
					await limitAdd(sender)
					break
		case 'quotesislami':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() * islami.length)]
					islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
					client.sendMessage(from, islam, image, { quoted: mek, caption: '*Quotes Islami*\n\n'+ isl })
					await limitAdd(sender)
					break	
		case 'quotesnasehat':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk mbuffersia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
					const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
					nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
					client.sendMessage(from, nase, image, { quoted: mek, caption: '*Quotes Nasehat*\n\n'+ nsh })
					await limitAdd(sender)
					break	
		case 'quotescinta':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					const cinta =['SABAR MASIH TAHAP PEMBUATAN','MASIH TAHAP PEMBUATAN']
					const cin = cinta[Math.floor(Math.random() * cinta.length)]
					cta = await getBuffer(`https://i.ibb.co/vL5x6F7/IMG-20210126-WA0018.jpg`)
					client.sendMessage(from, cta, image, { quoted: mek, caption: '*Quotes Cinta*\n\n'+ cin })
					await limitAdd(sender)
					break
		case 'quotesmotivasi':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak mbuffersia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada mbuffersia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah mbuffersia belajar, lewatnya kenyamanan lah mbuffersia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai mbuffersia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh mbuffersia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran mbuffersia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
					const vasi = motiv[Math.floor(Math.random() * motiv.length)]
					vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
					client.sendMessage(from, vass, image, { quoted: mek, caption: '*Motivasi*\n\n'+ cin })
					await limitAdd(sender)
					break
                case 'fotocewek':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
	                                const cangti = ['https://i.ibb.co/1T1DCz7/cewek-thailand-20200325-007-non-fotografer-kly.jpg','https://i.ibb.co/FsJ6jjs/kucing2.jpg','https://i.ibb.co/vvkdS7n/kucing3.jpg','https://i.ibb.co/1QHWxts/kucing4.jpg','https://i.ibb.co/JQmRz4n/kucing5.jpg','https://i.ibb.co/tBwrFkG/kucing6.jpg','https://i.ibb.co/dp0YhYm/kucing7.jpg','https://i.ibb.co/R03smZT/kucing8.jpg','https://i.ibb.co/17tw0dp/kucing9.jpg','https://i.ibb.co/7XdGGqc/kucing10.jpg','https://i.ibb.co/XL9PZxg/kucing11.jpg','https://i.ibb.co/gyjvXWN/kucing12.jpg','https://i.ibb.co/R4gg4wH/kucing13.jpg','https://i.ibb.co/PmLYtFm/kucing14.jpg','https://i.ibb.co/XbSDh47/kucing15.jpg','https://i.ibb.co/kSXNJzt/kucing16.jpg']
                                        let cangtip = cangti[Math.floor(Math.random() * cangti.length)]
                                        client.sendMessage(from, cangtip, image, {quote: mek})
					await limitAdd(sender)
                                        break
                /*case 'kucing':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
	                                const kucings = ['https://i.ibb.co/vvmp82w/kucing1.jpg']
                                        let kucigz = kucings[Math.floor(Math.random() * kucings.length)]
                                        client.sendMessage(from, kucigz, image, {quote: mek})
					await limitAdd(sender)
                                        break*/
		case 'ssweb':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					if (args.length < 1) return reply('Urlnya mana kak?')
					teks = body.slice(7)
					reply(ind.wait())
					buffer = await getBuffer(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buffer = await getBuffer(buffer.gambar)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
case 'ssweb2':

if (!isRegistered) return reply('Registrasi dulu dong')
if (isBanned) return reply('Yah kamu sudah di banned. Gk keren deh :(')
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} http://api.lolhuman.xyz`)
                    ini_link = args[0]
			reply(ind.wait())
                    ini_buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/ssweb?apikey=${LolhumanKey}&url=${ini_link}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })                                                                                                                   
		 break
		case 'loli2':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
                                        gatauda = body.slice(6)
					reply(ind.wait())
                                        buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/loli?apikey=${LolhumanKey}`)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
                                        break
		case 'waifu':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					gatauda = body.slice(7)
					reply(ind.wait())
					data = await getBuffer('https://waifu.pics/api/sfw/neko')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'loli3':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					gatauda = body.slice(7)
					reply(ind.wait())
					data = await getBuffer('https://akaneko-api.herokuapp.com/api/loli')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'hentai2':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					
					if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					gatauda = body.slice(9)
					reply(ind.wait())
					data = await getBuffer('http://api.lolhuman.xyz/api/random2/pussy_jpg?apikey=${LolhumanKey}')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'animecry':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					await limitAdd(sender)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('http://api.lolhuman.xyz/api/random2/random_hentai_gif?apikey=${LolhumanKey}', {method: 'get'})
					if (buffer.error) return reply(buffer.error)
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
		case 'animehug':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					await limitAdd(sender)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}', {method: 'get'})
					if (buffer.error) return reply(buffer.error)
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply('Error')
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'flowerheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(ind.wrongf())
                    if (args.length == 0) return reply('Teksnya mana um')
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${LolhumanKey}&text=${txt}`)
                    client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_DANZ BOT_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
			await limitAdd(sender)
                   break
                    
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply(ind.wrongf())
                    if (args.length == 0) return reply('Teksnya mana um')
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${LolhumanKey}&text=${txt}`)
                    client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_DANZ BOT_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
		await limitAdd(sender)
                    break
                    case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${LolhumanKey}&text1=${txt1}&text2=${txt2}`)
                    client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_DANZ BOT_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
			await limitAdd(sender)
                    break
		case 'pokemon':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await getBuffer(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(buffer));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
				case 'freefireimg':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await getBuffer(`https://api.fdci.se/rep.php?gambar=freefire`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(buffer));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
					case 'resepmasakan':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')		
                if (isLimit(sender)) return reply(limitend(pushname2))
                reply(ind.wait())
                   buffer = await fetchJson(`https://masak-apa.tomorisakura.vercel.app/api/search?q=${body.slice(14)}`, {method: 'get'})
                   masak = '==============================\n'
                   for (let msk of buffer.results){
                   masak += `• *Title:* ${msk.title}\n• *• *Durasi Masak Sekitar:* ${msk.times}\n• *Porsi:* ${msk.serving}\n• *Tingkat Kesulitan:* ${msk.difficulty}\n• *Link:* https://www.masakapahariini.com/?s=${msk.key}\n==============================\n`
                    }
                   reply(masak.trim())
                   await limitAdd(sender) 
                   break 
				case 'ww2':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await getBuffer(`https://api.fdci.se/rep.php?gambar=ww2`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(buffer));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await getBuffer(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(buffer));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break

                case 'kucing':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await getBuffer(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(buffer));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'doraemon':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=doraemon`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'hamster':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=aesthetic-hamsters`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kelinci':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=aesthetic-rabbit`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
					case 'nangis':
				
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}', {method: 'get'})
					if (buffer.error) return reply(buffer.error)
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'blowjob':
				
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}', {method: 'get'})
					if (buffer.error) return reply(buffer.error)
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'cium':
				
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzKey}', {method: 'get'})
					if (buffer.error) return reply(buffer.error)
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
/*					case 'peluk':
				
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}', {method: 'get'})
					if (buffer.error) return reply(buffer.error)
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break*/
/*				case 'husbu':
				
				if (!isNsfw) return reply(ind.nsfwoff())
				    try {
						res = await getBuffer(`https://tobz-api.herokuapp.com/api/husbu?apikey=${TobzKey}`)
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('âŒ *ERROR* âŒ')
					}
					await limitAdd(sender)
					break*/
                case 'ranime':
				
				if (!isNsfw) return reply(ind.nsfwoff())
					gatauda = body.slice(8)
					reply(ind.wait())
					buffer = await getBuffer(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzKey}`, {method: 'get'})
					buffer = await getBuffer(buffer.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
				//anime
/*				case 'waifu':
				   	buffer = await getBuffer(`https://arugaz.herokuapp.com/api/waifu`)
				  	buf = await getBuffer(buffer.image)
				   	texs = ` *anime name* : ${buffer.name} \n*deskripsi* : ${buffer.desc} \n*source* : ${buffer.source}`
				   	client.sendMessage(from, buf, image, { quoted: mek, caption: `${texs}`})
				        break*/
					case 'animeboy':
					buffer = await getBuffer(`https://api.fdci.se/rep.php?gambar=anime%20boy`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(buffer));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'animegirl':
					buffer = await getBuffer(`https://api.fdci.se/rep.php?gambar=anime%20girl`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(buffer));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break

				case 'animeimg':
					fetchJson = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(buffer));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await fetchJson(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break

				case 'loli4':
				 	fetchJson = await fetchJson(`https://api.fdci.se/rep.php?gambar=loli`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(buffer));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await fetchJson(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
	
                		case 'dewabatch':
                    			teks = body.slice(11)
                    			buffer = await getBuffer(`https://arugaz.herokuapp.com/api/dewabatch?q=${teks}` , {method: 'get'})
                    			thum = await getBuffer(buffer.thumb)
                    			client.sendMessage(from, thum, image, {quoted: mek, caption: `${buffer.result}`})
                 			break
			   case 'animequotes':
				
					buffer = await getBuffer(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(buffer.data.quote)
					await limitAdd(sender)
					break
		case 'mobil':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=cars`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'motor':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=motorcycle`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'sepeda':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=bicycle`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'bluesky':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=aesthetic-blue-sky`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'flower':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=aesthetic-flower`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'icecream':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=aesthetic%20ice%20cream`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'pemandangan':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=aesthetic%20pemandangan%20alam`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'osakana':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=osakana`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'menherachan':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=menhera-chan`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'naruto':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=naruto%20uzumaki%20wallpaper%20hd`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'animegirl':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=anime-girl`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'animeboy':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=anime-boy`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'quotesid':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=quotes%20indonesia`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'quotesen':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=quotes`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'katakata':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=katakata`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'katamotivasi':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=kata%20motivasi`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kehidupan':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=kata%20kata%20bijak%20kehidupan`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'islami':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://api.fdci.se/rep.php?gambar=quotes%20islami`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'fototiktok':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					gatauda = body.slice(12)
					buffer = await getBuffer(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
					buffer = await getBuffer(buffer.result)
					reply(buffer)
					await limitAdd(sender)
					break
		case 'map':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await getBuffer(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
					buffer = await getBuffer(buffer.gambar)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
					await limitAdd(sender)
					break
                case 'kbbi':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					if (args.length < 1) return reply('Apa yang mau dicari kak?')
					buffer = await getBuffer(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+buffer.result)
					await limitAdd(sender)
					break
                case 'artinama':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					if (args.length < 1) return reply('Apa yang mau dicari kak?')
					buffer = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`)
					reply('Menurut nama:\n\n'+buffer.result)
					await limitAdd(sender)
					break
		case 'faketoko':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    await faketoko(teks = "Tahu Bacem", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "Danz Gans", code = "IDR", price = 10000000000)
                    break
		case 'quran':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await getBuffer(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${buffer.acak.ar.teks}\n\n${buffer.acak.id.teks}\nQ.S ${buffer.surat.nama} ayat ${buffer.acak.id.ayat}`
					client.sendMessage(from, quran, text, {quoted: mek})
					await limitAdd(sender)
					break
					case 'quransurah':
			if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
			reply(ind.wait())
			surah = `${body.slice(12)}`
			buffer = await getBuffer(`https://api.zeks.xyz/api/quran?no=${surah}&apikey=apivinz`)
			quran = `Surah Al-Qur\`an Nomer: *${surah}*\nSurah: *${buffer.surah}*\nDiturunkan Dikota: *${buffer.type}*\nJumlah Ayat: *${buffer.jumlah_ayat}*\n\n*${buffer.ket}\n=============================\n`
			for (let surah of buffer.ayat) {
			quran += `${surah.number}\n${surah.text}\n${surah.translation_id}\n=====================\n`
			}
			reply(quran.trim())
			await limitAdd(sender) 
			break
		case 'quran':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					buffer = await getBuffer(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${buffer.acak.ar.teks}\n\n${buffer.acak.id.teks}\nQ.S ${buffer.surat.nama} ayat ${buffer.acak.id.ayat}`
					client.sendMessage(from, quran, text, {quoted: mek})
					await limitAdd(sender)
					break
		case 'jadwalsholat':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return reply('kota nya mana kak?')
					buffer = await fetchJson(`http://lolhuman.herokuapp.com/api/sholat/${body.slice(14)}?apikey=${LolhumanKey}`)
					sholat = `Wilayah : ${buffer.result.wilayah}`
					sholat += `Tanggal : ${buffer.result.tanggal}`
					sholat += `sahur : ${buffer.result.sahur}`
					sholat += `imsak : ${bufffer.resul.imsak}`
					sholat += `subuh : ${buffer.result.subuh}`
					sholat += `terbit : ${buffer.result.terbit}`
					sholat += `dhuha : ${buffer.result.dhuha}`
					sholat += `dzuhur ${buffer.result.dzuhur}`
					sholat += `ashar : ${buffer.result.ashar}`
					sholat += `Maghrib : ${buffer.result.maghrib}`
					sholat += `Isya : ${buffer.result.isya}`
					client.sendMessage(from, sholat, text, {quoted: mek})
					await limitAdd(sender)
					break
                case 'neonime':
				        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				        if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					client.updatePresence(from, Presence.composing) 
					data = await getBuffer(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
					teks = '################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.judul}\n*link* : ${i.link}\n*rilis* : ${i.rilis}\n###############\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
		case 'ocr': 
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					await limitAdd(sender)
					break
			/*case 'stickergif':
			case 'stikergif':
			case 'sgif':
			case 'stiker': 
			case 'sticker':
			case 's':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				    if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break*/
case 'stickergif':
			case 'stikergif':
			case 'sgif':
			case 'stiker': 
			case 'sticker':
			case 's':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				    if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
								})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
			    break
		case 'gtts':
		case 'tts':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				if (args.length < 1) return client.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
case 'pussy': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				reply(ind.wait())
				anu = await getBuffer(`http://lolhuman.herokuapp.com/api/random2/pussy?apikey=${LolhumanKey}`)
				buffer = await getBuffer(anu.result.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		case 'setprefix':
					if (args.length < 1) return
					if (!isDeveloper) return reply('CEO Only')
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					break 
		case 'setlimit':
		case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		case 'setlimitt':
		case 'addlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		case 'setmemlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		case 'tiktokstalk':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
				try {
						if (args.length < 1) return client.sendMessage(from, '*Username mana kak?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*(ERROR)* *Kemungkinan username tidak valid*')
					}
					await limitAdd(sender)
					break
					case 'jadian':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
          case 'ngewe':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case 'terganteng':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case 'tercantik':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
                 case 'linkgc':
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (!isBotGroupAdmins) return reply(ind.badmin())
				linkgc = await client.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				client.sendMessage(from, yeh, text, {quoted: mek})
				await limitAdd(sender)
				break
		case 'sayang':
				if (!isDeveloper) return reply('Aku sayangnya cuma sama Danz Doang :) bukan sama kamu')
					client.sendMessage(from, 'Apa sayangku? 🥰',MessageType.text, { quoted: mek} )
					break
		case 'gelud':
					client.sendMessage(from, 'Kuylah, dapat duit aku..',MessageType.text, { quoted: mek} )
					break
		case 'bot':
					client.sendMessage(from, 'Iya kak? \nJangan lupa daftar ya kak ^_^"\nJika sudah silahkan berarti sudah terdaftar kak ^_^"',MessageType.text, { quoted: mek} )
					break
		case 'hargaprem':
		case 'hargapremium':
					client.sendMessage(from, '╭─「 BUY PREMIUM 」\n│ \n│ > Keuntungan :\n│• Limit Tidak Terbatas!\n│• Fitur Premium Dapat Digunakan!\n│• Dapat Menambahkan Bot Ke Grup!\n│\n│\n│ > Harga :\n│• 8K / 1 minggu (7 hari)\n│• 14K / 2 minggu (14 hari)\n│• 20K / 3 minggu (21 hari)\n│• 25k / 1 bulan (30 hari)\n│• 50K / 3 Bulan (90 Hari) \n│• 65k / 4 Bulan (120 Hari) \n│• 90k / VIP (Permanen) \n│• 120k /VVIP (PERMANEN + UBAH OWNER) \n│\n│ > Pembayaran :\n│• GO-PAY\n│• OVO\n│• Dana\n│• ShopeePay\n│• Qris\n│• NOTE : MAHAL? SC GK PASARAN NGAB\n╰────',MessageType.text, { quoted: mek} )
					break
		case 'buypremium':
					client.sendMessage(from, 'Ingin membeli premium?\nHarap hubungi kami : wa.me/62895325677273',MessageType.text, { quoted: mek} )
					break
		case 'buypremunlimited':
					
					client.sendMessage(from, 'Selamat kamu sudah berlangganan selamanya 🎉',MessageType.text, { quoted: mek} )
					break
		case 'buyprem7day':
					client.sendMessage(from, 'Hubungi owner kami. wa.me/62895325677273',MessageType.text, { quoted: mek} )
					break
					case 'buypremium':
					client.sendMessage(from, 'Ingin membeli premium?\nHarap hubungi kami : wa.me/62895325677273',MessageType.text, { quoted: mek} )
					break
		case 'sewabot':
					client.sendMessage(from, 'Ingin menyewa bot?\nHarap hubungi kami : wa.me/62895325677273',MessageType.text, { quoted: mek} )
					break
		case 'buypremunlimited':
					client.sendMessage(from, 'Hubungi owner kami. wa.me/62895325677273',MessageType.text, { quoted: mek} )
					break
		case 'buyprem30day':
					
					client.sendMessage(from, 'Hubungi owner kami. wa.me/62895325677273',MessageType.text, { quoted: mek} )
					break
		case 'test':
					client.sendMessage(from, 'Active',MessageType.text, { quoted: mek} )
					break
		
		case 'ping':
					client.sendMessage(from, 'Active',MessageType.text, { quoted: mek} )
					break
		case 'assalamualaikum':
					client.sendMessage(from, 'Waalaikumusalam',MessageType.text, { quoted: mek} )
					break

case 'orderpulsa':
                                        client.sendMessage(from, 'Haii. Mau jadi agen puksa?yuu order disini.\nwa.me/62895325677273',MessageType.text, { quoted: mek} )
                                        break	
	case 'listdiamondff':
                                        client.sendMessage(from, 'Pengen beli dm Terpercaya? wa.me/62895325677273 ',MessageType.text, { quoted: mek} )
                                        break
		case 'listdiamondml':
                                        client.sendMessage(from, 'Pengen beli dm terpercaya? wa.me/62895325677273',MessageType.text, { quoted: mek} )
                                        break
		case 'listdiamondffress':
                                        client.sendMessage(from, '```Harga Reseller by Jancok shop Dijamin aman dan murmer 🔥```\n*HARGA RANDOM SETIAP HARI. BISA NAIK BISA TURUN*\n50 DM = Rp 7.777 \n70 DM : Rp 9.450 \n100 DM : Rp 13.750\n140 DM : Rp 18.670 \n210 DM : Rp 27.900\n355 DM : Rp 46.300 \n425 DM : Rp 56.600\n500 DM : Rp 66.400\n720 DM : Rp 92.750 \n2000 DM : Rp 252.720\nM. Mingguan : Rp 28.685\nM. Bulanan : Rp 113.989\n\n*Dana : 0895325677273*\n*OVO : 0895325677273*\n*Gopay : 0895325677273*\n*Qris : CP ADMIN!!*\nHarga akan berubah sesuai waktu. \n```Note : Butuh stok DM murmer? Chat aja gan stok unlimited``` \nMOHON SABAR BILA ORDER\n JIKA MINAT BISA CHAT KE \nwa.me/62895325677273',MessageType.text, { quoted: mek} )
                                        break
		case 'listdiamondmlress':                                                                                                                                                                                
  					 client.sendMessage(from, '```Harga Reseller by Jancok shop Dijamin aman dan murmer🔥``` \n_*MOBILE LEGENDS*_\n\n*HARGA RANDOM SETIAP HARI. BISA NAIK BISA TURUN*\n\n3 DM = Rp 1.828\n6 DM = 3.532\n50 DM = Rp 14.140\n86 DM : Rp 17.285\n141 DM : Rp 29.390\n172 DM : Rp 35.770\n220 DM : Rp 46.695\n257 DM : Rp 52.300\n366 DM : Rp 75.295\n568 DM : Rp 116.242\n963 DM : Rp 189.145\n966 DM : Rp 189.165\n1160 DM : Rp 229.825\n2010 DM : Rp 340.000\nStarlight membership : Rp 102.000\nStarlight member plus : Rp 245.000\n\n*READY AKUN MOBILE LEGENDS RANDOM BER BP 67.000+ CN ON, HERO EPIC&EMBLEM MANTAP*  : Rp 35.600\n\n*Dana : 0895325677273*\n\n*OVO : 0895325677273*\n\n*Gopay : (CLOSE DULU)*\n\n*Qris : CP ADMIN!!*\n\n*SHOPEE PAY : 0895325677273*\n\n*LINK AJA : (CLOSE DULU)*\n\nHarga akan berubah sesuai waktu. \n\n```Note : Butuh stok DM murmer? Chat aja gan stok unlimited``` \n\nMOHON SABAR BILA ORDER. JIKA MINAT BISA CHAT KE\n\nwa.me/62895325677273',MessageType.text, { quoted: mek} )
                                        break
		case 'menu':
					client.sendMessage(from, 'Hallo Untuk menggunakan menu ketik #listmenu ',MessageType.text, { quoted: mek} )
					break
		/*case 'infotourff':
                                        client.sendMessage(from, 'Hai kak.ingin ikut tour FreeFire?Hubungi wa.me/62895325677273',MessageType.text, { quoted: mek} )
                                        break	*/
		case 'intro':
                                        client.sendMessage(from, '*Halo perkenalkan nama ku :*\n*Bot - Danz*\n*Kelas* = Bot Manen\n *Owner* = wa.me/62895325677273\n*Tempat tinggal* = New York, Amerika Serikat\nQuotes = Ganteng doang penghasilan gk ada',MessageType.text, { quoted: mek} )
                                        break
		case 'kontol':
					client.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/62895325677273',MessageType.text, { quoted: mek} )
					break

		case 'jembut':
					client.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/62895325677273',MessageType.text, { quoted: mek} )
					break
		case 'ngentod':
					client.sendMessage(from, 'Dih sangean lu tolol',MessageType.text, { quoted: mek} )
					break
		case 'kntl':
					client.sendMessage(from, 'Ayo sini berantem kontol. ngentot lu anjg coding susah² malah di kntl²in bangsad',MessageType.text, { quoted: mek} )
					break

		case 'wa.me':
		case 'wame':
  					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
  					if (isLimit(sender)) return reply(ind.limitend(pushname))
  					client.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					client.sendMessage(from, options, text, { quoted: mek } )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
  					break
		case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isOwner) return reply(ind.ownerb())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*~>* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'tagallmember':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*~>* @${mem.d.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
		case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					buffer = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of buffer) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
		case 'blockk':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblockk':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
				    client.blockUser (`${body.slice(10)}@c.us`, "remove")
					client.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'block':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'leave':
					// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Bye cuk🗣', text) // ur cods
					}, 0)
					break
		case 'join':
                                        // Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (!isPremium) return reply('Khusus Premium Bero')
					
                                        client.groupInviteCode (from)
.then (code => console.log(code))
                                        client.sendMessage(from, 'Otw Join', text) // ur cods
                                       
                                        break
		case 'bc': 
					if (!isDeveloper) return reply('CEO only') 
					if (args.length < 1) return reply('.......')
					buffer = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of buffer) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of buffer) {
							sendMess(_.jid, `*「 BROADCAST DANZ-BOT 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
	case 'bc2':
                                        if (!isDeveloper) return reply('CEO only')
                                        if (args.length < 1) return reply('.......')
                                        buffer = await client.chats.all()
                                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                                                const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                                buff = await client.downloadMediaMessage(encmedia)
                                                for (let _ of buffer) {
                                                        client.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
                                                }                                                                                                                                                                                 reply('*Suksess broadcast* ')
                                        } else {
                                                for (let _ of buffer) {
                                                        sendMess(_.jid, `${body.slice(5)}`)
                                                }
                                                reply('*Suksess broadcast* ')
                                        }
                                        break
		case 'bcc': 
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('.......')
					buffer = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of buffer) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of buffer) {
							sendMess(_.jid, `*「 BROADCAST DANZ-BOT 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case 'setpp': 
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                   			if (!isBotGroupAdmins) return reply(ind.badmin())
					media = await client.downloadAndSaveMediaMessage(mek)
					await client.updateProfilePicture (from, media)
					reply('*Sukses mengganti icon group*')
					break				
		case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
		case 'add2':
                                        if (!isGroup) return reply(ind.groupo())
                                        if (!isOwner) return
                                        if (!isGroupAdmins) return reply(ind.admin())
                                        if (!isBotGroupAdmins) return reply(ind.badmin())
                                        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('test')
                                        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                                        if (mentioned.length > 1) {
                                                teks = ''
                                                for (let _ of mentioned) {
                                                        teks += `*Add massal*  :\n`
                                                        teks += `@num.split('@')[0]`
                                                }
                                                mentions(teks, mentioned, true)
                                                client.grouAdd(from, mentioned)
                                        } else {
                                                mentions(`*Add massal :v :v* @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
                                                client.groupAdd(from, mentioned)
                                        }
                                        break
		case 'grup':
		case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
                  client.sendMessage(from, {displayname: "Danz", vcard: vcard}, MessageType.contact, { quoted: mek})
/*  		  client.sendMessage(from, {displayname: "Rell", vcard: vcard2}, MessageType.contact, { quoted: mek})*/
                  client.sendMessage(from, 'Tuh nomer pacarku eh  owner ku >_<, jangan spam atau ku block kamu',MessageType.text, { quoted: mek} )
					break    
           /*case 'setname':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					client.groupUpdateSubject(from, `${body.slice(9)}`)
					client.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break*/
                /*case 'setdesc':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					client.groupUpdateDescription(from, `${body.slice(9)}`)
					client.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break*/
case 'setname':
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					client.groupUpdateSubject(from, `${body.slice(9)}`)
					client.sendMessage(from, '「 SUKSES 」Mengubah Nama Grup', text, { quoted: mek })
					break

				case 'setdesc':
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					client.groupUpdateDescription(from, `${body.slice(9)}`)
					client.sendMessage(from, '*「 SUKSES 」Mengubah Desk Grup', text, { quoted: mek })
					break
           case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Perintah diterima, menurunkan jadi member group* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
			case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Selamat* ${pushname} *Anda naik menjadi admin group* 🎉 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Selamat* ${pushname} @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* 🎉`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
case 'hedsot':
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag Orang Nya Kak')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						heds = 'Bismillah Hedsot >_< :\n'
						for (let _ of mentioned) {
							heds += `@${_.split('@')[0]}\n`
						}
						mentions(heds, mentioned, true)
						client.groupRemove(from, mentioned)
						mentions(heds, mentioned, true)
						client.groupAdd(from, [num])
					} else {
						mentions(`Berhasil Meng hedsot kepalanya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break

				case 'fitnah':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
					var gh = body.slice(8)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					client.sendMessage(from, `${bot}`, text, { quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` } } })
					break
		case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
				
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Pasti beban grup nih :v* 🤭 :\n`
							teks += `@num.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`*Pasti beban grup nih :v* @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
		case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
/*		case 'toimg':
				// Fix Case By Danz
                 if (!isRegistered) return reply( ind.noregis())
		if (isBanned) return reply('Yah kamu sudah dibanned. Gk keren deh :(')		
		if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (!isQuotedSticker) return reply('*Reply/Tag sticker!*')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*DAH JADI SETAN* '})
						fs.unlinkSync(ran)
					})
		
					break*/
case 'colong':
				if (!isQuotedSticker) return aqul.reply(from, `Reply sticker dengan caption *${prefix}colong*`,mek)
				const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				const meidia = await client.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
				exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply(from, mess.error.api, mek)
					client.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), mek)
					fs.unlinkSync(meidia)
				})
				break
case 'spam':
				if (!arg) return reply(from, `Penggunaan ${prefix}spam teks|jumlahspam`, )
				argz = arg.split("|")
				if (!argz) return reply(from, `Penggunaan ${prefix}spam teks|jumlah`, text)
				if (isNaN(argz[1])) return reply(from, `harus berupa angka`, text)
				for (let i = 0; i < argz[1]; i++){
					client.sendText(from, argz[0])
				}
				break
case 'toimg':
					if (isBanned) return reply('Yaha ke banned bos?')
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname, prefix))
					await limitAdd(sender)
					if (!isQuotedSticker) return reply('Reply Sticker Nya Kak')
					reply(ind.wait())
					pantek = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediaku = await client.downloadAndSaveMediaMessage(pantek)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaku} ${ran}`, (err) => {
						fs.unlinkSync(mediaku)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, { quoted: mek, caption: 'nih Ngab hasilnya Jgn lupa follow @danz.nih._' })
						fs.unlinkSync(ran)
					})
					break
                 case 'simi':
					if (args.length < 1) return reply('Textnya mana kak?')
					teks = body.slice(5)
					buffer = await simih(teks) //getBuffer(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (buffer.error) return reply('Simi ga tau kak')
					reply(buffer)
					break
		case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*Fitur simi sudah aktif sebelum nya*')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
					break
		case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
/*					if (!isGroupAdmins) return reply(ind.admin())*/
					if (!isDeveloper) return reply('Maaf untuk sementara fitur ini untuk CEO saja')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan ')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('*Fitur nsfw sudah aktif sebelum nya*')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes mengaktifkan mode nsfw di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes menonaktifkan mode nsfw di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
					break
		case 'leveling':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (args[0] === '1') {
					if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
					_leveling.push(from)
					fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
					reply(ind.lvlon())
					} else if (args[0] === '0') {
					_leveling.splice(from, 1)
						fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
						reply(ind.lvloff())
					} else {
						reply(ind.satukos())
					}
					break
		case 'welcome':	
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
			
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya*')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini')
					} else {
						reply(ind.satukos())
					}
					break
case 'welcomee':
                                        if (!isGroup) return reply(ind.groupo())
                          
                                        if (!isOwner) return reply('Ini khusus Owner')
                                        if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
                                        if (Number(args[0]) === 1) {
                                                if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya*')
                                                welkom.push(from)
                                                fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
                                                reply('❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini')
                                        } else if (Number(args[0]) === 0) {
                                        welkom.splice(from, 1)
                                                fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
                                                reply('❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini')
                                        } else {
                                                reply(ind.satukos())
                                        }
                                        break
case 'welcome2':
                                        if (!isGroup) return reply(ind.groupo())     
                                        if (!isPremium) return reply('Fiturnya khusus Premium om') 
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
                                        if (Number(args[0]) === 1) {
                                                if (isWelkom2) return reply('*Fitur welcome sudah aktif sebelum nya*')                                                
						 welkom2.push(from) 
					 fs.writeFileSync('./database/bot/welkom2.json', JSON.stringify(welkom2))
                                               reply('❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini')
                                        } else if (Number(args[0]) === 0) {
                                        welkom2.splice(from, 1)
                                                fs.writeFileSync('./database/bot/welkom2.json', JSON.stringify(welkom2))
                                                reply('❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini')
                                        } else {                                                                                                                      
						reply(ind.satukos())
                                        }
                                        break
        case 'antilinkgroup':
                                	if (!isGroup) return reply('ONLY GROUP KAK')
					if (!isGroupAdmins) return reply('FITUR INI BUAT ADMIN KAK')
					if (!isBotGroupAdmins) return reply('JADIIN ADMIN DLU KAK')
					if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntisckvid) return reply('Anti Link Group sudah aktif')
						antisckvid.push(from)
						fs.writeFileSync('./database/kelompok/antisckvid.json', JSON.stringify(antisckvid))
						reply('Sukses mengaktifkan anti Link group  di group ini ✔️')
						client.sendMessage(from,`Perhatian kepada seluruh member group. anti link group sudah diaktifkan, apabila mengirim link group maka akan otomatis kick`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntisckvid) return reply('Mode anti link group sudah disable')
						antisckvid.splice(from, 1)
						fs.writeFileSync('./database/kelompok/antisckvid.json', JSON.stringify(antisckvis))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break 
	       /* case 'antilink':
                                	if (!isGroup) return reply('ONLY GROUP')			
					if (!isGroupAdmins) return reply('ONLY ADMIN')
					if (!isBotGroupAdmins) return reply('AKU NYA JADIIN ADMIN KAK :)')
					if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						client.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break*/
case 'antilink':
                if (!isGroup) return reply('Only Group')
				if (!isGroupAdmins) return reply('KHUSUS ADMIN')
				if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN')
				if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
				if (Number(args[0]) === 1) {
				if (isAntilink) return reply('Anti link group sudah aktif')
				antilink.push(from)
				fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
				reply('Sukses mengaktifkan anti link group di group ini ✔️')
				client.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
				} else if (Number(args[0]) === 0) {
				if (!isAntilink) return reply('Mode anti link group sudah disable')
				antilink.splice(from, 1)
				fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
				reply('Sukes menonaktifkan anti link group di group ini ✔️')
				} else {
				reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
				}
				break
case 'antilinkown':
                if (!isGroup) return reply('Only group')
				if (!isOwner)return reply('Khusus Owner')
				if (!isBotGroupAdmins) return reply('Bot nya Jadiin admin dlu')
				if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
				if (Number(args[0]) === 1) {
				if (isAntilink) return reply('Anti link group sudah aktif')
				antilink.push(from)
				fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
				await reply('Sukses mengaktifkan anti link  di group ini ✔️')
				client.sendMessage(from,`Perhatian kepada seluruh member anti link  aktif apabila anda mengirim link  anda akan di kick dari group`, text)
				} else if (Number(args[0]) === 0) {
				if (!isAntilink) return reply('Mode anti link  sudah disable')
				antilink.splice(from, 1)
				fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
				reply('Sukes menonaktifkan anti link  di group ini ✔️')
				} else {
				reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
				}
				break
case 'linknotify':
                if (!isGroup) return reply('Only group')
                                if (!isOwner)return reply('Khusus Owner')
                                if (!isBotGroupAdmins) return reply('Bot nya Jadiin admin dlu')
                                if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
                                if (Number(args[0]) === 1) {
				if (isLink) return reply('link notift group sudah aktif')
                                link.push(from)
                                fs.writeFileSync('./database/kelompok/link.json', JSON.stringify(link))
                                await reply('Sukses mengaktifkan  link  notify group di group ini ✔️')
                                client.sendMessage(from,`Perhatian kepada seluruh member link group notify aktif apabila anda mengirim link group anda akan di peringatkan`, text)
                                } else if (Number(args[0]) === 0) {
                                if (!isLink) return reply('Mode link notify group sudah disable')
                                link.splice(from, 1)
                                fs.writeFileSync('./database/kelompok/link.json', JSON.stringify(link))
                                reply('Sukes menonaktifkan  link notifiy group di group ini ✔️')
                                } else {
                                reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                                }
                                break
case 'antivirtex':
                if (!isGroup) return reply('Khusus Grub') 
				if (!isGroupAdmins) return reply('Fitur ini khusus Admin!!')
				if (!isBotGroupAdmins) return reply('Jadiin admin dlu botnya!')
				if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
				if (Number(args[0]) === 1) {
				if (isAntivirtex) return reply('Anti virtex group sudah aktif')
				antivirtex.push(from)
				fs.writeFileSync('./database/kelompok/antivirtex.json', JSON.stringify(antivirtex))
				reply('Sukses mengaktifkan anti link group di group ini ✔️')
				client.sendMessage(from,`Perhatian kepada seluruh member anti virtex group aktif apabila anda mengirim virtex di  group anda akan di kick dari group`, text)
				} else if (Number(args[0]) === 0) {
				if (!isAntivirtex) return reply('Mode anti virtex group sudah disable')
				antivirtex.splice(from, 1)
				fs.writeFileSync('./database/kelompok/antivirtex.json', JSON.stringify(antivirtex))
				reply('Sukes menonaktifkan anti virtex di group ini ✔️')
				} else {
				reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
				}
				break
                 case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'eventt':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
		case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('❬ SUCCSESS ❭')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
				case 'wait':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await getBuffer(`http://api.lolhuman.xyz/api/wait?apikey=${LolhumanKey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_video = await getBuffer(get_result.video)
                        txt = `Anilist id : ${get_result.anilist_id}\n`
                        txt += `MAL id : ${get_result.mal_id}\n`
                        txt += `Title Romaji : ${get_result.title_romaji}\n`
                        txt += `Title Native : ${get_result.title_native}\n`
                        txt += `Title English : ${get_result.title_english}\n`
                        txt += `at : ${get_result.at}\n`
                        txt += `Episode : ${get_result.episode}\n`
                        txt += `Eimilarity : ${get_result.similarity}`
                        client.sendMessage(from, ini_video, video, { quoted: mek, caption: txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
			// YOGIPWKEY
			case 'pubglogo':
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(9)
				ll1 = ct.split("/")[0];
                ll2 = ct.split("/")[1];
				reply(ind.wait())
				buffer = await getBuffer(`https://yogipw-api.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=pubg&apikey=${YogiPwKey}`)
				buffer = await getBuffer(buffer.result.url)
				client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_DANZ BOT_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				break 
				case 'fakeaddress':
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://yogipw-api.herokuapp.com/api/fakedata?country=en&apikey=${YogiPwKey}`)
				teks = `➸ *Nama* : ${buffer.result.name}\n*➸ Birthday :* ${buffer.result.birthday}\n*➸ Address :* ${buffer.result.address}\n*➸ City :* ${buffer.result.city}\n*➸ Region :* ${buffer.result.region}\n*➸ Country :* ${buffer.result.country}\n*➸ Zip Code :* ${buffer.result.zip}\n*➸ Phone Number :* ${buffer.result.phone_number}\n*➸ Username :* ${buffer.result.username}\n*➸ Password :* ${buffer.result.password}\n*➸ Email :* ${buffer.result.email}`
				client.sendMessage(from, teks, text, {quoted: mek})
				break
		case 'battlefield':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`textnya mana om?`)					
				ct = body.slice(12)
				ll1 = ct.split("/")[0];
				ll2 = ct.split("/")[1];
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://yogipw-api.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${YogiPwKey}`)
				buffer = await getBuffer(buffer.result.url)
				client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_DANZ BOT_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				break
				default:
 if (budy == '@verifybot') {
						if (isBanned) return reply(ind.baned())
						if (isRegistered) return reply(ind.rediregis())
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppadd = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppadd = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnya = `╭──「 *VERIFIKASI BERHASIL* 」
➸ Nama : ${pushname}
➸ Nomor : wa.me/${sender.split("@")[0]}
➸ Waktu Verify : ${time}
➸ SN : ${serialUser}
➸ User Verified : ${_registered.length}
╰─────「 *DANZ BOT* 」`
							let peripi = await getBuffer(ppadd)
							client.sendMessage(from, peripi, image, {
								caption: captnya, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppadd = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppadd = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnya = `╭──「 *VERIFIKASI BERHASIL* 」
➸ Nama : ${pushname}
➸ Nomor : wa.me/${sender.split("@")[0]}
➸ Waktu Verify : ${time}
➸ SN : ${serialUser}
➸ User Verified : ${_registered.length}
╰─────「 *DANZ BOT* 」`
							let peripi = await getBuffer(ppadd)
							client.sendMessage(from, peripi, image, {
								caption: captnya, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
			
            if (budy.includes(`assalamualaikum`)) {

                  reply(`Waalaikumsalam`)

                  }

	   if (budy.includes(`Introbot`)) {

                  reply(`*Halo perkenalkan nama ku :* 
*Bot - Danz* 
*Kelas* = Bot Manen 
*Owner* = wa.me/62895325677273 
*Tempat tinggal* = New York, Amerika Serikat 
Quotes = Ganteng doang penghasilan gk ada`)

                  }

if (budy.includes(`introbot`)) {

                  reply(`*Halo perkenalkan nama ku :*
*Bot - Danz*
*Kelas* = Bot Manen
*Owner* = wa.me/62895325677273
*Tempat tinggal* = New York, Amerika Serikat
Quotes = Ganteng doang penghasilan gk ada`)

                  }

		if (budy.includes(`Assalam'ualaikum`)) {

                  reply(`Waalaikumsalam`)

                  }

        if (budy.includes(`DANZBOT`)) {

                  reply(`Ya?\nUntuk Menggunakan Bot Ketik #listmenu/help`)

                  }

       if (budy.includes(`DANZ-BOT`)) {

                  reply(`Ya?\nUntuk Menggunakan Bot Ketik #listmenu/help`)

                  }



		if (budy.includes(`Sayang`)) {
		if (mek.key.fromMe) return reply('Ya')
		if (isDeveloper) return  reply('Sayang Danz Juga❤💞')
                  reply(`Siapa lu? gw sayangnya sama Danz doang🥰`)

                  }



		if (budy.includes(`sayang`)) {
		if (mek.key.fromMe) return reply('Ya')
		if (isDeveloper) return  reply('Aaa sayang juga ')
                 reply(`Bukan Danz. gw gk sayang.`)

                  }
if (budy.includes(`iya gk syg`)) {
                if (isDeveloper) return  reply('Iya dong beb')
                 

                  }


		if (budy.includes(`Emrorhshsh`)) {

                  reply(`Hai Juga,\nUntuk Menggunakan Bot Ketik #listmenu/help `)

                  }





		if (budy.includes(`Hallo72727`)) {

                  reply(`Hallo Juga,\nUntuk Menggunakan Bot Ketik #listmenu/help`)

                  }



		if (budy.includes(`Thanks`)) {

                  reply(`Sama-sama ${pushname}`)

                  }



		if (budy.includes(`Makasih`)) {

                  reply(`Sama-sama ${pushname}`)

                  }
            
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Command Tidak Ditemukan. Script By : Danz', color(sender.split('@')[0]))
					}
					}
	} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

