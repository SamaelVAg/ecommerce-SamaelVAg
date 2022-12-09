//'************** JS FILE **************'

//=============== LOADER ===============
document.addEventListener( "DOMContentLoaded", ( ) => {

  const loadComponent = () => {
    const loader = document.getElementById( "loader" )
    setTimeout( () => {
       loader.classList.add( "hide" )
    }, 2000 )
  }
    
  
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
  
  let myCart = []


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
     themeUpdater( 'dark' )
     }else{
         btnTheme.classList.replace('bx-sun', 'bx-moon')
         themeUpdater( '' )
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
    prodCont.innerHTML += `
    <article class="product-card">
            <div class="card-img">
              <img src=${product.image} alt="">
            </div>
            <div class="card-data">
              <h2 class="card-price">$${product.price.toFixed(2)} <span class="card-stock">| Stock: ${product.quantity}</span></h2>
              <h3 class="card-cat">${product.name}</h3>
              <button class="card-btn-add" id="cba-${product.id}">
                <i class='bx bx-plus'></i>
              </button>
            </div>
          </article>`
  } )
  
  items.forEach( product => createProd(product) )
  
  
  //=============== CART CONTENT CARDS ===============
  //--------------- ELEMENTS
  const cartCounter = document.getElementById( 'cart-counter' )
  const cartContent = document.getElementById( 'cart-content' )
  const chekoutArticles = document.getElementById( 'total-articles' )
  const chekoutPrice = document.getElementById( 'total-price' )
  //--------------- METHODS
  const hideEmpty = ( () => {
    const emptyCart = document.querySelector('.cart-empty')
    emptyCart.classList.add('hide')  
  } )
  
  const showEmpty = ( () => {
    const emptyCart = document.querySelector('.cart-empty')
    emptyCart.classList.remove('hide')
  } )
  
  const cartTotal = ( () => {
    let totalUnits = 0
    let totalPrice = 0
    myCart.forEach( item => {
      totalUnits += item.units
      totalPrice += (item.units * item.price)
    } )
    cartCounter.textContent = totalUnits
    chekoutArticles.textContent = `${totalUnits} articles`
    chekoutPrice.textContent = `$${totalPrice.toFixed(2)}`
  } )
  
  let defaultCartCont = ''
  
  const cartCard = ( () => {
    cartContent.innerHTML =  defaultCartCont 
    myCart.forEach( product => {
      let subtotal = product.price * product.units
  
      cartContent.innerHTML += `
      <article class="cart-item" id="product.id">
              <div class="item-img">
                <img src=${product.image} alt="">
              </div>
              <div class="item-desc">
                <h3>${product.name}</h3>
                <span class="item-stock">
                  Stock: ${product.quantity} | 
                  <span class="item-price">
                    $${product.price.toFixed(2)}
                  </span>
                </span>
                <span class="item-subtotal">
                  Subtotal: $${subtotal.toFixed(2)}
                </span>
                <div class="item-amount-container">
                  <div class="amount-info">
                    <span class="item-minus">
                      <i class='bx bx-minus btn-minus' id="minus-btn-${product.id}"></i>
                    </span>
                    <span class="item-amount">
                      ${product.units} units
                    </span>
                    <span class="item-plus">
                      <i class='bx bx-plus btn-plus' id="plus-btn-${product.id}"></i>
                    </span>
                  </div>
                  <i class='bx bx-trash-alt item-trash' id="trash-btn-${product.id}"></i>
                </div>
              </div>
            </article>`
    } )
    if(myCart.length === 0){
      showEmpty()
    }
  
  } )
  
  
  //=============== CART CARD BUTTONS ===============
  //--------------- ELEMENTS
  
  //--------------- METHODS
  
  const cartModifyer = ( (action, prodId) => {
    const product = myCart.find(item => item.id === prodId )
    const index = myCart.indexOf(product)
  
    switch (action) {
      case 'minus':
        if( product.units > 1 )
        {
          product.units -= 1
        }else{
          myCart.splice(index, 1)
        }
        break;
      case 'plus':
        if(product.units < product.quantity){
          product.units += 1
        }
        break;
      case 'trash':
        myCart.splice(index, 1)
        break;
    }
    cartUpdater(myCart)
    cartTotal()
    cartCard()
    cardBtns()
  })
  
  const cardBtns = ( () => {
    const minusBtns = document.querySelectorAll( '.btn-minus' )
    const plusBtns = document.querySelectorAll( '.btn-plus' )
    const trashBtns = document.querySelectorAll( '.item-trash' )
  
    minusBtns.forEach( btn => {
      btn.addEventListener( 'click', event => {
        let btnId = parseInt(event.target.id.substr(10))
        cartModifyer('minus', btnId)
      } )
    } )
  
    plusBtns.forEach( btn => {
      btn.addEventListener( 'click', event => {
        let btnId = parseInt(event.target.id.substr(9))
        cartModifyer('plus', btnId)
      } )
    } )
  
    trashBtns.forEach( btn => {
      btn.addEventListener( 'click', event => {
        let btnId = parseInt(event.target.id.substr(10))
        cartModifyer('trash', btnId)
      } )
    } )
  } )
  
  
  //=============== ADD TO CART ===============
  //--------------- ELEMENTS
  const addCartBtns = document.querySelectorAll( '.card-btn-add' )
  //--------------- METHODS
  const addToCart = ( prodId => {
    const product = myCart.find(item => item.id === prodId )
    const pushProduct = items.find( item => item.id === prodId )
    
    if (product){
      if(product.units < product.quantity){
        product.units += 1
      }
    }else{
      pushProduct.units = 1
      myCart.push(pushProduct)
    }

    cartUpdater(myCart)
  } )
  
  addCartBtns.forEach( btn => {
    btn.addEventListener( 'click', event => {    
      let btnId = 0
      const btnPath = event.path
      
      if(myCart.length === 0){
        hideEmpty()
        defaultCartCont = cartContent.innerHTML
      }
  
      if(btnPath.length === 11){
        btnId = parseInt( btnPath[1].id.substr(4) )
        addToCart(btnId)
      }else{
        btnId = parseInt( btnPath[0].id.substr(4) )
        addToCart(btnId)
      }
      
      cartTotal()
      cartCard()
      cardBtns()
    } )
  } )


  //=============== ADD TO CART ===============
  //--------------- ELEMENTS
  const btnCheck = document.getElementById( 'cart-btn-chko' )
  //--------------- METHODS
  const check = () => {
    if(myCart.length > 0){
      myCart = []
      cartUpdater(myCart)
      cartTotal()
      cartCard()
      cardBtns()
    }
  }

  btnCheck.addEventListener( 'click', event => {
    check()
  } )

  
    //'************** STORAGE **************'
  const getStorageCart = () => {
    let cart = window.sessionStorage.getItem( "cart" )
    
    if( cart ){
        cart = JSON.parse( cart )
        myCart = cart
        hideEmpty()
        defaultCartCont = cartContent.innerHTML
        cartTotal()
        cartCard()
        cardBtns()
      }else{
        window.sessionStorage.setItem("cart", JSON.stringify( [] ))
      }
  }
  
  const cartUpdater = ( cartUpdate ) => {
    window.sessionStorage.setItem( "cart", JSON.stringify( cartUpdate ) )
  }
  
  const getStorageTheme = () => {
    let theme = window.sessionStorage.getItem( "theme" )
    if( theme ){
      theme = JSON.parse( theme )
      if( theme === 'dark' ){
        btnTheme.classList.replace('bx-moon','bx-sun')
        body.classList.add( theme )
      }
    }else{
      window.sessionStorage.setItem("cart", JSON.stringify( '' ) )
    }
  }

  const themeUpdater = ( mode ) => {
    window.sessionStorage.setItem( "theme", JSON.stringify( mode ) )
  }

  getStorageCart()
  getStorageTheme()

  loadComponent()
})























//=============== ACTION ===============
//--------------- ELEMENTS

//--------------- METHODS