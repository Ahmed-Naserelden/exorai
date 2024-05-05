

export class Product{
    name: String = "";
    price: Number = 0;
    description: String = "";
    loc: String = "";
    since: String = "weak ago";
    images: File[] | undefined;

    constructor(name:String, price:Number, describtion: String, loc: String){
        this.name = name;
        this.price = price
    }

}