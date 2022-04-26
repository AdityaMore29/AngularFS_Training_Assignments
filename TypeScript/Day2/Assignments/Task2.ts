class Product {
    readonly ProdId:number;
    private ProdName:string;
    private UnitPrice:number;
    private ProdQty :number;

    constructor(Id:number){
this.ProdId=Id;
    }
   public get Id():number{
return this.ProdId;
    }

    public set Name (Name:string){
        this.ProdName=Name;
    }
    public get Name ():string{
        return this.ProdName;
    }
    public set Price (Price:number){
        this.UnitPrice=Price;
    }
    public get Price ():number{
        return this.UnitPrice;
    }

    public set Qty (qty:number){
        this.ProdQty=qty;
    }
    public get Qty ():number{
        return this.ProdQty;
    }

}

let Obj1:Product=new Product(1001);
Obj1.Name="Product1";
console.log(Obj1.Id,Obj1.Name);