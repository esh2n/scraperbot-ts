"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapingCounter = exports.scrapingBio = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const twitter = {
    browser: null,
    page: null,
    url: 'https://twitter.com/search?src=typed_query&f=user&q=',
    initialize: async () => {
        twitter.browser = await puppeteer_1.default.launch({
            headless: true,
            slowMo: 50,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        twitter.page = await twitter.browser.newPage();
    },
    getBio: async (username) => {
        try {
            await twitter.page.goto(twitter.url + username, { waitUntil: 'networkidle2' });
            await twitter.page.waitFor(1000);
            const users = await twitter.page.$$('div[data-testid="UserCell"]');
            await users[0].click();
            await twitter.page.keyboard.press(String.fromCharCode(13));
            await twitter.page.waitFor(1000);
            const data = await twitter.page.evaluate(() => {
                const bioDOM = document.querySelector('div[data-testid="UserDescription"]>span');
                const bio = bioDOM.innerHTML == null ? '' : bioDOM.innerHTML;
                return bio;
            });
            return data;
        }
        catch (error) {
            console.log(error);
            twitter.close();
        }
    },
    close: () => {
        twitter.browser.close();
    }
};
exports.scrapingBio = async (username) => {
    await twitter.initialize();
    const data = await twitter.getBio(username);
    await twitter.close();
    return data;
};
const getChampName_1 = require("../util/getChampName");
const counter = {
    browser: null,
    page: null,
    url: 'https://jp.op.gg/champion/',
    initialize: async () => {
        counter.browser = await puppeteer_1.default.launch({
            headless: true,
            slowMo: 50,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        counter.page = await counter.browser.newPage();
    },
    getCounter: async (champName) => {
        const champ = getChampName_1.getChampionName(champName);
        await counter.page.goto(counter.url + champ, { waitUntil: 'networkidle2' });
        await counter.page.waitFor(1000);
        const data = await counter.page.evaluate(() => {
            const counters = [];
            const winrates = [];
            const countersDOM = document.querySelectorAll('.champion-stats-header-matchup__table__champion');
            const winratesDOM = document.querySelectorAll('.champion-stats-header-matchup__table__winrate>b');
            countersDOM.forEach((counterDOM) => {
                const innerText = counterDOM.innerHTML.split('>')[1].trim();
                counters.push(innerText);
            });
            winratesDOM.forEach((winrateDOM) => winrates.push(winrateDOM.innerHTML.trim()));
            return [counters, winrates];
        });
        return data;
    },
    close: () => {
        counter.browser.close();
    }
};
exports.scrapingCounter = async (champName) => {
    await counter.initialize();
    const data = await counter.getCounter(champName);
    await counter.close();
    return data;
};
