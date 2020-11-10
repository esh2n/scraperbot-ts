"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const scraping_1 = require("../util/scraping");
const getChampName_1 = require("../util/getChampName");
(() => {
    index_1.client.on('message', (message) => {
        (async () => {
            const content = message.content;
            if (message.author.bot)
                return;
            switch (true) {
                case /^\/counter (.+)$/.test(content): {
                    const champName = RegExp.$1;
                    const fixedChampName = getChampName_1.getChampionName(champName);
                    message.channel.send(`
						📈OP.GGで${fixedChampName}のカウンターチャンピオンを検索中...
						`);
                    const data = await scraping_1.scrapingCounter(champName);
                    for (let i = 0; i < 3; i++) {
                        message.channel.send(`
								> ${i + 1}位: ${data[0][i]}: ${data[1][i]}
								`);
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
