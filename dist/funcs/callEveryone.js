"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const getSkinName_1 = require("../util/getSkinName");
(() => {
    index_1.client.on('message', (message) => {
        (() => {
            const content = message.content;
            if (message.author.bot)
                return;
            if (content.includes("のまぼ")) {
                message.channel.send(`
						🙇‍♂️ @everyone
						> ${message.author.username}さんがノーマル募集中！
						`);
                message.react('🥺');
            }
            if (content.includes("ぱちぼ")) {
                message.channel.send(`
						🙇‍♂️ @パチカス
						> ${message.author.username}さんがパチンコ募集中！
						`);
                message.react('🥺');
            }
            if (content.includes("ノマーボ")) {
                const skinPrefix = getSkinName_1.getSkinName();
                message.channel.send(`
						🙇‍♂️ @everyone
						> ${skinPrefix + message.author.username}さんが${skinPrefix}ノマーボ募集中！
						`);
                message.react('🥺');
            }
        })();
    });
})();
