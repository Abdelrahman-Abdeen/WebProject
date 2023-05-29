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
    }
    
]
for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
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