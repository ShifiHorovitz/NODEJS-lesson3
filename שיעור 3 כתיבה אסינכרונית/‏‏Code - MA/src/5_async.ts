import { promises } from "fs";

async function readFileAsync(filePath: string): Promise<string> {
    const content = await promises.readFile(filePath, 'utf8');
    promises.writeFile(filePath, content).then(() =>console.log( "finish write")).catch((err)=> console.log(err));
    console.log("File content:", content);
    return content;
} 

readFileAsync("src/file.txt");//.then(() => console.log("finish"));
console.log("after all");
/*async function readAllFile()
{
    await readFileAsync("src/file1.txt")
    await readFileAsync("src/file1.txt")
    await readFileAsync("src/file1.txt")
}*/