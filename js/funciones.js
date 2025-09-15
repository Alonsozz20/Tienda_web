let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("listaCarrito");
  lista.innerHTML = "";
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
  });

  document.getElementById("total").textContent = total.toFixed(2);
  document.getElementById("cantidadCarrito").textContent = carrito.length;
}

function toggleCarrito() {
  document.getElementById("carrito").classList.toggle("oculto");
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
  } else {
    alert("¡Gracias por tu compra!");
    carrito = [];
    total = 0;
    actualizarCarrito();
    toggleCarrito();
  }
}

function buscarProducto() {
  const busqueda = document.getElementById("buscar").value.toLowerCase();
  const productos = document.querySelectorAll(".card");

  productos.forEach(card => {
    const nombre = card.querySelector("h2").textContent.toLowerCase();
    if (nombre.includes(busqueda)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
