import { XMLParser } from './parser'
import fs from 'fs';

const xml_parser: XMLParser = new XMLParser()
let data = xml_parser.JsonParseFromFile('db.json')
console.log(data)
fs.writeFileSync('data.xml', data)


