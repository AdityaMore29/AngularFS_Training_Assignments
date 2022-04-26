class Customer {
    private CustId:number;
    private CustName:string;
    private CustCity:string;

    constructor(Id:number,Name:string, City:string){
        this.CustId=Id;
        this.CustName=Name;
        this.CustCity=City;
    }

    public ShowDetails():void{
let Displaymessage:string = `Customer Details:: Id: ${this.CustId}, Name: ${this.CustName}, City: ${this.CustCity} `;
console.log(Displaymessage);
    }
}

let obj:Customer=new Customer(1001,"Jeff", "NYC");
obj.ShowDetails();
