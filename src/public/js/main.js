const socket = io();

// Agregar producto
document.getElementById('product-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const price = document.getElementById('price').value;

  socket.emit('newProduct', { title, price });

  document.getElementById('title').value = '';
  document.getElementById('price').value = '';
});

// Eliminar producto
function deleteProduct(id) {
  socket.emit('deleteProduct', id);
}

// Escuchar actualización de productos
socket.on('updateProducts', (products) => {
  const productList = document.getElementById('product-list');
  if (!productList) return;
  productList.innerHTML = '';

  products.forEach((product) => {
    const li = document.createElement('li');
    li.id = `product-${product.id}`;
    li.innerHTML = `${product.title} - $${product.price} 
                    <button onclick="deleteProduct('${product.id}')">Eliminar</button>`;
    productList.appendChild(li);
  });
});
