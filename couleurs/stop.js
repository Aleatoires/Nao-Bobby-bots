const fs = require('fs');
const method = require('../method.js');

module.exports = class stop extends method {

	static match(message){
		return message.content.startsWith('!stop');
	}

	static action(message){
		let data1 = fs.readFileSync('./guild.json/' + message.guild.id + '.json');
		let info = JSON.parse(data1);
		info.user = null;
		info.check = false;
		let data2 = JSON.stringify(info);
		fs.writeFile('./guild.json/' + message.guild.id + '.json', data2, (error) => {});
		message.channel.send('Processus arrêté.');
	}

}