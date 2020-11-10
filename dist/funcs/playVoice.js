"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const path_1 = __importDefault(require("path"));
(() => {
    index_1.client.on('message', (message) => {
        (async () => {
            const content = message.content;
            if (message.author.bot)
                return;
            switch (true) {
                case /^\/fei$/.test(content): {
                    if (!message.guild)
                        return;
                    if (!message.member)
                        return;
                    if (message.member.voice.channel) {
                        try {
                            const connection = await message.member.voice.channel.join();
                            const dispatcher = connection.play(path_1.default.join(__dirname, './../../assets/voice/fei/fei_1.mp3'));
                            dispatcher.on('start', () => {
                                console.log('audio is now playing!');
                            });
                            dispatcher.on('finish', () => {
                                console.log('Finished playing!');
                            });
                            dispatcher.destroy();
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }
                    else {
                        message.reply('You need to join a voice channel first!');
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
