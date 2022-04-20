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
            if (content.includes("のまぼ") || content.includes("のまをぼ") || content.includes("ラボ") || content.includes("おはぼ") || content.includes("ぼ！")) {
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
            if (content.includes("ノマンボウ") || content.includes("のまんぼう")) {
                const sunfish = getSkinName_1.getSunfishAA();
                message.channel.send(`
						🙇‍♂️ @everyone
						`);
                message.channel.send(sunfish.map((row) => row));
                message.react('🐟');
            }
        })();
    });
})();
