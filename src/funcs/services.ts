import { Message } from "discord.js";
import { client } from '../index';

import { getChampionName } from "../util/getChampName";

((): void => {
	client.on('message', (message: Message) => {
		((): void => {
			const content = message.content;
			if (message.author.bot) return;
			switch (true) {
				case /^\/yourgg (.+)$/.test(content): {
					const user = RegExp.$1;
					message.reply(
						`
📈SN: ${user}をYOUR.GGで検索...
					> https://your.gg/jp/profile/${user}
					`
					);
					break;
				}
				case /\/opgg (.+)$/.test(content): {
					const user = RegExp.$1;
					message.reply(
						`
📈SN: ${RegExp.$1}をOP.GGで検索...
					> https://jp.op.gg/summoner/userName=${user}
					`
					);
				}
					break;
				case /^\/krbuild (.+)$/.test(content):
					break;
				case /^\/champgg (.+)/.test(content): {
					const champSearchName = RegExp.$1;
					const championGG = getChampionName(champSearchName);
					if (championGG !== 'notFound') {
						message.reply(
							`
📈CHAMPION GGで${champSearchName}の情報を検索...
					> https://champion.gg/champion/${championGG}
					`
						);
					} else {
						message.reply(
							`
📈CHAMPION GGで${champSearchName}の情報を検索...
					> お探しのチャンピオンは見つかりませんでした。
					`
						);
					}
				}
					break;
				case /^\/ugg (.+)/.test(content): {
					const uggSearchName = RegExp.$1;
					const uGG = getChampionName(uggSearchName);
					if (uGG !== 'notFound') {
						message.reply(
							`
📈U.GGで${uggSearchName}の情報を検索...
					> https://u.gg/lol/champions/${uGG.toLowerCase()}/build
					`
						);
					} else {
						message.reply(
							`
📈CHAMPION GGで${uggSearchName}の情報を検索...
					> お探しのチャンピオンは見つかりませんでした。
					`
						);
					}
				}
					break;
				case /^\/dra info$/.test(content):
					message.reply(
						`
🐉リュウさん☆の配信コミュニティはこちら...
					> https://com.nicovideo.jp/community/co1210870

🐲リュウさん☆のTwitterはこちら...
					> https://twitter.com/dragonngt
					`
					);
					break;
				default:
					break;
			}
		})();
	});
})();