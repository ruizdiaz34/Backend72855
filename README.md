# Proyecto Backend con Node.js y Express

Este proyecto es una API para gestionar productos y carritos de compra utilizando Node.js, Express y almacenamiento en archivos JSON.

## 🚀 Instalación y Configuración

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/ruizdiaz34/Backend72855.git
cd backend__server
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Ejecutar el servidor
```bash
npm start
```
El servidor correrá en `http://localhost:8081/`.

---
## 📌 Rutas Disponibles

### 📦 **Productos**

- `GET /api/products` → Devuelve todos los productos.
- `GET /api/products/:pid` → Devuelve un producto por ID.
- `POST /api/products` → Crea un producto nuevo (requiere JSON con `title`, `description`, `code`, `price`, `stock`, `category`, `thumbnails`).
- `PUT /api/products/:pid` → Modifica un producto (excepto su ID).
- `DELETE /api/products/:pid` → Elimina un producto por ID.

### 🛒 **Carritos**

- `POST /api/carts` → Crea un carrito vacío.
- `GET /api/carts/:cid` → Devuelve los productos de un carrito por ID.
- `POST /api/carts/:cid/product/:pid` → Agrega un producto a un carrito.

---
## 🧪 Pruebas con Postman

1️⃣ Abrir **Postman**.
2️⃣ Usar las rutas mencionadas con métodos `GET`, `POST`, `PUT` y `DELETE`.
3️⃣ Enviar JSON en `POST` y `PUT`, ejemplo:
```json
{
  "title": "Zapatillas Nike",
  "description": "Zapatillas deportivas",
  "code": "NK123",
  "price": 20000,
  "stock": 15,
  "category": "Deportivo",
  "thumbnails": ["img1.jpg", "img2.jpg"]
}
```

---
## 📜 Estructura del Proyecto
```
backend-server/
│── src/
│   ├── managers/
│   │   ├── ProductManager.js  # Lógica de productos
│   │   ├── CartManager.js     # Lógica de carritos
│   ├── routes/
│   │   ├── productsRouter.js  # Rutas de productos
│   │   ├── cartsRouter.js     # Rutas de carritos
│   ├── server.js             # Configuración del servidor
│── data/
│   ├── products.json         # Base de datos de productos
│   ├── carts.json            # Base de datos de carritos
│── package.json
│── README.md
```

---

