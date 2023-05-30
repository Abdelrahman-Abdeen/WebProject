let carts= document.querySelectorAll('.add-to-cart');
let products=[
    {
        name:'Flowers 1',
        tag:'flower1',
        price: 35,
        inCart: 0
    },
    {
        name:'Flowers 2',
        tag:'flower2',
        price: 15,
        inCart: 0
    },
    {
        name:'Flowers 3',
        tag:'flower3',
        price: 20,
        inCart: 0
    },
    {
        name:'Flowers 4',
        tag:'flower4',
        price: 20,
        inCart: 0
    },
    {
        name:'Flowers 5',
        tag:'flower5',
        price: 20,
        inCart: 0
    },
    {
        name:'Flowers 6',
        tag:'flower6',
        price: 20,
        inCart: 0
    },
    {
        name:'Flowers 7',
        tag:'flower7',
        price: 10,
        inCart: 0
    },
    {
        name:'Flowers 8',
        tag:'flower8',
        price: 15,
        inCart: 0
    },
    {
        name:'Flowers 9',
        tag:'flower9',
        price: 10,
        inCart: 0
    },
    {
        name:'Teddy Bear 1',
        tag:'bear1',
        price: 10,
        inCart: 0
    },
    {
        name:'Teddy Bear 2',
        tag:'bear2',
        price: 15,
        inCart: 0
    },
    {
        name:'Teddy Bear 3',
        tag:'bear3',
        price: 10,
        inCart: 0
    },
    {
        name:'Teddy Bear 4',
        tag:'bear4',
        price: 10,
        inCart: 0
    },
    {
        name:'Teddy Bear 5',
        tag:'bear5',
        price: 15,
        inCart: 0
    },
    {
        name:'Teddy Bear 6',
        tag:'bear6',
        price: 10,
        inCart: 0
    },
    {
        name:'Teddy Bear 7',
        tag:'bear7',
        price: 10,
        inCart: 0
    },
    {
        name:'Teddy Bear 8',
        tag:'bear8',
        price: 15,
        inCart: 0
    },
    {
        name:'Teddy Bear 9',
        tag:'bear9',
        price: 10,
        inCart: 0
    },
    {
        name:'Chocolate Box 1',
        tag:'box1',
        price: 10,
        inCart: 0
    },
    {
        name:'Chocolate Box 2',
        tag:'box2',
        price: 15,
        inCart: 0
    },
    {
        name:'Chocolate Box 3',
        tag:'box3',
        price: 10,
        inCart: 0
    },
    {
        name:'Chocolate Box 4',
        tag:'box4',
        price: 10,
        inCart: 0
    },
    {
        name:'Chocolate Box 5',
        tag:'box5',
        price:15 ,
        inCart: 0
    },
    {
        name:'Chocolate Box 6',
        tag:'box6',
        price: 10,
        inCart: 0
    },
    {
        name:'Chocolate Box 7',
        tag:'box7',
        price:10 ,
        inCart: 0
    },
    {
        name:'Chocolate Box 8',
        tag:'box8',
        price: 15,
        inCart: 0
    },
    {
        name:'Chocolate Box 9',
        tag:'box9',
        price: 10,
        inCart: 0
    },
    {
        name:'Mug 1',
        tag:'mug1',
        price: 10,
        inCart: 0
    },
    {
        name:'Mug 2',
        tag:'mug2',
        price: 15,
        inCart: 0
    },
    {
        name:'Mug3',
        tag:'mug3',
        price:10 ,
        inCart: 0
    },
    {
        name:'Baloons 1',
        tag:'balloon1',
        price: 10,
        inCart: 0
    },
    {
        name:'Baloons 2',
        tag:'balloon2',
        price: 15,
        inCart: 0
    },
    {
        name:'Baloons 3',
        tag:'balloon3',
        price: 10 ,
        inCart: 0
    },
    {
        name:'Basket 1',
        tag:'basket_1',
        price: 50,
        inCart: 0
    },
    {
        name:'Basket 2',
        tag:'basket_2',
        price: 20 ,
        inCart: 0
    },
    {
        name:'Basket 3',
        tag:'basket_3',
        price: 35,
        inCart: 0
    },
    {
        name:'Basket 4',
        tag:'basket_4',
        price: 15,
        inCart: 0
    },
    {
        name:'Basket 5',
        tag:'basket_5',
        price:30 ,
        inCart: 0
    },
    {
        name:'Basket 6',
        tag:'basket_6',
        price:45 ,
        inCart: 0
    },
    {
        name:'Basket 7',
        tag:'basket_7',
        price:40 ,
        inCart: 0
    },
    {
        name:'Basket 8',
        tag:'basket_8',
        price:25 ,
        inCart: 0
    },
    {
        name:'Basket 9',
        tag:'basket_9',
        price: 15,
        inCart: 0
    },
    {
        name:'Get Well Soon Bear 1',
        tag:'bear_1',
        price:10 ,
        inCart: 0
    },
    {
        name:'Get Well Soon Bear 2',
        tag:'bear_2',
        price: 10,
        inCart: 0
    },
    {
        name:'Get Well Soon Bear 3',
        tag:'bear_3',
        price:10 ,
        inCart: 0
    },
    {
        name:'Get Well Soon Bear 4',
        tag:'bear_4',
        price: 10,
        inCart: 0
    },
    {
        name:'Get Well Soon Bear 5',
        tag:'bear_5',
        price:15 ,
        inCart: 0
    },
    {
        name:'Get Well Soon Bear 6',
        tag:'bear_6',
        price:10 ,
        inCart: 0
    },
    {
        name:'Get Well Soon Bear 7',
        tag:'bear_7',
        price:10,
        inCart: 0
    },
    {
        name:'Get Well Soon Bear 8',
        tag:'bear_8',
        price:15 ,
        inCart: 0
    },
    {
        name:'Get Well Soon Bear 9',
        tag:'bear_9',
        price:10 ,
        inCart: 0
    },
    {
        name:'Get Well Soon Card 1',
        tag:'well_1',
        price:3 ,
        inCart: 0
    },
    {
        name:'Get Well Soon Card 2',
        tag:'well_2',
        price:3 ,
        inCart: 0
    },
    {
        name:'Get Well Soon Card 3',
        tag:'well_3',
        price:3 ,
        inCart: 0
    },
    {
        name:'Get Well Soon Card 4',
        tag:'well_4',
        price:3 ,
        inCart: 0
    },
    {
        name:'Get Well Soon Card 5',
        tag:'well_5',
        price:3 ,
        inCart: 0
    },
    {
        name:'Get Well Soon Card 6',
        tag:'well_6',
        price:3 ,
        inCart: 0
    },
    {
        name:'Get Well Soon Card 7',
        tag:'well_7',
        price:3 ,
        inCart: 0
    },
    {
        name:'Get Well Soon Card 8',
        tag:'well_8',
        price:3 ,
        inCart: 0
    },
    {
        name:'Get Well Soon Card 9',
        tag:'well_9',
        price:3 ,
        inCart: 0
    },
    {
        name:'Get Well Soon Flowers 1',
        tag:'flower_1',
        price:15 ,
        inCart: 0
    },
    {
        name:'Get Well Soon Flowers 2',
        tag:'flower_2',
        price:15 ,
        inCart: 0
    },
    {
        name:'Get Well Soon Flowers 3',
        tag:'flower_3',
        price:20 ,
        inCart: 0
    },
    {
        name:'Get Well Soon baloons 1',
        tag:'balloon_1',
        price:10 ,
        inCart: 0
    },
    {
        name:'Get Well Soon baloons 2',
        tag:'balloon_2',
        price:15 ,
        inCart: 0
    },
    {
        name:'Get Well Soon baloons 3',
        tag:'balloon_3',
        price:10 ,
        inCart: 0
    },
    {
        name:'Baby Clothes 1',
        tag:'clothes_1',
        price:15,
        inCart:0
    },
    {
        name:'Baby Clothes 2',
        tag:'clothes_2',
        price:10,
        inCart:0
    },
    {
        name:'Baby Clothes 3',
        tag:'clothes_3',
        price:25,
        inCart:0
    },
    {
        name:'Baby Clothes 4',
        tag:'clothes_4',
        price:15,
        inCart:0
    },
    {
        name:'Baby Clothes 5',
        tag:'clothes_5',
        price:10,
        inCart:0
    },
    {
        name:'Baby Clothes 6',
        tag:'clothes_6',
        price:20,
        inCart:0
    },
    {
        name:'Baby Clothes 7',
        tag:'clothes_7',
        price:10,
        inCart:0
    },
    {
        name:'Baby Clothes 8',
        tag:'clothes_8',
        price:20,
        inCart:0
    },
    {
        name:'Baby Clothes 9',
        tag:'clothes_9',
        price:15,
        inCart:0
    },
    {
        name:'Milk Bottle 1',
        tag:'bottle_1',
        price:7,
        inCart:0
    },
    {
        name:'Milk Bottle 2',
        tag:'bottle_2',
        price:10,
        inCart:0
    },
    {
        name:'Milk Bottle 3',
        tag:'bottle_3',
        price:15,
        inCart:0
    },
    {
        name:'Milk Bottle 4',
        tag:'bottle_4',
        price:12,
        inCart:0
    },
    {
        name:'Milk Bottle 5',
        tag:'bottle_5',
        price:8,
        inCart:0
    },
    {
        name:'Milk Bottle 6',
        tag:'bottle_6',
        price:5,
        inCart:0
    },
    {
        name:'Milk Bottle 7',
        tag:'bottle_7',
        price:6,
        inCart:0
    },
    {
        name:'Milk Bottle 8',
        tag:'bottle_8',
        price:8,
        inCart:0
    },
    {
        name:'Milk Bottle 9',
        tag:'bottle_9',
        price:10,
        inCart:0
    },
    {
        name:'Baby Bib 1',
        tag:'bib_1',
        price:3,
        inCart:0
    },
    {
        name:'Baby Bib 2',
        tag:'bib_2',
        price:5,
        inCart:0
    },
    {
        name:'Baby Bib 3',
        tag:'bib_3',
        price:7,
        inCart:0
    },
    {
        name:'Baby Bib 4',
        tag:'bib_4',
        price:4,
        inCart:0
    },
    {
        name:'Baby Bib 5',
        tag:'bib_5',
        price:2,
        inCart:0
    },
    {
        name:'Baby Bib 6',
        tag:'bib_6',
        price:6,
        inCart:0
    },
    {
        name:'Baby Bib 7',
        tag:'bib_7',
        price:5,
        inCart:0
    },
    {
        name:'Baby Bib 8',
        tag:'bib_8',
        price:8,
        inCart:0
    },
    {
        name:'Baby Bib 9',
        tag:'bib_9',
        price:4,
        inCart:0
    },
    {
        name:'Stroller 1',
        tag:'stroller_1',
        price:150,
        inCart:0
    },
    {
        name:'Stroller 2',
        tag:'stroller_2',
        price:75,
        inCart:0
    },
    {
        name:'Stroller 3',
        tag:'stroller_3',
        price:200,
        inCart:0
    },
    {
        name:'Car Seat 1',
        tag:'seat_1',
        price:100,
        inCart:0
    },
    {
        name:'Car Seat 2',
        tag:'seat_2',
        price:65,
        inCart:0
    },
    {
        name:'Car Seat 3',
        tag:'seat_3',
        price:85,
        inCart:0
    },
    {
        name:'Graduation Box 1',
        tag:'gradgift1',
        price:35,
        inCart:0
    },
    {
        name:'Graduation Box 2',
        tag:'gradgift2',
        price:25,
        inCart:0
    },
    {
        name:'Graduation Box 3',
        tag:'gradgift3',
        price:20,
        inCart:0
    },
    {
        name:'Graduation Box 4',
        tag:'gradgift4',
        price:20,
        inCart:0
    },
    {
        name:'Graduation Card 1',
        tag:'gradgift5',
        price:5,
        inCart:0
    },
    {
        name:'Graduation Card 2',
        tag:'gradgift6',
        price:7,
        inCart:0
    },
    {
        name:'Graduation Photo Frame',
        tag:'gradgift7',
        price:10,
        inCart:0
    },
    {
        name:'Necklace',
        tag:'gradgift8',
        price:15,
        inCart:0
    },
    {
        name:'Bracelet',
        tag:'gradgift9',
        price:10,
        inCart:0
    },
    {
        name:'Graduation Mug',
        tag:'gradgift10',
        price:3,
        inCart:0
    },
    {
        name:'Graduation Card 3',
        tag:'gradgift11',
        price:3,
        inCart:0
    },
    {
        name:'Graduation Card 4',
        tag:'gradgift12',
        price:3,
        inCart:0
    },
    {
        name:'PS5',
        tag:'gradgift13',
        price:400,
        inCart:0
    },
    {
        name:'Airpods 1',
        tag:'gradgift14',
        price:65,
        inCart:0
    },
    {
        name:'Airpods Pro',
        tag:'gradgift15',
        price:200,
        inCart:0
    },
    {
        name:'Sony Headset',
        tag:'gradgift16',
        price:90,
        inCart:0
    },
    {
        name:'Nikon Camera',
        tag:'gradgift17',
        price:300,
        inCart:0
    },
    {
        name:'Oil Diffuser',
        tag:'gradgift18',
        price:15,
        inCart:0
    },
    {
        name:'Black Graduation Robe',
        tag:'gradgift19',
        price:10,
        inCart:0
    },
    {
        name:'Blue Graduation Robe',
        tag:'gradgift20',
        price:10,
        inCart:0
    },
    {
        name:'Graduation Cap',
        tag:'gradgift21',
        price:4,
        inCart:0
    },
    {
        name:'Graduation Baloons 1',
        tag:'gradgift22',
        price:10,
        inCart:0
    },
    {
        name:'Graduation Baloons 2',
        tag:'gradgift23',
        price:15,
        inCart:0
    },
    {
        name:'Graduation Baloons 3',
        tag:'gradgift24',
        price:10,
        inCart:0
    },
    {
        name:'Watch 1',
        tag:'watch1',
        price:35,
        inCart:0
    },
    {
        name:'Watch 2',
        tag:'watch2',
        price:15,
        inCart:0
    },
    {
        name:'Watch 3',
        tag:'watch3',
        price:20,
        inCart:0
    },
    {
        name:'Watch 4',
        tag:'watch4',
        price:20,
        inCart:0
    },
    {
        name:'Watch 5',
        tag:'watch5',
        price:20,
        inCart:0
    },
    {
        name:'Watch 6',
        tag:'watch6',
        price:20,
        inCart:0
    },
    {
        name:'Watch 7',
        tag:'watch7',
        price:10,
        inCart:0
    },
    {
        name:'Watch 8',
        tag:'watch8',
        price:15,
        inCart:0
    },
    {
        name:'Watch 9',
        tag:'watch9',
        price:10,
        inCart:0
    },
    {
        name:'Sunglasses 1',
        tag:'sunglasses1',
        price:10,
        inCart:0
    },
    {
        name:'Sunglasses 2',
        tag:'sunglasses2',
        price:15,
        inCart:0
    },
    {
        name:'Sunglasses 3',
        tag:'sunglasses3',
        price:10,
        inCart:0
    },
    {
        name:'Sunglasses 4',
        tag:'sunglasses4',
        price:10,
        inCart:0
    },
    {
        name:'Sunglasses 5',
        tag:'sunglasses5',
        price:15,
        inCart:0
    },
    {
        name:'Sunglasses 6',
        tag:'sunglasses6',
        price:10,
        inCart:0
    },
    {
        name:'Sunglasses 7',
        tag:'sunglasses7',
        price:10,
        inCart:0
    },
    {
        name:'Sunglasses 8',
        tag:'sunglasses8',
        price:15,
        inCart:0
    },
    {
        name:'Sunglasses 9',
        tag:'sunglasses9',
        price:10,
        inCart:0
    },
    {
        name:'Bracelet 1',
        tag:'bracelets1',
        price:10,
        inCart:0
    },
    {
        name:'Bracelet 2',
        tag:'bracelets2',
        price:15,
        inCart:0
    },
    {
        name:'Bracelet 3',
        tag:'bracelets3',
        price:10,
        inCart:0
    },
    {
        name:'Bracelet 4',
        tag:'bracelets4',
        price:10,
        inCart:0
    },
    {
        name:'Bracelet 5',
        tag:'bracelets5',
        price:15,
        inCart:0
    },
    {
        name:'Bracelet 6',
        tag:'bracelets6',
        price:10,
        inCart:0
    },
    {
        name:'Bracelet 7',
        tag:'bracelets7',
        price:10,
        inCart:0
    },
    {
        name:'Bracelet 8',
        tag:'bracelets8',
        price:15,
        inCart:0
    },
    {
        name:'Bracelet 9',
        tag:'bracelets9',
        price:10,
        inCart:0
    },
    {
        name:'Necklaces 1',
        tag:'necklace1',
        price:10,
        inCart:0
    },
    {
        name:'Necklace 2',
        tag:'necklaces2',
        price:15,
        inCart:0
    },
    {
        name:'Necklace 3',
        tag:'necklaces3',
        price:10,
        inCart:0
    },
    {
        name:'Necklace 4',
        tag:'necklaces4',
        price:10,
        inCart:0
    },
    {
        name:'Necklace 5',
        tag:'necklaces5',
        price:15,
        inCart:0
    },
    {
        name:'Necklace 6',
        tag:'necklaces6',
        price:10,
        inCart:0
    },
    {
        name:'Necklace 7',
        tag:'necklaces7',
        price:10,
        inCart:0
    },
    {
        name:'Necklace 8',
        tag:'necklaces8',
        price:15,
        inCart:0
    },
    {
        name:'Necklace 9',
        tag:'necklaces9',
        price:10,
        inCart:0
    },
    {
        name:'Perfume 1',
        tag:'perfume1',
        price:10,
        inCart:0
    },
    {
        name:'Perfume 2',
        tag:'perfume2',
        price:15,
        inCart:0
    },
    {
        name:'Perfume 3',
        tag:'perfume3',
        price:10,
        inCart:0
    },
    {
        name:'Perfume 4',
        tag:'perfume4',
        price:10,
        inCart:0
    },
    {
        name:'Perfume 5',
        tag:'perfume5',
        price:15,
        inCart:0
    },
    {
        name:'Perfume 6',
        tag:'perfume6',
        price:10,
        inCart:0
    },
    {
        name:'Perfume 7',
        tag:'perfume7',
        price:10,
        inCart:0
    },
    {
        name:'Perfume 8',
        tag:'perfume8',
        price:15,
        inCart:0
    },
    {
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
    if(cartItems!=null){
        if(cartItems[product.tag]==undefined){
            cartItems={
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].inCart+=1;
    }else{
        product.inCart=1;
        cartItems={
           [product.tag]:product
       }
    }
localStorage.setItem('productsInCart', JSON.stringify(cartItems));
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
            <div class="product">
            <ion-icon name="close-circle-outline"></ion-icon>
            <img src="./Images/${item.tag}.png">
            <span>${item.name}</span>
            </div>
            <div class="price">${item.price}JOD</div>
            <div class="quantity">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
            <span>${item.inCart}</span>
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </div>
            <div class="total">
                ${item.inCart*item.price}JOD
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

onLoadCartNumbers();
showCart();