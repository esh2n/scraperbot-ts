"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const discord_js_1 = require("discord.js");
const TOKEN = process.env.TOKEN;
exports.client = new discord_js_1.Client();
exports.client.on('ready', () => {
    console.log('ready...');
});
const funcs = {
    echoCounter: './funcs/echoCounter',
    echoBio: './funcs/echoBio'
};
const loadFunctions = (funcsObj) => {
    for (const name in funcsObj) {
        Promise.resolve().then(() => __importStar(require(funcsObj[name])));
    }
};
loadFunctions(funcs);
exports.client.login(TOKEN);
