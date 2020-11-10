import { Message } from "discord.js";
import { client } from '../index';

import { scrapingCounter } from "../util/scraping";
import { getChampionName } from "../util/getChampName";

((): void => {
	client.on('message', (message: Message) => {
		(async (): Promise<void> => {
			const content = message.content;
			if (message.author.bot) return;
			switch (true) {
				case /^\/counter (.+)$/.test(content): {
					const champName = RegExp.$1;
					const fixedChampName = getChampionName(champName);
					message.channel.send(
						`
						📈OP.GGで${fixedChampName}のカウンターチャンピオンを検索中...
						`
						);
					const data = await scrapingCounter(champName);
					for (let i=0; i<3; i++) {
					message.channel.send(
								`
								> ${i+1}位: ${data[0][i]}: ${data[1][i]}
								`
								)
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