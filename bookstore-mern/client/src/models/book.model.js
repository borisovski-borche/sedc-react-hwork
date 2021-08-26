export class Book {
  constructor(id, title, authorName, published, inStock, genre, coverImgUrl) {
    this.id = id;
    this.title = title;
    this.authorName = authorName;
    this.published = published;
    this.inStock = inStock;
    this.genre = genre;
    this.coverImgUrl = coverImgUrl;
    this.inShoppingCart = false;
    this.orderCount = 0;
  }

  inCart() {
    this.inShoppingCart = true;
  }

  addToCart() {
    if (this.inStock === this.orderCount) return;
    this.orderCount++;
  }

  removeFromCart() {
    if (this.orderCount === 1) return;

    this.orderCount--;
  }

  resetOrder() {
    this.orderCount = 0;
    // this.inShoppingCart = false;
  }
}
