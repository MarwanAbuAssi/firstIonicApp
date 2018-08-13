export class QuotesServices {
  private favoriteQoutes: any[] = [];

  addQuoteToFavorite(qoute) {
    this.favoriteQoutes.push(qoute)
  }
  removeQuoteFromFavorite(quote) {
    const position = this.favoriteQoutes.findIndex((qouteEl)=>{
      return qouteEl.id == quote.id;
    });
    this.favoriteQoutes.slice(position,1)
  }
  getFavoriteQoute() {
      return this.favoriteQoutes;
  }
}
