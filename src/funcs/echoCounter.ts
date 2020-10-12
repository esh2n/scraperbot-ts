import { Message } from "discord.js";
import { client } from '../index';

import { scrapingCounter } from "../util/scraping";

((): void => {
	client.on('message', (message: Message) => {
		(async (): Promise<void> => {
			const content = message.content;
			if (message.author.bot) return;
			switch (true) {
				case /^\/counter (.+)$/.test(content): {
					const data = await scrapingCounter(RegExp.$1);
					message.channel.send(
						`
						📈OP.GGで${RegExp.$1}のカウンターチャンピオンを検索...
						`
					);
					message.channel.send(() => {
						for (let i=0; i<3; i++) {
							return
								`
								${data[0][i]}: ${data[1][i]}
								`
						}
					})
					break;
				}
				default:
					break;
			}
		})();
	});
})();