var gTrans = {
    'shop-title': {
        en: 'books Shop',
        es: 'librería',
        he: 'חנות ספרים'
    },
    'add-book': {
        en: 'add-book',
        es: 'Agregar un libro',
        he: 'הוסף ספר',
    },
    title: {
        en: 'title',
        es: 'título',
        he: 'שם הספר',
    },
    price: {
        en: 'price',
        es: 'precio',
        he: 'מחיר'
    },
    'Id-num': {
        en: 'id',
        es: 'identificación',
        he: 'מספר סידורי',
    },
    actions: {
        en: 'actions',
        es: 'comportamiento',
        he: 'פעולות',
    },
    rating: {
        en: 'Book rating',
        es: 'Calificación del libro',
        he: 'דירוג',
    },
    add: {
        en: 'Add',
        es: 'Aggregar',
        he: 'הוסף',
    },
    'rate-modal': {
        en: 'rate',
        es: 'Velocidad',
        he: 'ציון',
    },
    read: {
        en: 'read',
        es: 'leer',
        he: 'קריאה',
    },
    update: {
        en: 'update',
        es: 'actualizar',
        he: 'עדכון',
    },
    delete: {
        en: 'delete',
        es: 'Eliminar',
        he: 'מחיקה',
    },
    close: {
        en: 'close',
        es: 'cerrar',
        he: 'סגירה',
    },
    'new-book-name': {
        en: 'Enter book name',
        es: 'Ingrese el nombre del libro',
        he: 'הכנס שם ספר',
    },
    'new-book-price': {
        en: 'Enter book price',
        es: 'Ingrese el precio del libro',
        he: 'הכנס מחיר',
    },


}

var gCurrLang = 'en';

function getTrans(transKey) {
    // TODO: if key is unknown return 'UNKNOWN'
    var keyTrans = gTrans[transKey]
    if (!keyTrans) return 'UNKNOWN'

    // TODO: get from gTrans
    var txt = keyTrans[gCurrLang]

    // TODO: If translation not found - use english
    if (!txt) txt = keyTrans['en']

    return txt;
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]')
    els.forEach(function (el) {
        var txt = getTrans(el.dataset.trans)
        if (el.nodeName === 'INPUT') {
            el.setAttribute('placeholder', txt)
        } else {
            el.innerText = txt
        }
    })

}

function setLang(lang) {
    gCurrLang = lang;
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num);
}

function formatCurrency(num) {
    //var lang = gCuren
    return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(num);
}

