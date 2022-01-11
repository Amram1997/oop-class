class CoffeeShop{
    constructor(name,menu){
        this.name = name;
        this.menu = menu;
        this.orders = []   
    }
    addOrder(item){
       this.menu.forEach((elm)=>{
            if(item === elm.name){
                this.orders.push(item)
            }else if(item !== elm.name){
                return "This item is currently unavailable!"
            } 
       })
       return this.orders

      
    }
    fulfillOrder(){
       if(this.orders.length > 0){
           let item = this.orders.shift()
           return `${item} is ready`
       }
       return "All orders are fulfilled "
       
    }
    listOrders(){
        return this.orders
    }
    dueAmount(){
       return this.orders.reduce((aggr,item) => {
           aggr +=item.price;
           return aggr
       },0)
    } 
    drinksOnly = function() {
        return this.menu.filter((el) => el.type === "drink");
      }
    
      foodsOnly = function() {
        return this.menu.filter((el) => el.type === "food");
      } 

}

let menu = [
    {name:"mac",type:"drinc",price:250},
    {name:"cappuchino",type:"drinc",price:500},
    {name:"coffee",type:"drinc",price:750},
]


let newCoffee = new CoffeeShop("Joni",menu);
console.log(newCoffee.addOrder('mac'));
console.log(newCoffee.fulfillOrder());
console.log(newCoffee.dueAmount())
console.log(newCoffee.foodsOnly())
console.log(newCoffee.drinksOnly())




