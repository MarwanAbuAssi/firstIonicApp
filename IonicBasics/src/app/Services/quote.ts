export class QuotesServices {
  private favoriteQoutes: any[] = [];

  addQuoteToFavorite(qoute) {
    this.favoriteQoutes.push(qoute)
  }

  removeQuoteFromFavorite(quote) {
    const position = this.favoriteQoutes.findIndex((qouteEl) => {
      console.log(qouteEl);
      return qouteEl.id == quote.id;
    });
    this.favoriteQoutes.splice(position, 1)
    console.log(quote);
    console.log(this.favoriteQoutes);
  }

  getFavoriteQoute() {
    return this.favoriteQoutes;
  }
}
