import { Client, EmbedBuilder, GatewayIntentBits, WebhookClient } from "discord.js";
import {config} from 'dotenv';
config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const webhookClient = new WebhookClient({
  url: process.env.WEBHOOK_URL as string,
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

client.on("messageCreate", (message) => {
  console.log("Messages", message);
  
  if(message.webhookId === "") return;

  const embeds = message.embeds;
  console.log("Embeds: ", embeds);
  
  if(embeds) {
    const description = embeds[0]?.description;
    const author = embeds[0]?.author;
    console.log("Author", author);
    console.log("===========================================================================================");
    const gitHubUsername = author?.name;
    if(gitHubUsername === 'haddercone' && description?.includes("/bounty")) {
      const bountyAmount = description.split(" ").at(-1) // get amount
      webhookClient.send( {
        content: bountyAmount
      })
    } 
    
  }
  

});

client.login(process.env.TOKEN);
