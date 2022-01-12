let id = 0
class Account {
    
    constructor(name,balance) {
        
        this._id = id++
        this._name = name;
        this._balance = balance;
        
    }
    get id(){
        return this._id + 10
    }
    get name(){
        return this._name
    }
    set(value){
        this._name = value
    }
    get balance(){
        return this._balance
    }
    set balance(value){
        this._balance = value
    }
    credit(amount){
         this._balance +=amount
        return this._balance
    }
    debit(amount){
        amount -= this._balance
        return amount
    }
    transverTo(obj,amount){
        this._balance -=amount
         obj.balance +=amount
        return this._balance
        
         
    }
    static identifyAccounts(acc1,acc2){
        if(acc1.id === acc2.id && acc1.name === acc2.name && acc1.balance === acc2.balance){
            return true
        }else{
            return false
        }
    }
    toString(){
        return `${this._name} has ${this._balance}$`
    }
}

let savingAcc = new Account("Saving account",2000);
let cardAcc = new Account("Card account", 1000)
console.log(savingAcc)
console.log(cardAcc)
console.log(savingAcc.balance);
console.log(savingAcc.credit(400))
console.log(savingAcc.balance);
console.log(savingAcc.debit(9000))
console.log(savingAcc.transverTo(cardAcc,1000))
console.log(cardAcc.balance)

let anotherAcc = savingAcc
console.log(Account.identifyAccounts(anotherAcc,savingAcc))
console.log(Account.identifyAccounts(savingAcc,cardAcc))
console.log(savingAcc.toString())