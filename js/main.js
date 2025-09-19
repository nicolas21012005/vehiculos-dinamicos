const containerCards = document.getElementById('containerCars')
const buyVehicle = document.getElementById('button_buy');
const containerVehicle = document.getElementById('vehicle_item');
const btnCreateVehicle = document.getElementById('buttonCreateVehicle');
const containerButtonsCard = document.getElementById('cont_buttons');
const carInfo = document.getElementById('carInfo');
const carGeneralInfo = document.getElementById('bodyCard');
const form = document.getElementById('vehiculo-form');
const inputFoto = document.getElementById('foto');
const inputNombre = document.getElementById('nombre');
const inputMarca = document.getElementById('marca');
const inputModelo = document.getElementById('modelo');
const inputKilometraje = document.getElementById('kilometraje');
const inputPrecio = document.getElementById('precio');


function createNewVehicle(foto, nombre, marca, modelo, kilometraje, precio) {
    // creo el elemento padre de la tarjeta
    const containerTarget = document.createElement('div');
    containerTarget.classList.add('col-md-6', 'item-vehiculo');
    // creo el elemento hijo que contiene todo el cuerpo de la informacion con la foto 
    const bodyCard = document.createElement('div');
    bodyCard.classList.add('card', 'h-100');
    // creamos la imagen
    const img = document.createElement('img')
    img.src = foto
    // creamos el contenedor de toda la informacion del vehiculo
    const carInfo = document.createElement('div');
    carInfo.classList.add('card-body');
    // creamos el h4 que contiene el nombre del vehiculo
    const nameVehicle = document.createElement('h3');
    nameVehicle.classList.add('card-title');
    nameVehicle.textContent = nombre
    // creamos el campo para la marca del vehiculo
    const brandVehicle = document.createElement('h4');
    brandVehicle.classList.add('card-subtitle', 'mb-2');
    brandVehicle.textContent = marca
    // creamos el campo para el modelo del vehiculo
    const modelVehicle = document.createElement('h4');
    modelVehicle.classList.add('card-text');
    modelVehicle.textContent = modelo
    // creamos el campo para el kilometraje del vehiculo
    const kmVehicle = document.createElement('h4');
    kmVehicle.classList.add('card-title');
    kmVehicle.textContent = kilometraje
    // creamos el campo para el precio del vehiculo
    const priceVehicle = document.createElement('h4');
    priceVehicle.classList.add('text-success');
    priceVehicle.textContent = precio
    // creamos el contenedor de los dos botones, comprar y eliminar
    const containerButtons = document.createElement('div');
    containerButtons.classList.add('d-flex', 'justify-content-between', 'mt-3')
    // creamos el boton de comprar
    const buttonBuy = document.createElement('button');
    buttonBuy.classList.add('btn', 'btn-success')
    buttonBuy.id = 'button_buy'
    buttonBuy.textContent = 'Comprar';
    // creamos el boton de eliminar
    const buttonDeleteCard = document.createElement('button');
    buttonDeleteCard.classList.add('btn', 'btn-danger')
    buttonDeleteCard.id = 'button_delete'
    buttonDeleteCard.textContent = 'Eliminar';

    containerTarget.appendChild(bodyCard)
    bodyCard.appendChild(img)
    bodyCard.appendChild(carInfo)
    carInfo.appendChild(nameVehicle);
    carInfo.appendChild(brandVehicle)
    carInfo.appendChild(modelVehicle)
    carInfo.appendChild(kmVehicle)
    carInfo.appendChild(priceVehicle)
    carInfo.appendChild(containerButtons)
    containerButtons.appendChild(buttonBuy)
    containerButtons.appendChild(buttonDeleteCard)

    return containerTarget;

}

form.addEventListener('submit', (m) => {
    m.preventDefault()
    let foto = inputFoto.value.trim();
    const nombre = inputNombre.value.trim();
    const marca = inputMarca.value.trim();
    const modelo = inputModelo.value.trim();
    const kilometraje = inputKilometraje.value.trim();
    const precio = inputPrecio.value.trim();

    if (!nombre || !marca || !modelo || !kilometraje || !precio) {
        alert('Todos los campos son obligatorios');
    } else {
        if (foto === '') {
            foto = 'https://www.edmunds.com/assets/m/cs/cms/a53563e2-a6f9-41d1-94d5-802bea0eba41/2026+Lamborghini+Temerario+5_1280.jpg'
        }
        const newVehicle = createNewVehicle(foto, nombre, marca, modelo, kilometraje, precio)
        containerCards.appendChild(newVehicle)
        form.reset()
        eventsToCard(newVehicle)
    }
})

function eventsToCard(containerTarget) {
    const buttonBuy = containerTarget.querySelector('#button_buy')
    const buttonDelete = containerTarget.querySelector('#button_delete');

    buttonDelete.addEventListener('click', () => {
        containerTarget.remove()
    })
    buttonBuy.addEventListener('click', () => {
        alert('Has comprado el vehiculo')
        containerTarget.remove()
    })
}