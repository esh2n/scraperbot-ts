import puppeteer from 'puppeteer';

const twitter = {
	browser: null as any,
	page: null as any,
	url: 'https://twitter.com/search?src=typed_query&f=user&q=',

	initialize: async (): Promise<void> => {
		twitter.browser = await puppeteer.launch({
			headless: true,
			slowMo: 50,
			args: ['--no-sandbox', '--disable-setuid-sandbox']
		});

		twitter.page = await twitter.browser.newPage();
	},

	getBio: async (username: string): Promise<string> => {
		await twitter.page.goto(twitter.url + username, {waitUntil: 'networkidle2'});
		await twitter.page.waitFor(1000);

		const users = await twitter.page.$$('div[data-testid="UserCell"]');
		await users[0].click();
		await twitter.page.keyboard.press(String.fromCharCode(13));
		await twitter.page.waitFor(1000);

		const data = await twitter.page.evaluate(() => {
			const bioDOM = document.querySelector('div[data-testid="UserDescription"]>span');
			const bio: string|null = bioDOM!.innerHTML == null ? '' : bioDOM!.innerHTML;
			return bio;
		});
		return data;
	},

	close: (): void => {
    twitter.browser.close();
  }
};


export const scrapingBio = async(username: string): Promise<any> => {
	await twitter.initialize();
	const data = await twitter.getBio(username);
	await twitter.close();

	return data;
}

import { getChampionName } from "../util/getChampName";

const counter = {
	browser: null as any,
	page: null as any,
	url: 'https://jp.op.gg/champion/',

	initialize: async (): Promise<void> => {
		counter.browser = await puppeteer.launch({
			headless: true,
			slowMo: 50,
			args: ['--no-sandbox', '--disable-setuid-sandbox']
		});

		counter.page = await counter.browser.newPage();
	},

	getCounter: async (champName: string): Promise<[]> => {
		const champ = getChampionName(champName);
		await counter.page.goto(counter.url + champ, {waitUntil: 'networkidle2'});
		await counter.page.waitFor(1000);

		const data = await counter.page.evaluate(() => {
			const counters: Array<string> = [];
			const winrates: Array<string> = [];
			const countersDOM = document.querySelectorAll('.champion-stats-header-matchup__table__champion');
			const winratesDOM = document.querySelectorAll('.champion-stats-header-matchup__table__winrate>b');

			countersDOM.forEach((counterDOM) => {
				const innerText = counterDOM.innerHTML.split('>')[1].trim();
				counters.push(innerText)
			});
			winratesDOM.forEach((winrateDOM) => winrates.push(winrateDOM.innerHTML.trim()));
			return [counters, winrates];
		});

		return data;
	},

	close: (): void => {
    counter.browser.close();
  }
};

export const scrapingCounter = async(champName: string): Promise<any> => {
		await counter.initialize();
		const data = await counter.getCounter(champName);
		await counter.close();

		return data;
}