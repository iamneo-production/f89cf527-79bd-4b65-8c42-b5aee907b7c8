export class Cart {
    
    userId:number;
    products:any[] = [];
    total:number = 0;

    constructor(userId:number){
        this.userId = userId;
    }

    getTotal(){
        this.products.forEach((element)=> {
            this.total += element.price;
        })

        return this.total
    }
}
