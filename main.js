const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

const method = require('./method.js');
	const test = require('./basics/test.js');
	const crea = require('./couleurs/creation.js');
	const add = require('./couleurs/add.js');
	const del = require('./couleurs/del.js');
	const stop = require('./couleurs/stop.js');

client.on('message', message => {
	if(message.author.id != '467847979198447620'){
		let data = fs.readFileSync('./guild.json/' + message.guild.id + '.json');
		let info = JSON.parse(data);
		if(stop.parse(message)) return;
		if(info.user == message.author.id){
			return add.action(message);
		}
		let commandUsed = test.parse(message) || crea.parse(message) || del.parse(message);
	}
});

client.login('process.env.BOT_TOKEN');