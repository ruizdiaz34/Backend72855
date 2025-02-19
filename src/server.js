import express from 'express';
import { Server } from 'socket.io';
import { engine } from 'express-handlebars';
import path from 'path';
import productsRouter from './routes/productsRouter.js';
import cartsRouter from './routes/cartsRouter.js';
import viewsRouter from './routes/viewsRouter.js';

const app = express();
const PORT = 8081;

// Configurar Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.resolve('views'));

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Rutas
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/', viewsRouter);

// Crear servidor HTTP con WebSockets
const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const io = new Server(server);

// WebSockets para actualización en tiempo real
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  socket.on('newProduct', async (product) => {
    const newProduct = await productManager.addProduct(product);
    io.emit('updateProducts', await productManager.getProducts());
  });

  socket.on('deleteProduct', async (id) => {
    await productManager.deleteProduct(id);
    io.emit('updateProducts', await productManager.getProducts());
  });
});

export { io };
