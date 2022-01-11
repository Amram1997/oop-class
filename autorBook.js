class Author{
    constructor(name,email,gender){
        this._name = name;
        this._email = email;
        this._gender = gender;
    }
    get name(){
        return this._name
    }
    get email(){
        return this._email
    }
    get gender(){
        return this._gender
    }
    toString1(){
        if(this._gender === "female"){
            return `Ms ${this._name}`
        }else if(this._gender === "male"){
            return `Msr ${this._name}`
        }
    }
}

let autor1 = new Author("J. K. Rowling", "abc@gmail.com", "female");
console.log(autor1.gender)
console.log(autor1._name)
console.log(autor1._email)
console.log(autor1.toString1())


class Book {
    constructor(title,autor,price,quantity){
        this._title = title;
        this._autor = autor;
        this._price = price;
        this._quantity = quantity;
    }
    get title(){
        return this._title
    }
    get autor(){
        return this._autor
    }
    get price(){
        return this._price
    }
    get quantity(){
        return this._quantity
    }

    set title(tit){
        this._title = tit
    }
    set autor(aut){
        this._autor = aut
    }

    set price(pr){
        if(typeof pr !== "number"){
            return "error"
        }
        this._price = pr
    }
    set quantity(quan){
        if(typeof quan !== "number"){
            return "error quantity is not a number"
        }
        this._quantity = quan
    }
    getProfit(){
        return this._quantity * this._price
    }
    toString2(){
        return `Book ${this._title} , Author ${this._autor} , Price  ${this._price}`
    }


}

let book1 = new Book("Dorian Gray","Oscar Uayld",250,5)
console.log(book1.getProfit())
console.log(book1.title)
console.log(book1.autor)
console.log(book1.toString2())


