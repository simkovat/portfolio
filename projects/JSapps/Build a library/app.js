// Classes excercise

// The main MEDIA class
class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    getAverageRating() {
      let average = this._ratings.reduce((a,b) => a + b, 0) / this._ratings.length;
      return average;
    }
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
    toggleCheckOutStatus() {
      return this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(newRating) {
      if (newRating >= 1 && newRating <= 5){
      this._ratings.push(newRating);
      } else {
        console.log('Rating must be between 1-5!');
      }
    }
  }
  
  // The BOOK subclass
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  // The MOVIE subclass
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  // The CD subclass
  class CD extends Media {
    constructor(title, artist, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    get artist() {
      return this._artist;
    }
    get songs() {
      return this._songs;
    }
    shuffle() {
      return
    }
  }
  // Tests
  let historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  let speed = new Movie('Speed', 'Jan de Bont', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  