//'************** JS FILE **************'
//=============== CONSTATS ===============
const items = [
  {
    id: 1,
    name: 'Hoodies',
    price: 14.00,
    image: 'assets/images/featured1.png',
    category: 'hoodies',
    quantity: 10
  },
  {
    id: 2,
    name: 'Shirts',
    price: 24.00,
    image: 'assets/images/featured2.png',
    category: 'shirts',
    quantity: 15
  },
  {
    id: 3,
    name: 'Sweatshirts',
    price: 24.00,
    image: 'assets/images/featured3.png',
    category: 'shirts',
    quantity: 20
  }
]

const myCart = {}


//'************** DOM **************'
//=============== BASE ===============
const body = document.body


//=============== NAVBAR MENU ===============
//--------------- ELEMENTS
const navBtnOpen = document.getElementById( 'menu-btn' )
const navBtnClose = document.getElementById( 'nav-close' )
const navMenuContainer = document.getElementById( 'nav-container' )
const navList = document.querySelector( '.nav-list' )
//--------------- METHOS
navBtnOpen.addEventListener( 'click', () => navMenuContainer.classList.remove( 'hide' ) )

navBtnClose.addEventListener( 'click', () => navMenuContainer.classList.add( 'hide' ) )

navList.addEventListener( 'click', () => navMenuContainer.classList.add( 'hide' ) )


//=============== THEME ===============
//--------------- ELEMENTS
const btnTheme = document.getElementById( 'theme-btn' )
//--------------- METHODS
const darkThemeChange = () => {

  if(btnTheme.classList.contains( 'bx-moon' )){
   btnTheme.classList.replace('bx-moon','bx-sun')
   }else{
       btnTheme.classList.replace('bx-sun', 'bx-moon')
   }
   
   body.classList.toggle( 'dark' )
}

btnTheme.addEventListener( 'click', () => darkThemeChange())


//=============== NAVBAR SCROLL ===============
//--------------- ELEMENTS
const nav = document.querySelector("nav")
//--------------- METHODS
window.addEventListener( "scroll", () =>{
  if(scrollY >= 50){
      nav.classList.add("scrolled")
  }else{
      nav.classList.remove("scrolled")
  }
} )


//=============== CART DISPLAY ===============
//--------------- ELEMENTS
const cartBtnOpen = document.getElementById( 'cart-btn' )
const cartBtnClose = document.getElementById ( 'close-cart' )
const cartContainer = document.getElementById( 'cart-container' )
//--------------- METHODS
cartBtnOpen.addEventListener( 'click', () => cartContainer.classList.remove( 'hide' ) )

cartBtnClose.addEventListener( 'click', () => cartContainer.classList.add( 'hide' ) )


//=============== PRODUCT CARDS ===============
//--------------- ELEMENTS
const prodCont = document.querySelector( '.products-container' )
//--------------- METHODS
const createProd = ( product => {
  let price = product.price.toFixed(2)
  prodCont.innerHTML += `
  <article class="product-card">
          <div class="card-img">
            <img src=${product.image} alt="">
          </div>
          <div class="card-data">
            <h2 class="card-price">$ ${price} <span class="card-stock">| Stock: ${product.quantity}</span></h2>
            <h3 class="card-cat">${product.name}</h3>
            <button class="card-btn-add" id="cba-${product.id}">
              <i class='bx bx-plus'></i>
            </button>
          </div>
        </article>`
} )

items.forEach( product => createProd(product) )


//=============== PRODUCT CARDS ===============
//--------------- ELEMENTS
const addCartBtns = document.querySelectorAll( '.card-btn-add' )
console.log(addCartBtns);
const cartCounter = document.getElementById('cart-counter')
//--------------- METHODS
const addToCart = ( id => {
  if(myCart[id]){
    myCart[id] += 1
  }else{
    myCart[id] = 1
  }
} )

const cartTotal = ( () => {
  let total = 0
  for (const key in myCart){
    total += myCart[key]
  }
  cartCounter.textContent = total
} )

addCartBtns.forEach( btn => {
  btn.addEventListener( 'click', event => {
    let btnId = 0
    const btnPath = event.path
    if(btnPath.length === 11){
      btnId = btnPath[1].id.substr(4)
      addToCart(btnId)
    }else{
      btnId = btnPath[0].id.substr(4)
      addToCart(btnId)
    }
    cartTotal()
  } )
})





















//=============== ACTION ===============
//--------------- ELEMENTS

//--------------- METHODS