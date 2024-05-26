const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348077802580";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348077802580";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349130042729";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_26_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDc2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzLFxuICAgICAgICAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDExLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0LFxuICAgICAgICAxODksXG4gICAgICAgIDgwLFxuICAgICAgICAxODksXG4gICAgICAgIDM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDU3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDExLFxuICAgICAgICAyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgODMsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTksXG4gICAgICAgIDY4LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTczLFxuICAgICAgICA2MixcbiAgICAgICAgODksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQyLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDc0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVJTnN0WlpKL25XOGh0Y3FEVysxaU9RZjJPRXJnRjZDTUs3ZzYzSXFLUGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3NzgwMjU4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0FFNjQ0RDBBNTk2NzBFRjc0NTQ2NEEzODNGMEZDRDdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NzExOTY3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3NzgwMjU4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTQ3MEI5MEQwRDZCQzIzQUM0NEI0MjUwM0Q3RkUwMkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NzExOTY3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3NzgwMjU4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDM3MENEMzNCMjc2NjE4QjBDOUJBQURBQkNENEZENDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NzExOTcyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJERkxVeUdlUlVxaVBXVzBBVWY5dFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjg1MmMwNGUtZjVkNS00NWI2LWIwNmMtMzJhNWNiZTAwYTk1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDE0OCxcbiAgICAgIDQ2LFxuICAgICAgMjQ3LFxuICAgICAgMTk5LFxuICAgICAgMTcxLFxuICAgICAgOTYsXG4gICAgICAxNjAsXG4gICAgICA0MixcbiAgICAgIDI0NSxcbiAgICAgIDE2NyxcbiAgICAgIDIwMixcbiAgICAgIDM4LFxuICAgICAgODMsXG4gICAgICAxNyxcbiAgICAgIDIyLFxuICAgICAgNDksXG4gICAgICA5MixcbiAgICAgIDE5MSxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NixcbiAgICAgIDE0NixcbiAgICAgIDE1NixcbiAgICAgIDE1OCxcbiAgICAgIDExOSxcbiAgICAgIDgxLFxuICAgICAgMjM2LFxuICAgICAgMTMxLFxuICAgICAgODYsXG4gICAgICAxMjcsXG4gICAgICAxMDEsXG4gICAgICAyMDcsXG4gICAgICAyNTEsXG4gICAgICAxNTQsXG4gICAgICA2OSxcbiAgICAgIDEzLFxuICAgICAgMzQsXG4gICAgICA1MyxcbiAgICAgIDQ2LFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdLUUtZNE03XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDc3ODAyNTgwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NjI1NDM0MjA1ODEzNDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00vanVLSUhFSmpreTdJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS1YrYzBEMUVNc2ZBU0FXYUNZSzYxanU2Q2huK2hvb2tkMkpFbUo3dDkzcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzNzc1dENRcG82TlFsaXF1R1pqbFB0MWRJdmh5eG9HQ3hrZFptamVSMElWYXYyR2tXMHlwV25wN0ovbytFMm8wTEJ4azVGUFN6Z0FJVzB1YjA5Y2RCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOSFVkRzc3WDBXWWZYcVpXajdDa1JYM3pRVGRxYUxReFFsVVNtZnpYcGVJeDFlWmg4Z01GRmZLVSs4elBxMnNEODBFM0NEYjVDOFh5Y2ljaElDLzdoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDc3ODAyNTgwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjcxMTk2NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "scallywag",
  ownername:process.env.OWNER_NAME|| "Scallywags",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
