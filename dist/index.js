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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const discord_js_1 = require("discord.js");
const http_1 = __importDefault(require("http"));
const querystring_1 = __importDefault(require("querystring"));
const TOKEN = process.env.TOKEN;
http_1.default.createServer(function (req, res) {
    if (req.method == 'POST') {
        let data = "";
        req.on('data', function (chunk) {
            data += chunk;
        });
        req.on('end', function () {
            if (!data) {
                console.log("No post data");
                res.end();
                return;
            }
            const dataObject = querystring_1.default.parse(data);
            console.log("post:" + dataObject.type);
            if (dataObject.type == "wake") {
                console.log("Woke up in post");
                res.end();
                return;
            }
            res.end();
        });
    }
    else if (req.method == 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Discord Bot is active now\n');
    }
}).listen(3000);
exports.client = new discord_js_1.Client();
exports.client.on('ready', () => {
    console.log('ready...');
    if (exports.client.user !== null) {
        exports.client.user.setPresence({ activity: { name: 'パチンコ' } });
    }
});
const funcs = {
    echoCounter: './funcs/echoCounter',
    echoBio: './funcs/echoBio',
    callEveryone: './funcs/callEveryone',
    service: './funcs/services',
    help: './funcs/help',
};
const loadFunctions = (funcsObj) => {
    for (const name in funcsObj) {
        Promise.resolve().then(() => __importStar(require(funcsObj[name])));
    }
};
loadFunctions(funcs);
exports.client.login(TOKEN);
