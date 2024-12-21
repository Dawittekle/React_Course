const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature'
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux'
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452
      }
    }
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy'
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0
      }
    }
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: ''
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701
      }
    }
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal'
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960
      }
    }
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos'
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095
      }
    }
  }
]

function getBooks () {
  return data
}

function getBook (id) {
  return data.find(d => d.id === id)
} /*
const book = getBook(1)

//const author = book.author;
//const title= book.title;
const { author, title, genres, publicationDate } = book
const [first, second, thired, ...others] = genres //this use the rest
const newGenre = [...genres, 'epic-genere'] //this is called spread

//const newBook = {book,readed:false} //this take book all without spread it
const newBook = { ...book, readed: false, pages: 2 } //this spread the book ,
// book must be first if you want to overide the property inside the book

newBook

console.log(pubYear(publicationDate))

const summery = `The Author : ${author}, Title : ${title}, Publication Year : ${pubYear(
  publicationDate
)}`
summery

console.log(false||'hello man')//falsy value  : null, undefiend, 0
console.log(false&&'hello man')

console.log(0 ?? 'change you self')


function review(book){
    const goodRead =  book.reviews.goodreads?.reviewsCount??0;
    const libraryThing = book.reviews.librarything?.reviewsCount??0;
    return (goodRead + libraryThing) ; 
}

console.log(review(book));*/

/*
const pubYear = str => str.split('-')[0]

const book = getBooks()

const titles = book.map(book => book.title)
titles

const generalInfo = book.map(book => ({
  title: book.title,
  author: book.author,
  publicationYear: pubYear(book.publicationDate)
}))

generalInfo

const  longAndHasMovie = book.filter(book=>book.pages>500 && book.hasMovieAdaptation&&book.genres.includes('adventure')).map(book=>book.title);
 longAndHasMovie

const totalPage = book.reduce((sum, book)=>sum+=book.pages,0);

totalPage

//Sorthing 
const sortedByPage = book.slice().sort((a,b)=>a.pages-b.pages);
sortedByPage
book

//to Add Element to array 

const addBook = [...book,{id : 6,title: 'pirate of carabian',author : 'Jack sparow',publicationDate : '2021-12-3'}];

//deleting An object

const deteleBook = book.filter(book=>book.id!==2);
deteleBook

//update the value

const updateBook = book.map(book=>book.id===5 ? {...book,pages : 5} : book);
updateBook

addBook*/

/*fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json()).then(data=>console.log(data));

console.log('Dawit')*/

async function getTodos(){
  console.log('Start');
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);
  console.log('End');
}

getTodos();
console.log('outside');





