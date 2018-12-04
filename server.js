/*
 * (C) 2018 J. Heuschen
 */
const Discord = require("discord.js");
const client = new Discord.Client();

var ready = true;

client.on('ready', () => {
  client.user.setActivity("Discord");
});

client.on('message', message => {
  
  if(message.startsWith("*"))
     {
       processCommand(message);
     }
  
  if(message.author.bot)
    return;
  
  if(!message.guild)
  {
    
    var msg = message.content.toLowerCase();
    if(message.content.toLowerCase() === "hi")
    {
      message.reply("Hello!");  
    } else if(message.content.toLowerCase() === "how are you?") {
      message.reply("I'm fine. What about you?");
    } else if(msg === "how are you" || msg === "how are u" || msg === "how are u?")
    {
      message.reply("I'm fine. What about you?"); 
    } else if(msg === "what are you doing?" || msg === "what are u doing?" || msg === "what are you doing" || msg === "what are u doing")
    {
      message.reply("I'm chatting with you."); 
    }
    return; 
  }
  
  if(message.content === ".scrim") {
    message.author.send("The Scrimmer | Help\n.scrim start --> Play Sound\n.scrim by --> Further information about The Scrimmer");
  } else if(message.content === ".scrim start")
  {
    if(ready) {
      ready = false;
      message.channel.send("Test");
      ready = true;
    } else {
      
    }
  } else if(message.content === ".scrim by")
  {
    message.author.send("The Scrimmer by JavaJHMalerBus");
  }
  
});

function processCommand(message)
{
  
}

client.login(process.env.BOT_TOKEN);
  
  
