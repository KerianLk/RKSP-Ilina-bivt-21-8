import { Book, XMLCreator } from "./book";
import { JsonParser, XMLParser } from "./parser";

const fs = require('fs');
function create_source_file(path: string): void {
    let b1: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);
    let b2: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);
    let b3: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);
    let b4: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);
    let b5: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);
    let b6: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);
    let b7: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);
    let b8: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);
    let b9: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);
    let b10: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);

    let books = [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10]
    fs.writeFileSync(path, XMLCreator(books), {compact: true, spaces: 4})
}

create_source_file('./db.xml')

const json_parser: JsonParser = new JsonParser()
let json_books = json_parser.XMLParseFromFile('./db.xml')
//console.log(json_books)
fs.writeFileSync('./db-converted.json', json_books)

//const xml_parser: XMLParser = new XMLParser()
//let xml_books = xml_parser.JsonParseRaw(json_books)
//console.log(xml_books)
//fs.writeFileSync('./db-reverse-converted.xml', xml_books)