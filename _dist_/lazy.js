
const isIntersecting = (entry) => {
    return entry.isIntersecting // true (dentro de la pantalla)
}

const accion = (entry) => {
    const nodo = entry.target;
    console.log("holis");

    // des registra la imagen (unlisten)
    observer.unobserve(nodo);
}

const observer = new IntersectionObserver((entries) => {
  entries
    .filter(isIntersecting)
    .forEach(accion)
})

//
export const registerImage = (imagen) => {
  // IntersectactionObservador -> observer(imagen)
  observer.observe(imagen)
}