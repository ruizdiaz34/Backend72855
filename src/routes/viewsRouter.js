import { Router } from 'express';
import ProductManager from '../managers/ProductManager.js';

const router = Router();
const productManager = new ProductManager();

// Vista de productos con Handlebars
router.get('/products', async (req, res) => {
  const products = await productManager.getProducts();
  res.render('index', { title: 'Lista de Productos', products });
});

// Vista de productos en tiempo real con WebSockets
router.get('/realtimeproducts', async (req, res) => {
  const products = await productManager.getProducts();
  res.render('realTimeProducts', { title: 'Productos en Tiempo Real', products });
});

export default router;
