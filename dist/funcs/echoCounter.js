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
                case /^\/counter (.+)$/.test(content): {
                    const data = await scraping_1.scrapingCounter(RegExp.$1);
                    message.channel.send(`
						📈OP.GGで${RegExp.$1}のカウンターチャンピオンを検索...
						`);
                    for (let i = 0; i < 3; i++) {
                        message.channel.send(`
								${data[0][i]}: ${data[1][i]}
								`);
                    }
                    break;
                }
                default:
                    break;
            }
        })();
    });
})();
