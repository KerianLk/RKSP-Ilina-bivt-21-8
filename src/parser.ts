import { json2xml } from 'xml-js';
import { readFileSync } from 'fs';


interface IJsonParse {
    JsonParseRaw(doc:string): string
}
interface IJsonParseFromFile {
    JsonParseFromFile(path:string): string
}

export class XMLParser implements IJsonParse, IJsonParseFromFile {
    JsonParseFromFile(path:string): string {
        let data:string = readFileSync(path, 'utf-8');
        return this.JsonParseRaw(data)
    }
    JsonParseRaw(doc: string): string {
        return json2xml(doc, {compact:true, spaces: 5})
    }
}

