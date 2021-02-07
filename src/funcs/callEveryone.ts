import { Message } from "discord.js";
import { client } from '../index';

import { getSkinName, getSunfishAA } from "../util/getSkinName";


((): void => {
	client.on('message', (message: Message) => {
		((): void => {
			const content = message.content;
			if (message.author.bot) return;
				if (content.includes("のまぼ")) {
					message.channel.send(
						`
						🙇‍♂️ @everyone
						> ${message.author.username}さんがノーマル募集中！
						`
					);
					message.react('🥺');
				}

				if (content.includes("ぱちぼ")) {
					message.channel.send(
						`
						🙇‍♂️ @パチカス
						> ${message.author.username}さんがパチンコ募集中！
						`
					);
					message.react('🥺');
				}

				if (content.includes("ノマーボ")) {
					const skinPrefix = getSkinName();
					message.channel.send(
						`
						🙇‍♂️ @everyone
						> ${skinPrefix + message.author.username}さんが${skinPrefix}ノマーボ募集中！
						`
					);
					message.react('🥺');
				}

				if (content.includes("ノマンボウ") || content.includes("のまんぼう")) {
					const sunfish = getSunfishAA();
					sunfish.map((row)=> {
						console.log(row)
					})
					message.channel.send(
						`
						🙇‍♂️ @everyone
						`
					);
						sunfish.map((row)=> {
							message.channel.send(
								`
								${row}
								`
							);
						})
					message.react('🥺');
				}

		})();
	});
})();