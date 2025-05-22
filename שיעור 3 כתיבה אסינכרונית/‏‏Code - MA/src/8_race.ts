import { setTimeout } from 'timers/promises';
import superagent, { options } from 'superagent'

async function timersRace() {
const url = `https://www.google.com/`;
const res = superagent.get(url).catch(err => console.log("URL finish"));
//const api = setTimeout(100);
const timeout = setTimeout(100000).then(() => console.log("timeout, please check later"));
await Promise.race([ timeout, res]);
console.log("after");
//clearTimeout(timeout);

}

timersRace();