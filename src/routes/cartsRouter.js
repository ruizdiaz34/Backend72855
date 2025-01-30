import { Router } from 'express';
import CartManager from '../managers/CartManager.js';

const router = Router();
const cartManager = new CartManager();

//Crea un nuevo carrito vacío.
router.post('/', async (req, res) => {
  const newCart = await cartManager.createCart();
  res.status(201).json({ message: 'Carrito creado', cart: newCart });
});

//Devuelve los productos de un carrito.
router.get('/:cid', async (req, res) => {
  const cart = await cartManager.getCartById(Number(req.params.cid));
  cart ? res.json(cart) : res.status(404).json({ error: 'Carrito no encontrado' });
});

//Agrega un producto a un carrito.
router.post('/:cid/product/:pid', async (req, res) => {
  const cart = await cartManager.addProductToCart(Number(req.params.cid), Number(req.params.pid));
  cart ? res.json(cart) : res.status(404).json({ error: 'Carrito no encontrado' });
});

export default router;
