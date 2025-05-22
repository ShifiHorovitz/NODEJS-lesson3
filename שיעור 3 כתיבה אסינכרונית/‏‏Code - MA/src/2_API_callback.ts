const fs = require('fs');
const superagent = require('superagent') as typeof import('superagent');
type Res = import('superagent').Response;
//import fs from 'fs';
//import superagent, {Response} from 'superagent'
let to :string= "ILS";
let amount :number= 1;
const writeCallback = function (err: any)
{
    if (err) {
        console.log("Failed writing result to file:", err)
    }
    else console.log("Finish to write")
}
const getCallback = function (err: any, res: Res)
 {
    let currency: number = 1;
    if (err) {
        console.log(`API request to the url has failed: ${err}`)
    }
    else {  
        currency = res.body.rates[to];
    }
    const result = currency * amount;

    fs.writeFile('output.txt', result.toString(),writeCallback );
}
const readCallBack = function (err: any, data: Buffer) 
{
    if (err) {
        console.log("Failed reading input data:", err);
        return;
    }
    console.log(data.toString());
    const input = data.toString().split(" ");
    const from = input[0];
    to = input[1];
    amount = parseInt(input[2]);
    
    const url = `https://api.frankfurter.dev/v1/latest?from=${from}&to=${to}`;
    superagent.get(url, getCallback);
}
fs.readFile('src/input.txt', readCallBack);
//npx ts-node src/2_nested_callback.ts
