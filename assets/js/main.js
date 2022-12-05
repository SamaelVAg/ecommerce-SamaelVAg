const btnTheme = document.getElementById( 'theme-btn' )
const body = document.body
const cartBtnOpen = document.getElementById( 'cart-btn' )
const cartBtnClose = document.getElementById ( 'close-cart' )
const cartContainer = document.getElementById( 'cart-container' )

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

