function Book(title,author,pages,read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} read yet`;
  }
}
console.log(Book);
Book.prototype.sayHello = function(){
console.log('hello world');
};
console.log('hehe',Book);
let theHobbit = new Book('The Hobit','J.R.R Tolkien',295,'not');
console.log(theHobbit.info());
theHobbit.sayHello();
console.log(Object.getPrototypeOf(theHobbit));
console.log(Book.prototype);
console.log(theHobbit.__proto__===Book.prototype);