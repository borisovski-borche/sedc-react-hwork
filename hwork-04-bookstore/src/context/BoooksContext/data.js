//extracting the starting data to clean up the context provider
import { Book } from "./book.model";
import { v4 as uuid } from "uuid";

export const defaultUsers = [
  { email: "user@test.com", password: "testerson", isAdmin: false },
  { email: "second@test.com", password: "secondson", isAdmin: false },
  { email: "admin@test.com", password: "adminson", isAdmin: true },
];

export const defaultBooks = [
  new Book(
    uuid(),
    "Name of the Wind",
    "Patrick Rothfuss",
    "2007",
    30,
    "Fantasy",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1270352123l/186074.jpg"
  ),
  new Book(
    uuid(),
    "Project Hail Mary",
    "Andy Weir",
    "2021",
    5,
    "Science Fiction",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597695864l/54493401.jpg"
  ),
  new Book(
    uuid(),
    "The Pillars of the Earth",
    "Ken Follet",
    "1989",
    120,
    "Historical Fiction",
    "https://upload.wikimedia.org/wikipedia/en/b/b3/PillarsOfTheEarth.jpg"
  ),
  new Book(
    uuid(),
    "Red Rising",
    "Pierce Brown",
    "2014",
    64,
    "Science Fiction",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1461354651l/15839976.jpg"
  ),
];
