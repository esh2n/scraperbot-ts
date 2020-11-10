import { Message } from "discord.js";
import { client } from '../index';


((): void => {
	client.on('message', (message: Message) => {
		((): void => {
			const content = message.content;
			if (message.author.bot) return;
			switch (true) {
				case /^\/help lolbot$/.test(content): {
					message.channel.send(
						`
						✨ __**LoL botの使い方**__
\`\`\`md
1. \`/yourgg サモナーネーム\`: 📈 YOUR.GGでサモナーを検索
2. \`/opgg サモナーネーム\`: 📈 OP.GGでサモナーを検索
3. \`/champgg チャンピオン\`: 📈 CHAMPION GGでチャンピオン情報を検索
4. \`/ugg チャンピオン\`: 📈 U.ggでチャンピオン情報を検索
5. \`/dra info\`: 🐉 リュウさん☆の情報を検索
6. \`/bio 名前\`: 👦 Twitterのバイオ情報を検索
7. \`/opgg サモナーネーム\`: 📈 OP.GGでを検索
8. \`のまぼ\`: 👨‍👨‍👧‍👦 ノーマルを募集
9. \`ぱちぼ\`: 🗑 パチンコを募集\`\`\`
`
);
					message.react('🥺');
					break;
				}
				default:
					break;
			}
		})();
	});
})();