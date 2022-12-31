//! Variables
let BilleteraBtn = document.getElementById("billetera-btn")
let DropdownBilletera = document.querySelector(".dropdown")
let CardContainer = document.querySelector(".card-container")
let range = document.createRange();


//! Events listeners
//* Boton de la billetera
BilleteraBtn.addEventListener("click", () => {
	DropdownBilletera.classList.toggle("hidden")
})

//! Crear tarjetas
let crearTarjeta = (img, price, name, description) => {
	const HtmlTemplate = `
    <div class="card">
		<img src="${img}" alt="${name}">
		<div class="bottom-container">
		    <div class="left-container">
			    <b class="price">$ ${price}</b>
				<h4>${name}</h4>
			</div>
			<div class="rigth-container">
				<img src="./img/icons/bt_add_to_cart.svg" alt="Agrega este producto a tu carrito">
			</div>
			<p class="description hidden">${description}</p>
		</div>
	</div>
    `
	let fragment = range.createContextualFragment(HtmlTemplate);
	CardContainer.appendChild(fragment);
}

crearTarjeta("", "300000", "La casa de tus sueños", "Casa monoambientes con baño cocina y terraza")