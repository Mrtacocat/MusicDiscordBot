require('dotenv').config();
const Discord = require("discord.js")
const { REST, Routes } = require("discord.js")
const keepAlive = require("./server")
const ytdl = require("ytdl-core")
const {prefix, clientId} = require("./config.json")
const { SlashCommandBuilder } = require('@discordjs/builders');

const rest = new REST().setToken(process.env.TOKEN);
const queue = new Map()
const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.GuildVoiceStates,
  ],
});

// DELETE COMMANDS
/*
rest.delete(Routes.applicationCommand(clientId, '1180593486328778823'))
	.then(() => console.log('Successfully deleted application command'))
	.catch(console.error);*/

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.once("ready", () => {
  console.log("Ready!");
});

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});



keepAlive()
client.login(process.env.TOKEN);
