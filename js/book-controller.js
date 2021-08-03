'use strict'
var gBookId
function onInit() {
    doTrans()
    renderBooks()
}

function renderBooks() {
    var books = getBooks();
    var strHTML = ''
    var bookInTable = books.map(function (book) {
        return `<tr><td>${book.id}</td>
        <td>${book.name}</td>
        <td>${book.price}</td>
        <td><button  class="btn btn-primary read" data-trans='read'  onclick="onShowDetails('${book.id}')">READ</button></td>
        <td><button  class="btn btn-warning update" data-trans='update'  onclick="onUpdateBook('${book.id}')">Update</button></td>
        <td><button   class="btn btn-danger delete" data-trans='delete'  onclick="onRemoveBook('${book.id}',event)">Delete</button></td>
        <td>
        <button  class="rate btn btn-light btn-sm" onclick="onUpdateRating('${book.id}','-')">-</button>
        <span>${book.rate}</span>
        <button  class="rate btn btn-light btn-sm"  onclick="onUpdateRating('${book.id}','+')">+</button>
        </td>
        </tr>`
    })
    strHTML += bookInTable.join('')
    var el = document.querySelector('tbody')
    el.innerHTML = strHTML;
    doTrans()
}



function onRemoveBook(bookId, ev) {
    console.log(ev);
    ev.stopPropagation();
    RemoveBook(bookId);
    console.log('HI');
    renderBooks(bookId);
}

function onAddBook() {

    var name = (document.querySelector('[name=newBookName]').value)
    var price = (document.querySelector('[name=newBookPrice]').value)
    if (!name || !price) return
    addBook(name, price)
    document.querySelector('[name=newBookName]').value = ''
    document.querySelector('[name=newBookPrice]').value = ''
    renderBooks();
}

function onUpdateBook(bookId) {
    gBookId = bookId
    var elModal = document.querySelector('.modal.modal-new-price')
    elModal.style.display = 'block';

    renderBooks();
}


function onUpdatePrice() {
    var newBookPrice = (document.querySelector('[name=new-price]').value)
    updateBook(gBookId, newBookPrice)
    document.querySelector('.modal.modal-new-price').style.display = 'none';
    renderBooks()
}

function onShowDetails(bookId) {
    openModal()
    var book = getBookById(bookId)
    var elModal = document.querySelector('.modal')
    console.log(elModal);
    elModal.querySelector('.modal-title').innerHTML = book.name
    elModal.querySelector('span').innerHTML = `${book.rate}`
    elModal.querySelector('p').innerHTML = book.desc
    elModal.querySelector('.img').innerHTML = `<img src="./img/book${book.imgNum}.jpg">`
    elModal.hidden = false;

}



function onCloseModal() {
    document.querySelector('.modal').style.display = 'none';
}

function onUpdateRating(bookId, charMinusOrPlus) {
    var minusOrPlus = (charMinusOrPlus === '+') ? 1 : -1
    updateRating(bookId, minusOrPlus)
    renderBooks()
}


function onSortTable(elSortBy) {
    sortTable(elSortBy)
    renderBooks();

}

function onSetLang(lang) {
    setLang(lang)
    if (lang === 'he') {
        document.body.classList.add('rtl')
    } else {
        document.body.classList.remove('rtl')
    }
    doTrans();
    renderBooks();
}

function openModal() {
    document.querySelector('.modal').style.display = 'block';
}

