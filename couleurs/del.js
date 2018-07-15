const fs = require('fs');
const method = require('../method.js');

module.exports = class del extends method {

	static match(message){
		return message.content.startsWith('!del');
	}

	static action(message){
		let data1 = fs.readFileSync('./guild.json/' + message.guild.id + '.json');
		let info = JSON.parse(data1);
		let check = false;
		for (var i = info.colors.length - 1; i >= 0; i--) {
			if(info.colors[i] == message.author.id) {
				message.guild.roles.find('name', message.author.id).delete();
				info.colors.splice(i,1);
				let data2 = JSON.stringify(info);
				fs.writeFile('./guild.json/' + message.guild.id + '.json', data2, (error) => {});
				message.channel.send("RoleCouleur supprimé !");
				check = true;
			}
		}
		if(check == false){
			message.channel.send("Tu n'as pas de RoleCouleur.");
		}
	}

}