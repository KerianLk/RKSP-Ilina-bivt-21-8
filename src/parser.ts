import { xml2json, json2xml } from 'xml-js';
import { readFileSync } from 'fs';

interface IXMLParse {
    XMLParseRaw(doc:string): string
}
interface IXMLParseFromFile {
    XMLParseFromFile(path:string): string
}
interface IJsonParse {
    JsonParseRaw(doc:string): string
}
interface IJsonParseFromFile {
    JsonParseFromFile(path:string): string
}

export class JsonParser implements IXMLParse, IXMLParseFromFile {
    XMLParseFromFile(path:string): string {
        let data = readFileSync(path, 'utf-8');
        return this.XMLParseRaw(data)
    }
    XMLParseRaw(doc:string): string {
        return xml2json(doc, {compact: true, spaces: 4})
    }

}
export class XMLParser implements IJsonParse, IJsonParseFromFile {
    JsonParseFromFile(path:string): string {
        let data: string = readFileSync(path, 'utf-8');
        return this.JsonParseRaw(data)
    }
    JsonParseRaw(doc: string): string {
        return json2xml(doc)
    }

}