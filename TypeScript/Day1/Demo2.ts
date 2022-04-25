let PName:string ="Phone";
let UPrice: number=5000;
let Quantity:number=1;
enum DiscountType {
    Disc1=10, Disc2=20, New15=15, Weekend25=25 
};
enum DeliveryMode{
    StorePickUp=0, HomeDelivery=30
}
let Delivery:number=DeliveryMode["HomeDelivery"];
let Discount:number= DiscountType["New15"];
let DiscAmt:number= (Discount/100)*(UPrice*Quantity);
let TotalAmt= (UPrice*Quantity)+Delivery-DiscAmt;
// console.log(Delivery);
console.log(TotalAmt);