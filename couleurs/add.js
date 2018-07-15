const fs = require('fs');

function randomHexColor(){
	return '#' + Math.floor(Math.random()*16777215).toString(16);
}

module.exports = class creation {

	static action(message){
		if(message.content.startsWith('aléatoire') || message.content.startsWith('Aléatoire')){
		message.guild.createRole({
			name: message.author.id,
			color: randomHexColor()
		}).then(function(role) {
			message.member.addRole(role);
		});
		let data1 = fs.readFileSync('./guild.json/' + message.guild.id + '.json');
		let info = JSON.parse(data1);
		info.user = null;
		info.check = false;
		info.colors.push(message.author.id);
		let data2 = JSON.stringify(info);
		fs.writeFile('./guild.json/' + message.guild.id + '.json', data2, (error) => {});
		message.channel.send('RoleCouleur créé.');
		return;
		}

		if(!message.content.startsWith('#')) return message.channel.send('Couleur invalide. Tape "!stop" pour arrêter le prcessus.');
		
		try {
			message.guild.createRole({
				name: message.author.id,
				color: message.content
			}).then(function(role) {
				message.member.addRole(role);
			});
		} catch (e) {
			return message.channel.send('Couleur invalide.');
		}
		let data1 = fs.readFileSync('./guild.json/' + message.guild.id + '.json');
		let info = JSON.parse(data1);
		info.user = null;
		info.check = false;
		info.colors.push(message.author.id);
		let data2 = JSON.stringify(info);
		fs.writeFile('./guild.json/' + message.guild.id + '.json', data2, (error) => {});
		message.channel.send('RoleCouleur créé.');
		
	}

}