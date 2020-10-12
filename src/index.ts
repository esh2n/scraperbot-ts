import { Client } from 'discord.js';

import * as dotenv from "dotenv";
const env = { ...(dotenv.config().parsed as any) };
const TOKEN = env.TOKEN;

export const client = new Client();
client.on('ready', () => {
  console.log('ready...');
});

const funcs: { [key: string]: string } = {
  // describe here your functions.
  echoCounter: './funcs/echoCounter',
  echoBio: './funcs/echoBio'
};

const loadFunctions = (funcsObj: { [key: string]: string }): void => {
  for (const name in funcsObj) {
      import(funcsObj[name]);
  }
};

loadFunctions(funcs);

client.login(TOKEN);
