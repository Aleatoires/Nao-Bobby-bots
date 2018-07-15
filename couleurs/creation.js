const fs = require('fs');
const Discord = require('discord.js');
const method = require('../method.js');

function randomHexColor(){
	return '#' + Math.floor(Math.random()*16777215).toString(16);
}

module.exports = class creation extends method {

	static match(message){
		return message.content.startsWith('!crea');
	}

	static action(message){
		let data1 = fs.readFileSync('./guild.json/' + message.guild.id + '.json');
		let info = JSON.parse(data1);
		for (var i = info.colors.length - 1; i >= 0; i--) {
			if(info.colors[i] == message.author.id) {
				message.channel.send('Tu as déjà un RoleCouleur ! Tape !del pour le supprimer.');
				return;
			}
		}
		if(info.user == null){
			const embed = new Discord.RichEmbed()
				.setTitle("Interface de création d'un RoleCouleur.")
				.setColor(randomHexColor())
				.addField('Couleur aléatoire :','Envoie "aléatoire" après ce message.')
				.addField('Couleur personnalisée :',
					'Va sur [ce lien](https://www.hexcolortool.com) pour créer ta couleur. En suite, envoie ta couleur sous la forme héxadécimale. (Exemple : ' + randomHexColor() + ')');

			message.channel.send({embed});

			info.user = message.author.id;
			info.check = true;
			let data2 = JSON.stringify(info);
			fs.writeFile('./guild.json/' + message.guild.id + '.json', data2, (error) => {});
			setTimeout(function(){
				let data1 = fs.readFileSync('./guild.json/' + message.guild.id + '.json');
				let info = JSON.parse(data1);
				if(info.check && info.user != null){
					message.channel.send('<@' + message.author.id + '>, temps écoulé !');
					info.user = null;
					info.check = false;
					let data2 = JSON.stringify(info);
					fs.writeFile('./guild.json/' + message.guild.id + '.json', data2, (error) => {});
				}}, 10000);
		} else {
			return message.channel.send("Le processus de création d'un RoleCouleur est déjà en cours.");
		}
		return;
	}

}