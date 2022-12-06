const btnTheme = document.getElementById( 'theme-btn' )
const body = document.body
const navBtnOpen = document.getElementById( 'menu-btn' )
const navBtnClose = document.getElementById( 'nav-close' )
const navMenuContainer = document.getElementById( 'nav-container' )
const cartBtnOpen = document.getElementById( 'cart-btn' )
const cartBtnClose = document.getElementById ( 'close-cart' )
const cartContainer = document.getElementById( 'cart-container' )
const nav = document.querySelector("nav")

window.addEventListener( "scroll", () =>{
    if(scrollY >= 50){
        nav.classList.add("scrolled")
    }else{
        nav.classList.remove("scrolled")
    }
} )

const darkThemeChange = () => {

   if(btnTheme.classList.contains( 'bx-moon' )){
    btnTheme.classList.replace('bx-moon','bx-sun')
    }else{
        btnTheme.classList.replace('bx-sun', 'bx-moon')
    }
    
    body.classList.toggle( 'dark' )
}

btnTheme.addEventListener( 'click', () => darkThemeChange())

cartBtnOpen.addEventListener( 'click', () => cartContainer.classList.remove( 'hide' ) )

cartBtnClose.addEventListener( 'click', () => cartContainer.classList.add( 'hide' ) )

navBtnOpen.addEventListener( 'click', () => navMenuContainer.classList.remove( 'hide' ) )

navBtnClose.addEventListener( 'click', () => navMenuContainer.classList.add( 'hide' ) )


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

