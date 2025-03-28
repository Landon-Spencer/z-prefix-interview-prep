class GalvanizeSet {
  constructor() {
    this.items = [];
  }

  getSize () {
    return this.items.length;
  }

  insert (item) {
    this.items.push(item);
    return this.items.length;
  }

  contains (item) {
    return this.items.includes(item);
  }

}

module.exports = GalvanizeSet