//#ENJOY BRO😍
// Credit: KERM|KgTech
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "punta10020@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Ch77a/TAKA_MD_V";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/CS983iG1umoBvdwbVpf2yg";
global.website = process.env.GURL || "https://chat.whatsapp.com/CS983iG1umoBvdwbVpf2yg";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/a/d7sUWTw.jpeg";
global.devs = "https://wa.me/237672334928 , https://wa.me/237672334938";
global.sudo = process.env.SUDO || "237672334938";
global.owner = process.env.OWNER_NUMBER || "237672334938";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://imgur.com/a/d7sUWTw.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kata-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEFpWnVjZ2EyWnFERm0xV21HZ2tQL09reVVjM3BUR2xWMFpVcVpWdk9HST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVJsOWxpZndGbzFkU1hPeE1GeFZ0Sk1vRDZBZ0VJS1FEVVBFTEwyT2IzOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLS0hjMkMrTjZxOUdLUHlQQ1FUemdabWlNVmY2M2ZJS3Faa0ZLcnRoSTBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXK3pDSjhBa0ljcTJXS3V4L2gwdWhlZTFVdWJXaGJySkNNZXZGT0pKeW04PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdNODZLd3VKOE5LNmpFaEVNT01IaGhoM2hvTk8zYm9JTWxjc0VxWDU0Rms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNmalRvK201UkNnaCtFS0xCeVVvdXhBTFhoektMKzViaEZjWjhDZ3h2R009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFzZEtGZzN1cmp4SlR2enFwYk9jZHdoWk9Lb3F3SVJpY3orU3lDVGNXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWN1QVpBbVZkVUd5MzF0SlpYc3hGRnpSOUVRcExFdUFGODJ2UXRhVDduZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iis3cVRoNkZvdTRoemFwOS9KVlRIL1NpNXZGZnN2ajkxMk9xeEFEVXFZTGZSTlNZeVNqTU02am1pbStXeDJwYjZpeDNzWlBKUmdFSC9LaUtYYWEzcGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQzLCJhZHZTZWNyZXRLZXkiOiJpbmhTZXhUYW5JQjJKS09pdlg4TmFXSEd3ZVQ3bnF6Z2NjUFZOUVl2elpVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMeElPQS13bVQ2eXpNN2dqa3ZIYUp3IiwicGhvbmVJZCI6ImUzYWViM2IwLTBkMGYtNDdmMC04ZDY1LTQ0OWRmZWQ4MDNhMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0WXpkbUVacFNjbjZpR2xrNXBjeVMzSkU1ODA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFVxb0FWWmlveWtIWVg0NDZJcHAxa2l1bGNZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlAyMUNMOERNIiwibWUiOnsiaWQiOiIyMzc2NzIzMzQ5Mzg6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJKb3JkYW5lIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKRGxvbndRMjZQRHVRWVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBWTh0VUZlNi81RnRuRSs3SmVuNXhNVWhMVkZIMm5McnlRZnA4enh6Tm5nPSIsImFjY291bnRTaWduYXR1cmUiOiJVTVpYdVlaVExnZk04RnArNXFONEZKZGZtY1hsTnZDa3lWYUlMQzFhbW5yNmprdzFycHdTVnYzTnJKZ1VKY29JNGthdFB1U2FsVWlOUVIrekFQV0FEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUWkzZTJCai9aU2w5WTJaY09PQnZ2SHNpQVJuTWZSdWFRM1E0bVVRQ1pPYmpiUFlLWXMrWE1KRTk1a0pJWWZWTFZpVUhIcm01SkNiUVVQMjBRUDd6amc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2NzIzMzQ5Mzg6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRR1BMVkJYdXYrUmJaeFB1eVhwK2NURklTMVJSOXB5NjhrSDZmTThjelo0In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxMjUyNzEzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZoKyJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`jordane j`",
  author: process.env.PACK_AUTHER || "jordane",
  packname: process.env.PACK_NAME || "FH",
  botname: process.env.BOT_NAME || "jordan",
  ownername: process.env.OWNER_NAME || "jirdan",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "TAKA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
