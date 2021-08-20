export class Book {
  constructor(
    id,
    name,
    authorName,
    published,
    inStock,
    genre,
    coverImgUrl,
    createdAt = new Date()
  ) {
    this.id = id;
    this.name = name;
    this.authorName = authorName;
    this.published = published;
    this.inStock = inStock;
    this.genre = genre;
    this.coverImgUrl = coverImgUrl;
    this.inShoppingCart = 0;
    this.createdAt = new Date();
  }

  addToCart() {
    if (this.inStock) {
      this.inStock--;
      this.inShoppingCart++;
    }
  }

  resetStock() {
    this.inStock += this.inShoppingCart;
    this.inShoppingCart = 0;
  }

  removeFromCart() {
    if (this.inShoppingCart > 0) {
      this.inStock++;
      this.inShoppingCart--;
    }
  }
}
