var sno;
var itemname;
var category;
var price;
var currency;
var tax;
var quantity;
var TaxAmount;
var totalTax=0;
var totalPrice;
 var finalPrice;
var i;

var totalitems=0;
var sumprice=0;


var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data=JSON.parse(this.responseText);
        //document.getElementById('userid').innerHTML=data.user.id;
        //document.getElementById('username').innerHTML=data.user.name;
        document.getElementById('name').innerHTML=data.user.name;
        document.getElementById('rname').innerHTML=data.restaurant.name;
        document.getElementById('rstreet').innerHTML=data.restaurant.street;
        document.getElementById('rcity').innerHTML=data.restaurant.city;
        document.getElementById('rstate').innerHTML=data.restaurant.state;
        document.getElementById('rzipcode').innerHTML=data.restaurant.zipcode;
        document.getElementById('orderid').innerHTML=data.order_id;
        var items=data.items;
        console.log(items);
        l=items.length;
        for( i=0; i<l;i++)
            {
                sno=i+1;
                itemname=items[i].name;
                category=items[i].category;
                console.log(category)
                price=items[i].price;
                tax=items[i].tax;
                quantity=items[i].quantity;
                TaxAmount=price*tax;
                totalPrice=price*quantity;
                sumprice=sumprice+totalPrice;
                totalTax= totalTax + TaxAmount*quantity;
                finalPrice=totalPrice+totalTax;
                console.log(finalPrice);
                totalitems=totalitems+quantity;
                
                insRow(i+4);
            }
        var pay=sumprice+totalTax;
        document.getElementById('totalitems').innerHTML=totalitems;
        document.getElementById('sumprice').innerHTML=sumprice;
        document.getElementById('totaltax').innerHTML=totalTax;
        document.getElementById('pay').innerHTML=pay;
    }
  };

  xhttp.open("GET", "https://indapi.kumba.io/webdev/assignment", true);
  xhttp.send();

function insRow(j)
{
    
    var newrow=document.getElementById('ordertable').insertRow(j)
    var c1=newrow.insertCell(0);
    var c2=newrow.insertCell(1);
    var c3=newrow.insertCell(2);
    var c4=newrow.insertCell(3);
    var c5=newrow.insertCell(4);
    c1.innerHTML=sno;
    c2.innerHTML=itemname;
    c3.innerHTML=price;
    c4.innerHTML=quantity;
    c5.innerHTML=totalPrice;
    
}
