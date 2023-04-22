export class Book {
    name: string
    author: string
    release_year: number
    genre: string
    number_of_pages: number
    constructor(name: string,
        author: string,
        release_year: number,
        genre: string,
        number_of_pages: number) {
            this.name = name
            this.author = author
            this.genre = genre
            this.release_year = release_year
            this.number_of_pages = number_of_pages
    }
}

export function XMLCreator(books: Book[]): string {
    let start_string = '<books>'
    let content =''
    let end_string = '</books>'
    for (var b of books) {
        content+='\n<book>'
        content+='\n<name>' +b.name + '</name>'
        content+='\n<author>' + b.author + '</author>'
        content+='\n<release_year>' + b.release_year + '</release_year>'
        content+='\n<genre>' + b.genre + '</genre>'
        content+='\n<number_of_pages>' + b.number_of_pages + '</number_of_pages>'
        content+='\n</book>'
      }
    return start_string + content + end_string
}