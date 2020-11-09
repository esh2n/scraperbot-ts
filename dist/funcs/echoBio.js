"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const scraping_1 = require("../util/scraping");
(() => {
    index_1.client.on('message', (message) => {
        (async () => {
            const content = message.content;
            if (message.author.bot)
                return;
            switch (true) {
                case /^\/bio (.+)$/.test(content): {
                    const data = await scraping_1.scrapingBio(RegExp.$1);
                    message.channel.send(`
						📈Twitterで${RegExp.$1}の自己紹介を検索...
						`);
                    message.channel.send(`
						${data}
						`);
                    break;
                }
                default:
                    break;
            }
        })();
    });
})();
