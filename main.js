const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', togglemobileMenu);
menuCarritoIcon.addEventListener('click', togglecarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
   }

    desktopMenu.classList.toggle('inactive');
}


function togglemobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

function togglecarritoAside() {
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 

   if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
   }

   const isProductDetailClosed = productDetailContainer.classList.contains('inactive'); 

   if(!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
   }

   shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive')
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')

}

const productList = [];

productList.push({
    name: 'Casa moderna con piscina en venta',
    price: 'Fracción desde 2.3',
    image: 'https://img.freepik.com/psd-gratis/publicacion-instagram-propiedad-inmobiliaria-o-plantilla-banner-redes-sociales_106176-646.jpg?w=740&t=st=1672294032~exp=1672294632~hmac=83b59255bcbf97e470e89a5c5d928cf072148044ae52a7b1a1d3cd0d237a401e',
});

productList.push({
    name: 'Banner proyecto inmobiliario',
    price: 30000,
    image: "https://img.freepik.com/psd-gratis/plantilla-banner-web-o-publicacion-instagram-redes-sociales-bienes-raices_501970-148.jpg?w=740&t=st=1672294506~exp=1672295106~hmac=9c7470dc4ec0d01f581283b622ee1bfce63c77bf1026f75eee04b1af161440fe",
});
productList.push({
    name: 'Banner proyecto inmobiliario',
    price: 30000,
    image: "https://img.freepik.com/psd-gratis/plantilla-banner-web-o-publicacion-instagram-redes-sociales-bienes-raices_501970-147.jpg?w=740&t=st=1672294535~exp=1672295135~hmac=1c143f6c77d2c4ec11996d3546358d0479c44a72ee6cfd0da5b6d47fe942c8d8",
});


           /*  <div class="product-card">
                <img src="https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?cs=srgb&     dl=pexels-nikita-khandelwal-819805.jpg&fm=jpg" alt="">
                    <div class="product-info">
                        <div>
                            <p>$120,00</p>
                            <p>Bike</p>
                        </div> 
                        <figure>
                            <img src="/icons/bt_add_to_cart.svg" alt="">
                        </figure>               
                    </div>
                
            </div>  */

for ( product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);


    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

        
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
    
    cardsContainer.appendChild(productCard);
}

function renderProducts(arr) {
    for ( product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        productInfoDiv = document.createElement('div');
    
        productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', '/icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
    
        productCard.appendChild(productInfo);
        productCard.appendChild(img);
    
        cardsContainer.appendChild(productCard);
    }
}