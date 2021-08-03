'use strict'
const KEY = 'bookDB';

var gBooks = [];
var gBookNames = ['zarry potter', 'New Moon', 'aclipse']
_createBooks();

function _createBook(bookName, price, rate = 0) {
    var numImg = getRandomIntInclusive(1, 3)
    return {
        id: makeId(),
        name: bookName,
        price: +price,
        imgNum: numImg,
        desc: makeLorem(),
        rate
    }
}

function _createBooks() {
    var loadedBooks = loadFromStorage(KEY)
    if (!loadedBooks || !loadedBooks.length) {
        loadedBooks =[]
        for (let i = 0; i < 3; i++) {
            var price = getRandomIntInclusive(1, 200)
            var addBook = _createBook(gBookNames[i], price)
            loadedBooks.push(addBook)
        }
    }

    gBooks = loadedBooks
    _saveBooksToStorage()
    return getBooks;
}



function getBooks() {
    return gBooks;
}



function RemoveBook(bookId) {
    
    gBooks = gBooks.filter(function (book) {
        return book.id !== bookId
    })
    //var bookIdx = gBooks.findIndex(function (book) {
    //    return book.id === bookId
    //})
    //gBooks.splice(bookIdx, 1)
    _saveBooksToStorage()
}




function addBook(name, price) {
    var book = _createBook(name, price);
    gBooks.unshift(book);
    _saveBooksToStorage()
}


function updateBook(bookId, bookPrice) {
    var currBook = getBookById(bookId)
    currBook.price = bookPrice;
    _saveBooksToStorage()
}

function getBookById(bookId) {
    var currBook = gBooks.find(function (book) {
        return book.id === bookId
    })
    return currBook;
}


function _saveBooksToStorage() {
    saveToStorage(KEY, gBooks)
}

function updateRating(bookId, minusOrPlus) {
    var currBook = getBookById(bookId)
    if (currBook.rate + minusOrPlus < 0 || currBook.rate + minusOrPlus > 10) return
    currBook.rate += minusOrPlus;
}


function sortTable(elSortBy) {

    if (elSortBy === 'name') {
        gBooks.sort(function (book1, book2) {
            var bookA = book1.name.toUpperCase();
            var bookB = book2.name.toUpperCase()
            if (bookA > bookB) return 1
            if (bookA < bookB) return -1
            return 0;
        });
    }
    else {

        if (elSortBy === 'price')
            return gBooks.sort((book1, book2) => book1.price - book2.price)
    }
    _saveBooksToStorage()
    return getBooks();
}


function setLang(lang) {
    gCurrLang = lang;
}