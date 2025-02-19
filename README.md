# Backend con Express, Handlebars y Websockets

## 📌 Descripción

Este proyecto es un servidor backend construido con **Node.js**, **Express**, **Handlebars** y **Websockets**. Permite gestionar productos y carritos de compras con persistencia en archivos JSON.

---

## 🚀 Instalación

### **1️⃣ Clonar el repositorio**

```sh
git clone https://github.com/ruizdiaz34/Backend72855.git
cd Backend72855
```

### **2️⃣ Instalar dependencias**

```sh
npm install
```

### **3️⃣ Ejecutar el servidor**

```sh
npm start
```

El servidor se ejecutará en:\
🔗 `http://localhost:8081`

---

## 📁 Estructura del Proyecto

```
Backend72855/
│── src/
│   ├── managers/
│   │   ├── ProductManager.js
│   │   ├── CartManager.js
│   ├── routes/
│   │   ├── productsRouter.js
│   │   ├── cartsRouter.js
│   │   ├── viewsRouter.js
│   ├── views/
│   │   ├── layouts/
│   │   │   ├── main.handlebars
│   │   ├── index.handlebars
│   │   ├── realTimeProducts.handlebars
│   ├── public/
│   │   ├── js/
│   │   │   ├── realTimeProducts.js
│   ├── app.js
│   ├── server.js
├── package.json
├── README.md
```

---

## 🔥 Funcionalidades

### \*\*Productos (`/api/products`)

✅ Listar todos los productos (`GET /`) ✅ Obtener un producto por ID (`GET /:pid`) ✅ Agregar un nuevo producto (`POST /`) ✅ Actualizar un producto (`PUT /:pid`) ✅ Eliminar un producto (`DELETE /:pid`)

### \*\*Carrito (`/api/carts`)

✅ Crear un carrito (`POST /`) ✅ Listar productos de un carrito (`GET /:cid`) ✅ Agregar un producto a un carrito (`POST /:cid/product/:pid`)

### **Handlebars & Websockets**

✅ **Vistas con Handlebars**:

- `http://localhost:8081/products` → Muestra todos los productos.
- `http://localhost:8081/realtimeproducts` → Lista de productos en tiempo real.

✅ **Actualización en tiempo real con WebSockets**:

- Cuando se agrega o elimina un producto, la vista `/realtimeproducts` se actualiza sin necesidad de recargar la página.

✅ **Formulario para agregar productos** en `/realtimeproducts`. ✅ **Botón de eliminación** para eliminar productos desde la vista en tiempo real.

---

## 💡 Cómo probar WebSockets

1️⃣ Abre dos pestañas en el navegador:

- `http://localhost:8081/realtimeproducts` 2️⃣ Agrega un producto desde el formulario en esa vista. 3️⃣ Observa cómo la lista se actualiza automáticamente.

---

## 🛠 Tecnologías utilizadas

- **Node.js** + **Express.js**
- **Handlebars** para vistas dinámicas
- **Socket.io** para WebSockets
- **File System** para persistencia de datos

---

### 📌 **Autor**

[ruizdiaz34](https://github.com/ruizdiaz34)

---


