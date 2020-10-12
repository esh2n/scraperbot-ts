import { Message } from "discord.js";
import { client } from '../index';

import { scrapingBio } from "../util/scraping";

((): void => {
	client.on('message', (message: Message) => {
		(async (): Promise<void> => {
			const content = message.content;
			if (message.author.bot) return;
			switch (true) {
				case /^\/bio (.+)$/.test(content): {
					const data = await scrapingBio(RegExp.$1);
					message.channel.send(
						`
						📈Twitterで${RegExp.$1}の自己紹介を検索...
						`
					);
					message.channel.send(
						`
						${data}
						`
					);
					break;
				}
				default:
					break;
			}
		})();
	});
})();