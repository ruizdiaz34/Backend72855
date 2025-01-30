import fs from 'fs/promises';
import path from 'path';

class ProductManager {
  constructor() {
    this.filePath = path.resolve('src/data', 'products.json');
  }

//Lee y devuelve todos los productos del archivo products.json.
  async getProducts() {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      return JSON.parse(data) || [];
    } catch (error) {
      return [];
    }
  }
//Guarda un array de productos en products.json.
  async saveProducts(products) {
    await fs.writeFile(this.filePath, JSON.stringify(products, null, 2));
  }

//Crea un producto nuevo con ID único y lo guarda.
  async addProduct(product) {
    const products = await this.getProducts();
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      ...product,
    };
    products.push(newProduct);
    await this.saveProducts(products);
    return newProduct;
  }

// Busca un producto por su ID.
  async getProductById(id) {
    const products = await this.getProducts();
    return products.find((product) => product.id === id);
  }

//Modifica un producto sin cambiar su ID.
  async updateProduct(id, updatedFields) {
    const products = await this.getProducts();
    const index = products.findIndex((product) => product.id === id);
    if (index === -1) return null;

    products[index] = { ...products[index], ...updatedFields, id };
    await this.saveProducts(products);
    return products[index];
  }

//Elimina un producto por su ID
  async deleteProduct(id) {
    let products = await this.getProducts();
    const productExists = products.some((product) => product.id === id);
    if (!productExists) return false;

    products = products.filter((product) => product.id !== id);
    await this.saveProducts(products);
    return true;
  }
}

export default ProductManager;
