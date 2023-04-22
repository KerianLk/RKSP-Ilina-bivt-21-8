import { Parser } from "./parser";
import { Book } from "./book";
import xml from "xml";
import { writeFileSync } from "fs";


const fs = require('fs');
function create_source_file(path: string): void {
    let b1: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);
    let b2: Book = new Book("Гарри Поттер и Дары Смерти", 'Джоан Роулинг', 2003 ,'Фэнтези', 544);
    let b3: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);
    let b4: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);
    let b5: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);
    let b6: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);
    let b7: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);
    let b8: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);
    let b9: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);
    let b10: Book = new Book("Зелёная миля", 'Стивен Кинг', 2014 ,'Ужасы', 384);

    let books = [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10]
    fs.writeFileSync(path,JSON.stringify(books))
}

create_source_file('./db.json')

let prs = new Parser;
let data = prs.get_json('./db.json');
prs.to_xml('./db.xml', './db.json');



