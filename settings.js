const chalk = require("chalk")
const fs = require("fs")


//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//batas
global.APIKeys = {
    'https://api.shinoa.xyz/docs': '451C1A14'
}

//owmner v card
global.owner = ['6285607025831'] //ur owner number
global.ownernomer = "6285607025831" //ur owner number2
global.ownername = "YUS" //ur owner name
global.namaku = "Jayus"
global.ytname = "YUS" //ur yt chanel name
global.socialm = "https://www.instagram.com/ryuu__poi/" //ur github or insta name
global.location = "Jawa Timur, Indonesia " //ur location

//new
global.botname = "Ryuu Bot"
global.ownernumber = '6285607025831'
global.ownername = 'Jayus'
global.ownerNumber = ["6285607025831@s.whatsapp.net"]
global.ownerweb = "https://saweria.co/RyuuKun"
global.websitex = "https://saweria.co/RyuuKun"
global.wagc = "https://chat.whatsapp.com/FEJDcT9JhUM2RDo7Qkkqr2"
global.themeemoji = '🇯🇴'
global.wm = "Created By YUS"
global.wmbot = "Ryuu Bot"
global.botscript = 'kamu nanyeak escehnya?' //script link
global.packname = "Created by"
global.author =  "YUS"
global.creator = "6285607025831@s.whatsapp.net"
global.prefa = ['','!','.','#','&','+','*']
global.hituet = 0
global.running = "Panel reslav"
//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='


global.limitawal = {
    premium: "Infinity",
    free: 20
}
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//messages
global.mess = {
    success: 'Nih',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Chat aja ownernya, Kali aja nanti di kasih fitur premium gratis',
    owner: 'This feature could be used by owner only',
    group: 'Fitur Ini Cuma bisa di pakai di Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'proses...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'Jangan pakek kalo belom 18+',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})