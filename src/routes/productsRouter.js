import { Router } from 'express';
import ProductManager from '../managers/ProductManager.js';

const router = Router();
const productManager = new ProductManager();

//Devuelve todos los productos.
router.get('/', async (req, res) => {
  const products = await productManager.getProducts();
  res.json(products);
});

//Devuelve un producto por ID.
router.get('/:pid', async (req, res) => {
  const product = await productManager.getProductById(Number(req.params.pid));
  product ? res.json(product) : res.status(404).json({ error: 'Producto no encontrado' });
});

//Crea un nuevo producto.
router.post('/', async (req, res) => {
  const newProduct = await productManager.addProduct(req.body);
  res.status(201).json({ message: 'Producto agregado', product: newProduct });
});

//Modifica un producto (excepto su ID).
router.put('/:pid', async (req, res) => {
  const updatedProduct = await productManager.updateProduct(Number(req.params.pid), req.body);
  updatedProduct ? res.json(updatedProduct) : res.status(404).json({ error: 'Producto no encontrado' });
});

//Elimina un producto.
router.delete('/:pid', async (req, res) => {
  const deleted = await productManager.deleteProduct(Number(req.params.pid));
  deleted ? res.json({ message: 'Producto eliminado' }) : res.status(404).json({ error: 'Producto no encontrado' });
});

export default router;
