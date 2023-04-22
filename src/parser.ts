import { promisify } from "util";
import { readFileSync, writeFileSync } from "fs";
import xml from "xml";
import { Book } from "./book";
export const fs = require('fs');
export class Parser{

    get_json(path: string){
  return JSON.parse(
    fs.readFileSync(path)
  ) as [
    {
      name: string;
      author: string;
      release_year: number;
      genre: string;
      number_of_pages: number
    }
  ];
}
to_xml(path:string, source: string){
  const xml_books = [
    {
      books: [
        this.get_json(source).map((item) => {
          return {
            book: [
              {
                _attr: {
                    author: item.author,
                    release_year: item.release_year,
                    genre: item.genre,
                    number_of_pages: item.number_of_pages
                },
              },
              item.name,
            ],
          };
        }),
      ],
    },
  ];
  const xml_string = xml(xml_books);
  fs.writeFileSync(path, xml_string, "utf8");
}
}
