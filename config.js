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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349130042729";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2349024629944";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2349024629944";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,2349024629944";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_51_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA3MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDk5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICA2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDksXG4gICAgICAgIDc4LFxuICAgICAgICAxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjksXG4gICAgICAgIDExNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDkyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMixcbiAgICAgICAgMjI2LFxuICAgICAgICA2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieUxZS2VhbTNmZ1pFRTRoQ204dlgrTGhBeDVXc3M5b2luRXQ3L29jamJRQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTMwMDQyNzI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDMDUyRDFCMjNEOTM5N0Q5RjI0NUQ1OEQ2QTg3MUM3OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY2NDUwNzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMUlBSUxnWFRRVHVyQndpcVRQU3EtUVwiLFxuICBcInBob25lSWRcIjogXCI2ZTNlN2JjNC1mN2MyLTRjNjUtYTlmMC1kODEwMTY4MTQyM2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMjMzLFxuICAgICAgNjcsXG4gICAgICAyMTAsXG4gICAgICA2NyxcbiAgICAgIDE0NCxcbiAgICAgIDEyMSxcbiAgICAgIDE3NyxcbiAgICAgIDkxLFxuICAgICAgMCxcbiAgICAgIDIwMCxcbiAgICAgIDE3NSxcbiAgICAgIDIzMyxcbiAgICAgIDEwOCxcbiAgICAgIDMxLFxuICAgICAgNjIsXG4gICAgICAzLFxuICAgICAgMjMxLFxuICAgICAgOTcsXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgMTc5LFxuICAgICAgMTMxLFxuICAgICAgNDksXG4gICAgICA4NyxcbiAgICAgIDIxMixcbiAgICAgIDIyMyxcbiAgICAgIDE3MyxcbiAgICAgIDQ3LFxuICAgICAgMjAyLFxuICAgICAgMTYzLFxuICAgICAgMjEwLFxuICAgICAgMjA2LFxuICAgICAgMTMwLFxuICAgICAgMTEyLFxuICAgICAgMTMyLFxuICAgICAgMjA2LFxuICAgICAgMTE5LFxuICAgICAgODcsXG4gICAgICA1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxRFlIWDhQNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzMDA0MjcyODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTE5NzY4Njc2MzEzMTQ6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQejN6WWNERU1UWng3SUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVqRVVIOGgwaFZZMENzOTRHWjhXM3RHcXg5aHRLdXIvUUd6WW5ndVdWUkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQlJHMkQ5SVZKNkhXckZvK3ovNjNqNEJUekMvKzc1Tm93L0ZXaVlSalRJWUh6U1Z3bzVMK0NCTzdFaFhuZnFpTXBjd1gwUW5OaVZkUEwvb1JEOGxsRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwienhoS2RFdGpEdFN6cUlSQUx0V1dEdUdsQ1NHUWo4WVBDeWxnQ0hTQUJVOU1QVlVLS1lidDNxTXlaQ2FKbm9DM25ndEd5RDMyWDF2VlhKdlFWN1dZREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzMDA0MjcyODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjY0NTA2NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
