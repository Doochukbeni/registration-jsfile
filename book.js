class Book {
    constructor (
    title,
    author,
    ISBN,
    pubyear,
    pageNumber,
    currentPage,
    readStatus
    ) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.pubyear =pubyear;
        this.pageNumber = pageNumber;
        this.currentPage = currentPage;
        this.readStatus = readStatus;
    }
    updateCurrentPage(newCurrentPage){
        this.currentPage = newCurrentPage;
    }

    updateReadStatus(newReadStatus) {
        this.readStatus = newReadStatus;
    }
}

export default Book;