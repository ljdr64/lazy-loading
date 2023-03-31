import { registerImage } from "./lazy";

// crear (1) imagen
// agregar #imagen

const minimum = 1;
const maximum = 123;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {
    const container = document.createElement("div");
    container.className = "p-4";
    container.id="fox-image";

    const imagen = document.createElement("img");
    imagen.className = "mx-auto bg-gray-500 rounded";
    imagen.width="320";
    imagen.dataset.src=`https://randomfox.ca/images/${random()}.jpg`;  

    container.appendChild(imagen);

    return container;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images");

const addButton = document.querySelector('#add-img');
const rmButton = document.querySelector('#rm-img');

//
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
    appendedImages++;    
    printLog();
}

const rmAllImages = () => {
    const foxImages = document.querySelectorAll('#fox-image');
    [...foxImages].map((value) => value.remove());
    appendedImages = 0;
    loadedImages = 0;
    printLog();    
}

rmButton.addEventListener("click", rmAllImages);
addButton.addEventListener("click", addImage);