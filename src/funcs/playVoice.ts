import { Message } from "discord.js";
import { client } from '../index';

import path from 'path';

((): void => {
	client.on('message', (message: Message) => {
		(async (): Promise<void> => {
			const content = message.content;
			if (message.author.bot) return;
			switch (true) {
				case /^\/fei$/.test(content): {
					if (!message.guild) return;
					if (!message.member) return;

					if (message.member.voice.channel) {
						try {
							const connection = await message.member.voice.channel.join();
							const dispatcher = connection.play(path.join(__dirname, './../../assets/voice/fei/fei_1.mp3'));
							dispatcher.on('start', () => {
								console.log('audio is now playing!');
						});
							dispatcher.on('finish', () => {
								console.log('Finished playing!');
							});
							dispatcher.destroy();
						} catch (error) {
							console.log(error);
						}

					} else {
						message.reply('You need to join a voice channel first!');
					}
					message.react('🥺');
					break;
				}
				default:
					break;
			}
		})();
	});
})();