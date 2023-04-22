import { promisify } from "util";
import { readFile, writeFile } from "fs";
import xml from "xml";

const readFilePromise = promisify(readFile);
const writeFilePromise = promisify(writeFile);

export async function convertJsonToXml() {
  const books = JSON.parse(
    await readFilePromise("./db.json", "utf8")
  ) as [
    {
      name: string;
      author: string;
      release_year: number;
      genre: string;
      number_of_pages: number
    }
  ];

  const xml_books = [
    {
      books: [
        books.map((item) => {
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
  await writeFilePromise("data.xml", xml_string, "utf8");
}


