let carts= document.querySelectorAll('.add-to-cart');
let products=[
    {
        id : 1,
        name:'Flowers 1',
        tag:'flower1',
        price: 35,
        inCart: 0
    },
    {
        id : 2,
        name:'Flowers 2',
        tag:'flower2',
        price: 15,
        inCart: 0
    },
    {
        id : 3,
        name:'Flowers 3',
        tag:'flower3',
        price: 20,
        inCart: 0
    },
    {
        id :4,
        name:'Flowers 4',
        tag:'flower4',
        price: 20,
        inCart: 0
    },
    {
        id : 5,
        name:'Flowers 5',
        tag:'flower5',
        price: 20,
        inCart: 0
    },
    {
        id : 6,
        name:'Flowers 6',
        tag:'flower6',
        price: 20,
        inCart: 0
    },
    {
        id :7,
        name:'Flowers 7',
        tag:'flower7',
        price: 10,
        inCart: 0
    },
    {
        id : 8,
        name:'Flowers 8',
        tag:'flower8',
        price: 15,
        inCart: 0
    },
    {
        id : 9,
        name:'Flowers 9',
        tag:'flower9',
        price: 10,
        inCart: 0
    },
    {
        id : 10,
        name:'Teddy Bear 1',
        tag:'bear1',
        price: 10,
        inCart: 0
    },
    {
        id : 11,
        name:'Teddy Bear 2',
        tag:'bear2',
        price: 15,
        inCart: 0
    },
    {
        id : 12,
        name:'Teddy Bear 3',
        tag:'bear3',
        price: 10,
        inCart: 0
    },
    {
        id : 13,
        name:'Teddy Bear 4',
        tag:'bear4',
        price: 10,
        inCart: 0
    },
    {
        id :14,
        name:'Teddy Bear 5',
        tag:'bear5',
        price: 15,
        inCart: 0
    },
    {
        id : 15,
        name:'Teddy Bear 6',
        tag:'bear6',
        price: 10,
        inCart: 0
    },
    {
        id : 16,
        name:'Teddy Bear 7',
        tag:'bear7',
        price: 10,
        inCart: 0
    },
    {
        id : 17,
        name:'Teddy Bear 8',
        tag:'bear8',
        price: 15,
        inCart: 0
    },
    {
        id : 18,
        name:'Teddy Bear 9',
        tag:'bear9',
        price: 10,
        inCart: 0
    },
    {
        id : 19,
        name:'Chocolate Box 1',
        tag:'box1',
        price: 10,
        inCart: 0
    },
    {
        id : 20,
        name:'Chocolate Box 2',
        tag:'box2',
        price: 15,
        inCart: 0
    },
    {
        id : 21,
        name:'Chocolate Box 3',
        tag:'box3',
        price: 10,
        inCart: 0
    },
    {
        id : 22,
        name:'Chocolate Box 4',
        tag:'box4',
        price: 10,
        inCart: 0
    },
    {
        id : 23,
        name:'Chocolate Box 5',
        tag:'box5',
        price:15 ,
        inCart: 0
    },
    {
        id : 24,
        name:'Chocolate Box 6',
        tag:'box6',
        price: 10,
        inCart: 0
    },
    {
        id : 25,
        name:'Chocolate Box 7',
        tag:'box7',
        price:10 ,
        inCart: 0
    },
    {
        id : 26,
        name:'Chocolate Box 8',
        tag:'box8',
        price: 15,
        inCart: 0
    },
    {
        id : 27,
        name:'Chocolate Box 9',
        tag:'box9',
        price: 10,
        inCart: 0
    },
    {
        id : 28,
        name:'Mug 1',
        tag:'mug1',
        price: 10,
        inCart: 0
    },
    {
        id : 29,
        name:'Mug 2',
        tag:'mug2',
        price: 15,
        inCart: 0
    },
    {
        id : 30,
        name:'Mug3',
        tag:'mug3',
        price:10 ,
        inCart: 0
    },
    {
        id : 31,
        name:'Baloons 1',
        tag:'balloon1',
        price: 10,
        inCart: 0
    },
    {
        id : 32,
        name:'Baloons 2',
        tag:'balloon2',
        price: 15,
        inCart: 0
    },
    {
        id : 33,
        name:'Baloons 3',
        tag:'balloon3',
        price: 10 ,
        inCart: 0
    },
    {
        id : 34,
        name:'Basket 1',
        tag:'basket_1',
        price: 50,
        inCart: 0
    },
    {   id : 35,
        name:'Basket 2',
        tag:'basket_2',
        price: 20 ,
        inCart: 0
    },
    {   id : 36,
        name:'Basket 3',
        tag:'basket_3',
        price: 35,
        inCart: 0
    },
    {   id : 37,
        name:'Basket 4',
        tag:'basket_4',
        price: 15,
        inCart: 0
    },
    {   id : 38,
        name:'Basket 5',
        tag:'basket_5',
        price:30 ,
        inCart: 0
    },
    {   id : 39,
        name:'Basket 6',
        tag:'basket_6',
        price:45 ,
        inCart: 0
    },
    {   id : 40,
        name:'Basket 7',
        tag:'basket_7',
        price:40 ,
        inCart: 0
    },
    {   id :41,
        name:'Basket 8',
        tag:'basket_8',
        price:25 ,
        inCart: 0
    },
    {   id : 42,
        name:'Basket 9',
        tag:'basket_9',
        price: 15,
        inCart: 0
    },
    {   id : 43,
        name:'Get Well Soon Bear 1',
        tag:'bear_1',
        price:10 ,
        inCart: 0
    },
    {id : 44,
        name:'Get Well Soon Bear 2',
        tag:'bear_2',
        price: 10,
        inCart: 0
    },
    {id : 45,
        name:'Get Well Soon Bear 3',
        tag:'bear_3',
        price:10 ,
        inCart: 0
    },
    {id : 46,
        name:'Get Well Soon Bear 4',
        tag:'bear_4',
        price: 10,
        inCart: 0
    },
    {id : 47,
        name:'Get Well Soon Bear 5',
        tag:'bear_5',
        price:15 ,
        inCart: 0
    },
    {id : 48,
        name:'Get Well Soon Bear 6',
        tag:'bear_6',
        price:10 ,
        inCart: 0
    },
    {id : 49,
        name:'Get Well Soon Bear 7',
        tag:'bear_7',
        price:10,
        inCart: 0
    },
    {id : 50,
        name:'Get Well Soon Bear 8',
        tag:'bear_8',
        price:15 ,
        inCart: 0
    },
    {id : 51,
        name:'Get Well Soon Bear 9',
        tag:'bear_9',
        price:10 ,
        inCart: 0
    },
    {id : 52,
        name:'Get Well Soon Card 1',
        tag:'well_1',
        price:3 ,
        inCart: 0
    },
    {id : 53,
        name:'Get Well Soon Card 2',
        tag:'well_2',
        price:3 ,
        inCart: 0
    },
    {id : 54,
        name:'Get Well Soon Card 3',
        tag:'well_3',
        price:3 ,
        inCart: 0
    },
    {id : 55,
        name:'Get Well Soon Card 4',
        tag:'well_4',
        price:3 ,
        inCart: 0
    },
    {id : 56,
        name:'Get Well Soon Card 5',
        tag:'well_5',
        price:3 ,
        inCart: 0
    },
    {id : 57,
        name:'Get Well Soon Card 6',
        tag:'well_6',
        price:3 ,
        inCart: 0
    },
    {   id : 58,
        name:'Get Well Soon Card 7',
        tag:'well_7',
        price:3 ,
        inCart: 0
    },
    {id : 59,
        name:'Get Well Soon Card 8',
        tag:'well_8',
        price:3 ,
        inCart: 0
    },
    {id : 60,
        name:'Get Well Soon Card 9',
        tag:'well_9',
        price:3 ,
        inCart: 0
    },
    {id : 61,
        name:'Get Well Soon Flowers 1',
        tag:'flower_1',
        price:15 ,
        inCart: 0
    },
    {id : 62,
        name:'Get Well Soon Flowers 2',
        tag:'flower_2',
        price:15 ,
        inCart: 0
    },
    {id : 63,
        name:'Get Well Soon Flowers 3',
        tag:'flower_3',
        price:20 ,
        inCart: 0
    },
    {id : 64,
        name:'Get Well Soon baloons 1',
        tag:'balloon_1',
        price:10 ,
        inCart: 0
    },
    {id : 65,
        name:'Get Well Soon baloons 2',
        tag:'balloon_2',
        price:15 ,
        inCart: 0
    },
    {id : 66,
        name:'Get Well Soon baloons 3',
        tag:'balloon_3',
        price:10 ,
        inCart: 0
    },
    {id : 67,
        name:'Baby Clothes 1',
        tag:'clothes_1',
        price:15,
        inCart:0
    },
    {id : 68,
        name:'Baby Clothes 2',
        tag:'clothes_2',
        price:10,
        inCart:0
    },
    {id : 69,
        name:'Baby Clothes 3',
        tag:'clothes_3',
        price:25,
        inCart:0
    },
    {id : 70,
        name:'Baby Clothes 4',
        tag:'clothes_4',
        price:15,
        inCart:0
    },
    {id : 71,
        name:'Baby Clothes 5',
        tag:'clothes_5',
        price:10,
        inCart:0
    },
    {id : 72,
        name:'Baby Clothes 6',
        tag:'clothes_6',
        price:20,
        inCart:0
    },
    {id : 73,
        name:'Baby Clothes 7',
        tag:'clothes_7',
        price:10,
        inCart:0
    },
    {id : 74,
        name:'Baby Clothes 8',
        tag:'clothes_8',
        price:20,
        inCart:0
    },
    {id : 75,
        name:'Baby Clothes 9',
        tag:'clothes_9',
        price:15,
        inCart:0
    },
    {id : 76,
        name:'Milk Bottle 1',
        tag:'bottle_1',
        price:7,
        inCart:0
    },
    {id : 77,
        name:'Milk Bottle 2',
        tag:'bottle_2',
        price:10,
        inCart:0
    },
    {id : 78,
        name:'Milk Bottle 3',
        tag:'bottle_3',
        price:15,
        inCart:0
    },
    {id : 79,
        name:'Milk Bottle 4',
        tag:'bottle_4',
        price:12,
        inCart:0
    },
    {id :80 ,
        name:'Milk Bottle 5',
        tag:'bottle_5',
        price:8,
        inCart:0
    },
    {id : 81,
        name:'Milk Bottle 6',
        tag:'bottle_6',
        price:5,
        inCart:0
    },
    {id : 82,
        name:'Milk Bottle 7',
        tag:'bottle_7',
        price:6,
        inCart:0
    },
    {id : 83,
        name:'Milk Bottle 8',
        tag:'bottle_8',
        price:8,
        inCart:0
    },
    {id : 84,
        name:'Milk Bottle 9',
        tag:'bottle_9',
        price:10,
        inCart:0
    },
    {id : 85,
        name:'Baby Bib 1',
        tag:'bib_1',
        price:3,
        inCart:0
    },
    {id : 86,
        name:'Baby Bib 2',
        tag:'bib_2',
        price:5,
        inCart:0
    },
    {id : 87,
        name:'Baby Bib 3',
        tag:'bib_3',
        price:7,
        inCart:0
    },
    {id : 88,
        name:'Baby Bib 4',
        tag:'bib_4',
        price:4,
        inCart:0
    },
    {id : 89,
        name:'Baby Bib 5',
        tag:'bib_5',
        price:2,
        inCart:0
    },
    {id : 90,
        name:'Baby Bib 6',
        tag:'bib_6',
        price:6,
        inCart:0
    },
    {id : 91,
        name:'Baby Bib 7',
        tag:'bib_7',
        price:5,
        inCart:0
    },
    {id : 92,
        name:'Baby Bib 8',
        tag:'bib_8',
        price:8,
        inCart:0
    },
    {id : 93,
        name:'Baby Bib 9',
        tag:'bib_9',
        price:4,
        inCart:0
    },
    {id : 94,
        name:'Stroller 1',
        tag:'stroller_1',
        price:150,
        inCart:0
    },
    {id : 95,
        name:'Stroller 2',
        tag:'stroller_2',
        price:75,
        inCart:0
    },
    {id : 96,
        name:'Stroller 3',
        tag:'stroller_3',
        price:200,
        inCart:0
    },
    {id : 97,
        name:'Car Seat 1',
        tag:'seat_1',
        price:100,
        inCart:0
    },
    {id : 98,
        name:'Car Seat 2',
        tag:'seat_2',
        price:65,
        inCart:0
    },
    {id : 99,
        name:'Car Seat 3',
        tag:'seat_3',
        price:85,
        inCart:0
    },
    {id : 100,
        name:'Graduation Box 1',
        tag:'gradgift1',
        price:35,
        inCart:0
    },
    {id : 101,
        name:'Graduation Box 2',
        tag:'gradgift2',
        price:25,
        inCart:0
    },
    {id : 102,
        name:'Graduation Box 3',
        tag:'gradgift3',
        price:20,
        inCart:0
    },
    {id : 103,
        name:'Graduation Box 4',
        tag:'gradgift4',
        price:20,
        inCart:0
    },
    {id : 104,
        name:'Graduation Card 1',
        tag:'gradgift5',
        price:5,
        inCart:0
    },
    {id : 105,
        name:'Graduation Card 2',
        tag:'gradgift6',
        price:7,
        inCart:0
    },
    {id : 106,
        name:'Graduation Photo Frame',
        tag:'gradgift7',
        price:10,
        inCart:0
    },
    {id : 107,
        name:'Necklace',
        tag:'gradgift8',
        price:15,
        inCart:0
    },
    {id : 108,
        name:'Bracelet',
        tag:'gradgift9',
        price:10,
        inCart:0
    },
    {id : 109,
        name:'Graduation Mug',
        tag:'gradgift10',
        price:3,
        inCart:0
    },
    {id : 110,
        name:'Graduation Card 3',
        tag:'gradgift11',
        price:3,
        inCart:0
    },
    {id : 111,
        name:'Graduation Card 4',
        tag:'gradgift12',
        price:3,
        inCart:0
    },
    {id : 112,
        name:'PS5',
        tag:'gradgift13',
        price:400,
        inCart:0
    },
    {id : 113,
        name:'Airpods 1',
        tag:'gradgift14',
        price:65,
        inCart:0
    },
    {id : 114,
        name:'Airpods Pro',
        tag:'gradgift15',
        price:200,
        inCart:0
    },
    {id : 115,
        name:'Sony Headset',
        tag:'gradgift16',
        price:90,
        inCart:0
    },
    {id : 116,
        name:'Nikon Camera',
        tag:'gradgift17',
        price:300,
        inCart:0
    },
    {id : 117,
        name:'Oil Diffuser',
        tag:'gradgift18',
        price:15,
        inCart:0
    },
    {id : 118,
        name:'Black Graduation Robe',
        tag:'gradgift19',
        price:10,
        inCart:0
    },
    {id : 119,
        name:'Blue Graduation Robe',
        tag:'gradgift20',
        price:10,
        inCart:0
    },
    {id : 120,
        name:'Graduation Cap',
        tag:'gradgift21',
        price:4,
        inCart:0
    },
    {id : 121,
        name:'Graduation Baloons 1',
        tag:'gradgift22',
        price:10,
        inCart:0
    },
    {id : 122,
        name:'Graduation Baloons 2',
        tag:'gradgift23',
        price:15,
        inCart:0
    },
    {id : 123,
        name:'Graduation Baloons 3',
        tag:'gradgift24',
        price:10,
        inCart:0
    },
    {id : 124,
        name:'Watch 1',
        tag:'watch1',
        price:35,
        inCart:0
    },
    {id : 125,
        name:'Watch 2',
        tag:'watch2',
        price:15,
        inCart:0
    },
    {id : 126,
        name:'Watch 3',
        tag:'watch3',
        price:20,
        inCart:0
    },
    {id : 127,
        name:'Watch 4',
        tag:'watch4',
        price:20,
        inCart:0
    },
    {id : 128,
        name:'Watch 5',
        tag:'watch5',
        price:20,
        inCart:0
    },
    {id : 129,
        name:'Watch 6',
        tag:'watch6',
        price:20,
        inCart:0
    },
    {id : 130,
        name:'Watch 7',
        tag:'watch7',
        price:10,
        inCart:0
    },
    {id : 131,
        name:'Watch 8',
        tag:'watch8',
        price:15,
        inCart:0
    },
    {id : 132,
        name:'Watch 9',
        tag:'watch9',
        price:10,
        inCart:0
    },
    {id : 133,
        name:'Sunglasses 1',
        tag:'sunglasses1',
        price:10,
        inCart:0
    },
    {id : 134,
        name:'Sunglasses 2',
        tag:'sunglasses2',
        price:15,
        inCart:0
    },
    {id : 135,
        name:'Sunglasses 3',
        tag:'sunglasses3',
        price:10,
        inCart:0
    },
    {id : 136,
        name:'Sunglasses 4',
        tag:'sunglasses4',
        price:10,
        inCart:0
    },
    {id : 137,
        name:'Sunglasses 5',
        tag:'sunglasses5',
        price:15,
        inCart:0
    },
    {id : 138,
        name:'Sunglasses 6',
        tag:'sunglasses6',
        price:10,
        inCart:0
    },
    {id : 139,
        name:'Sunglasses 7',
        tag:'sunglasses7',
        price:10,
        inCart:0
    },
    {id : 140,
        name:'Sunglasses 8',
        tag:'sunglasses8',
        price:15,
        inCart:0
    },
    {id : 141,
        name:'Sunglasses 9',
        tag:'sunglasses9',
        price:10,
        inCart:0
    },
    {id : 142,
        name:'Bracelet 1',
        tag:'bracelets1',
        price:10,
        inCart:0
    },
    {id : 143,
        name:'Bracelet 2',
        tag:'bracelets2',
        price:15,
        inCart:0
    },
    {id : 144,
        name:'Bracelet 3',
        tag:'bracelets3',
        price:10,
        inCart:0
    },
    {id : 145,
        name:'Bracelet 4',
        tag:'bracelets4',
        price:10,
        inCart:0
    },
    {id : 146,
        name:'Bracelet 5',
        tag:'bracelets5',
        price:15,
        inCart:0
    },
    {id : 147,
        name:'Bracelet 6',
        tag:'bracelets6',
        price:10,
        inCart:0
    },
    {id : 148,
        name:'Bracelet 7',
        tag:'bracelets7',
        price:10,
        inCart:0
    },
    {id : 149,
        name:'Bracelet 8',
        tag:'bracelets8',
        price:15,
        inCart:0
    },
    {id : 150,
        name:'Bracelet 9',
        tag:'bracelets9',
        price:10,
        inCart:0
    },
    {id : 151,
        name:'Necklaces 1',
        tag:'necklace1',
        price:10,
        inCart:0
    },
    {id : 152,
        name:'Necklace 2',
        tag:'necklaces2',
        price:15,
        inCart:0
    },
    {id : 153,
        name:'Necklace 3',
        tag:'necklaces3',
        price:10,
        inCart:0
    },
    {id : 154,
        name:'Necklace 4',
        tag:'necklaces4',
        price:10,
        inCart:0
    },
    {id : 155,
        name:'Necklace 5',
        tag:'necklaces5',
        price:15,
        inCart:0
    },
    {id : 156,
        name:'Necklace 6',
        tag:'necklaces6',
        price:10,
        inCart:0
    },
    {id : 157,
        name:'Necklace 7',
        tag:'necklaces7',
        price:10,
        inCart:0
    },
    {id : 158,
        name:'Necklace 8',
        tag:'necklaces8',
        price:15,
        inCart:0
    },
    {id : 159,
        name:'Necklace 9',
        tag:'necklaces9',
        price:10,
        inCart:0
    },
    {id : 160,
        name:'Perfume 1',
        tag:'perfume1',
        price:10,
        inCart:0
    },
    {id : 161,
        name:'Perfume 2',
        tag:'perfume2',
        price:15,
        inCart:0
    },
    {id : 162,
        name:'Perfume 3',
        tag:'perfume3',
        price:10,
        inCart:0
    },
    {id : 163,
        name:'Perfume 4',
        tag:'perfume4',
        price:10,
        inCart:0
    },
    {id : 164,
        name:'Perfume 5',
        tag:'perfume5',
        price:15,
        inCart:0
    },
    {id : 165,
        name:'Perfume 6',
        tag:'perfume6',
        price:10,
        inCart:0
    },
    {id : 166,
        name:'Perfume 7',
        tag:'perfume7',
        price:10,
        inCart:0
    },
    {id : 167,
        name:'Perfume 8',
        tag:'perfume8',
        price:15,
        inCart:0
    },
    {id : 168,
        name:'Perfume 9',
        tag:'perfume9',
        price:10,
        inCart:0
    }
]
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
      const clickedProduct = products.find(product => product.tag === carts[i].getAttribute('data-tag'));
      if (clickedProduct) {
        cartNumbers(clickedProduct);
        totalCost(clickedProduct);
      }
    });
  }
function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if (productNumbers){
       document.querySelector('.cart span').textContent=productNumbers; 
    }
}
function cartNumbers(product){
    let productNumbers=localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);
    if (productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('.cart span').textContent=productNumbers+1;
    }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent=1;
    }
    setItems(product);
}

function setItems(product){
    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    let cartArray;
    if (cartItems!= null){
        cartArray = Object.values (cartItems);
        if (cartArray.length != 0){
            var id = product.id;
            var index = cartArray.length;
            var exist = false;
            for (var i = 0; i < cartArray.length; i++){
                if (cartArray[i].id === id){
                    exist = true;
                    index = i;
                    break;
                }
            }
            if (exist){
                cartArray[index].inCart += 1;
            }
            else {
                cartArray.push(product);
                cartArray[index].inCart += 1;
            }
        }
        else {
            cartArray.push(product);
            cartArray[0].inCart += 1;
        }
    }
    else{
        product.inCart=1;
        cartItems={
           [product.tag]:product
       }
       cartArray = Object.values (cartItems);
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartArray));
}

function totalCost(product){
    let cartCost=localStorage.getItem('totalCost');
    if(cartCost!=null){
        cartCost=parseInt(cartCost);
        localStorage.setItem('totalCost',cartCost+product.price);
    }else{
        localStorage.setItem('totalCost',product.price);
    }
}

function showCart(){
    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    let productContainer=document.querySelector(".products");
    let cartCost=localStorage.getItem('totalCost');
    if(cartItems&& productContainer){
        productContainer.innerHTML='';
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML+= `
            <div class = "prodrow" id = "prod${item.id}">
                <div class="product">
                    <ion-icon name="close-circle-outline" class = "delIcon" onclick = "remove(${item.id})"></ion-icon>
                    <img src="./Images/${item.tag}.png">
                    <span>${item.name}</span>
                </div>
                <div class="price">${item.price}JOD</div>
                <div class="quantity">
                    <ion-icon name="arrow-back-circle-outline" onclick = "decrement(${item.id})"></ion-icon>
                    <span id = "${item.id}">${item.inCart}</span>
                    <ion-icon name="arrow-forward-circle-outline" onclick = "increment(${item.id})"></ion-icon>
                </div>
                <div class="total">
                     ${item.inCart*item.price}JOD
                </div>
            </div>
            `;
        });
        productContainer.innerHTML+=`
        <div class="basketTotalContainer">
            <h4 class="BasketTotalTitle>
                Basket Total
                </h4>
                <h4 class="basketTotal">
                    ${cartCost}JOD
                    </h4>
        `;
    }
}

function increment (id){
    var quantity = parseInt(document.getElementById(id).innerHTML);
    document.getElementById(id).innerText = quantity + 1;
    var cartItems = localStorage.getItem ("productsInCart");
    cartItems = JSON.parse (cartItems);
    var index;
    for (var i = 0; i < cartItems.length; i++){
        if (cartItems[i].id === id){
            index = i;
            break;
        }
    }
    cartItems[index].inCart += 1;
    localStorage.setItem ("productsInCart", JSON.stringify (cartItems));
    totalCost (cartItems[index]);
    var cartNumbers = localStorage.getItem ("cartNumbers");
    cartNumbers = parseInt (cartNumbers);
    localStorage.setItem ("cartNumbers", cartNumbers + 1);
    onLoadCartNumbers ();
    showCart ();
}
function decrement (id){
    var quantity = parseInt(document.getElementById(id).innerHTML);
    if (quantity <= 1){
        return;
    }
    var cartItems = localStorage.getItem ("productsInCart");
    cartItems = JSON.parse (cartItems);
    var index;
    for (var i = 0; i < cartItems.length; i++){
        if (cartItems[i].id === id){
            index = i;
            break;
        }
    }
    cartItems[index].inCart -= 1;
    localStorage.setItem ("productsInCart", JSON.stringify (cartItems));
    let cartCost=localStorage.getItem('totalCost');
    cartCost=parseInt(cartCost);
    localStorage.setItem('totalCost',cartCost-cartItems[index].price);
    var cartNumbers = localStorage.getItem ("cartNumbers");
    cartNumbers = parseInt (cartNumbers);
    localStorage.setItem ("cartNumbers", cartNumbers - 1);
    onLoadCartNumbers ();
    showCart ();
}
function remove (id){
    let selectedItem = document.getElementById("prod"+id);
    selectedItem.remove();
    let cartItems = localStorage.getItem ("productsInCart");
    let qunatityOfItem = 0;
    cartItems = JSON.parse (cartItems);
    var updatedCartItems = [];
    for (var i = 0; i < cartItems.length; i++){
        if (cartItems[i].id === id){
            qunatityOfItem = cartItems[i].inCart
            continue;
        }
        updatedCartItems.push (cartItems[i]);
    }
    localStorage.setItem ("productsInCart", JSON.stringify (updatedCartItems));
    var total = 0;
    for (var i = 0; i < updatedCartItems.length; i++){
        total += updatedCartItems[i].inCart * updatedCartItems[i].price;
    }
    localStorage.setItem ("totalCost", total);
    showCart();
    var newCartNum = localStorage.getItem ("cartNumbers");
    localStorage.setItem ("cartNumbers", parseInt(newCartNum) - qunatityOfItem);
    onLoadCartNumbers();
}
onLoadCartNumbers();
showCart();