const method = require('../method.js');

module.exports = class test extends method {

	static match(message){
		return message.content.startsWith('test');
	}

	static action(message){
		message.channel.send(message.author.id);
	}

}

/*.then(function (message) {
					message.react('❎');
					message.react('✅');
					const filter1 = (reaction, user) => reaction.emoji.name === '❎' && user.id === idUser;
					message.awaitReactions(filter1, { time: 100000 })
					  .then(collected => non = collected.size)
					  .catch(console.error);
					const filter2 = (reaction, user) => reaction.emoji.name === '✅' && user.id === idUser;
					message.awaitReactions(filter2, { time: 1 })
					  .then(collected => oui = collected.size)
					  .catch(console.error);
					if (oui>non) {
						message.guild.removeRole(message.guild.roles.find('name', message.author.id));
						info.colors[i] = "";
						let data2 = JSON.stringify(info);
						fs.writeFile('./guild.json/' + message.guild.id + '.json', data2, (error) => {});
					} else if (non>oui){
						message.channel.send('Ok. c:');
					} else {
						message.channel.send('Temps écoulé !');
						return
					}
*/