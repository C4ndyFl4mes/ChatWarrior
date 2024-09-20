"use strict";

// Require the needed classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

// Require additional information
require('dotenv').config();
const TOKEN = process.env.DISCORD_TOKEN;

// Initiating client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Log the client
client.once(Events.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord
client.login(TOKEN);
