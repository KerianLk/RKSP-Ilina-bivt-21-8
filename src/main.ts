
import { writeFileSync } from 'fs'
import { XMLParser } from './parser'

const fs = require('fs');

const xml_parser: XMLParser = new XMLParser()
let xml_doc = xml_parser.JsonParseFromFile('db.json')
console.log(xml_doc)
fs.writeFileSync('data.xml', xml_doc)


