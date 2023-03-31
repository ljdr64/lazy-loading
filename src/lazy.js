
const isIntersecting = (entry) => {
    return entry.isIntersecting // true (dentro de la pantalla)
}

const loadImage = (entry) => {
    const container = entry.target; // container (DIV)
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    // load image
    imagen.src = url;
    loadedImages++;
    printLog();

    // des registra la imagen (unlisten)
    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
  entries
    .filter(isIntersecting)
    .forEach(loadImage)
})

//
export const registerImage = (imagen) => {
  // IntersectactionObservador -> observer(imagen)
  observer.observe(imagen);
}