function Book(title,author,pages,read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} read yet`;
  }
}

let theHobbit = new Book('The Hobit','J.R.R Tolkien',295,'not');
console.log(theHobbit.info());