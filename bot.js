const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
});
const devs = ["372417402849329153"]; /// الاي دي حقك
const karzoprfix = ["-"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
 
  if (message.content.startsWith(karzoprfix + 'ply')) {/////بلاينق
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}** Done Yugi`)
  } else
  if (message.content.startsWith(karzoprfix + 'wt')) {////واتشنق
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}** Done Yugi`)
  } else
  if (message.content.startsWith(karzoprfix + 'st')) {////ستريمنق
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  } else
  if (message.content.startsWith(karzoprfix + 'ls')) {/////////ليسننق
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}** Done Yugi`)
client.user.setStatus("dnd")
  }
});
client.login(process.env.BOT_TOKEN);
