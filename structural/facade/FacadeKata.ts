export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface ShoppingCartSystem {
  addToCart(product: Product, quantity: number): void;
  removeFromCart(productId: Product["id"]): boolean;
  updateQuantity(productId: Product["id"], quantity: number): void;
  getCartContent(): Product[];
  calculateTotal(): number;
}

// The facade class
export class ShoppingCart implements ShoppingCartSystem {
  private products: Map<Product["id"], Product>;
  private storageManager: StorageSystem;

  constructor(storageManager: StorageSystem) {
    this.products = new Map();
    this.storageManager = storageManager;
  }

  addToCart(product: Product, quantity: number): void {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero");
    }

    const isProductInStock = this.storageManager.checkProductStock(
      product.id,
      quantity
    );

    if (!isProductInStock) {
      throw new Error("There is not enough stock for this product");
    }

    const existingProduct = this.products.get(product.id);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      const productWithQuantity = {
        ...product,
        quantity,
      };
      this.products.set(product.id, productWithQuantity);
    }
  }

  removeFromCart(productId: Product["id"]): boolean {
    return this.products.delete(productId);
  }

  updateQuantity(productId: Product["id"], quantity: number): void {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero");
    }

    const existingProduct = this.products.get(productId);

    if (!existingProduct) {
      throw new Error("You have to add this product to cart first!");
    }

    existingProduct.quantity = quantity;
  }

  getCartContent(): Product[] {
    return Array.from(this.products.values());
  }

  calculateTotal(): number {
    const total = Array.from(this.products.values()).reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );

    this.storageManager.removeProductsStock(Array.from(this.products.values()));
    return total;
  }
}

interface StorageSystem {
  checkProductStock(productId: Product["id"], quantity: number): boolean;
  addProductsToStock(products: Product[]): void;
  removeProductsStock(products: Product[]): Product[];
}

// This subsystem is hidden to the client
export class StockManager implements StorageSystem {
  private stock: Record<Product["id"], Product["quantity"]>;

  constructor(initialStock?: Product[]) {
    this.stock = {};

    if (initialStock) {
      this.addProductsToStock(initialStock);
    }
  }

  checkProductStock(productId: Product["id"], quantity: number): boolean {
    const storedProduct = this.stock[productId];
    if (!storedProduct || storedProduct < quantity) {
      return false;
    }
    return true;
  }

  addProductsToStock(products: Product[]) {
    products.forEach((product) => {
      this.stock[product.id] = (this.stock[product.id] || 0) + product.quantity;
    });
  }

  removeProductsStock(products: Product[]): Product[] {
    return products
      .filter((product) => {
        const currentProductStock = this.stock[product.id] || 0;
        if (currentProductStock >= product.quantity) {
          this.stock[product.id] = currentProductStock - product.quantity;
          return true;
        }
        return false;
      })
      .map((product) => ({ ...product, quantity: this.stock[product.id] }));
  }
}

const product1: Product = {
  id: "p1",
  name: "Milk",
  price: 1000,
  quantity: 10,
};
const product2: Product = {
  id: "p2",
  name: "Red Apple",
  price: 500,
  quantity: 15,
};
const product3: Product = {
  id: "p3",
  name: "Water 1.5lt",
  price: 700,
  quantity: 4,
};

const initialStock: Product[] = [product1, product2, product3];
const stockManager = new StockManager(initialStock);

const shoppingCart = new ShoppingCart(stockManager);

shoppingCart.addToCart(product1, 2);
shoppingCart.addToCart(product2, 3);

shoppingCart.updateQuantity(product2.id, 1);

const total = shoppingCart.calculateTotal();
console.log(`Total: $${total}`);
