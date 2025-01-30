import fs from 'fs/promises';
import path from 'path';

class CartManager {
  constructor() {
    this.filePath = path.resolve('src/data', 'carts.json');
  }

//Lee y devuelve todos los carritos desde carts.json  
  async getCarts() {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      return JSON.parse(data) || [];
    } catch (error) {
      return [];
    }
  }

//Guarda el array de carritos en carts.json
  async saveCarts(carts) {
    await fs.writeFile(this.filePath, JSON.stringify(carts, null, 2));
  }

//Crea un carrito nuevo con un ID único
  async createCart() {
    const carts = await this.getCarts();
    const newCart = {
      id: carts.length > 0 ? carts[carts.length - 1].id + 1 : 1,
      products: [],
    };
    carts.push(newCart);
    await this.saveCarts(carts);
    return newCart;
  }

//Busca un carrito por su ID.
  async getCartById(id) {
    const carts = await this.getCarts();
    return carts.find((cart) => cart.id === id);
  }

//Agrega un producto a un carrito existente. Si ya está, aumenta su cantidad.
  async addProductToCart(cartId, productId) {
    const carts = await this.getCarts();
    const cart = carts.find((c) => c.id === cartId);
    if (!cart) return null;

    const productIndex = cart.products.findIndex((p) => p.product === productId);
    if (productIndex !== -1) {
      cart.products[productIndex].quantity += 1;
    } else {
      cart.products.push({ product: productId, quantity: 1 });
    }

    await this.saveCarts(carts);
    return cart;
  }
}

export default CartManager;
