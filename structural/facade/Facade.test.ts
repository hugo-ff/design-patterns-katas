import { StockManager } from "./FacadeKata";
import { ShoppingCart } from "./FacadeKata";
import type { Product } from "./FacadeKata";

describe("Facade kata", () => {
  describe("StockManager", () => {
    let stockManager: StockManager;
    let product1: Product, product2: Product;

    beforeEach(() => {
      product1 = { id: "p1", name: "Laptop", price: 1000, quantity: 10 };
      product2 = { id: "p2", name: "Smartphone", price: 500, quantity: 15 };
      stockManager = new StockManager([product1, product2]);
    });

    it("should add products to stock", () => {
      const newProduct: Product = {
        id: "p3",
        name: "Tablet",
        price: 300,
        quantity: 5,
      };
      stockManager.addProductsToStock([newProduct]);
      expect(stockManager["stock"][newProduct.id]).toEqual(5);
    });

    it("should remove products from stock", () => {
      stockManager.removeProductsStock([{ ...product1, quantity: 5 }]);
      expect(stockManager["stock"][product1.id]).toEqual(5);
    });

    it("should check product stock availability", () => {
      const isAvailable = stockManager.checkProductStock(product1.id, 5);
      expect(isAvailable).toBeTruthy();

      const isNotAvailable = stockManager.checkProductStock(product1.id, 15);
      expect(isNotAvailable).toBeFalsy();
    });
  });

  describe("ShoppingCart", () => {
    let shoppingCart: ShoppingCart;
    let stockManager: StockManager;
    let product1: Product, product2: Product;

    beforeEach(() => {
      product1 = { id: "p1", name: "Laptop", price: 1000, quantity: 10 };
      product2 = { id: "p2", name: "Smartphone", price: 500, quantity: 15 };
      stockManager = new StockManager([product1, product2]);
      shoppingCart = new ShoppingCart(stockManager);
    });

    it("should add product to the cart", () => {
      shoppingCart.addToCart(product1, 1);
      shoppingCart.addToCart(product2, 5);
      expect(shoppingCart.getCartContent()).toEqual([
        {
          ...product1,
          quantity: 1,
        },
        {
          ...product2,
          quantity: 5,
        },
      ]);
    });

    it("should remove product from the cart", () => {
      shoppingCart.addToCart(product1, 1);
      shoppingCart.removeFromCart(product1.id);
      expect(shoppingCart.getCartContent()).toEqual([]);
    });

    it("should update product quantity in the cart", () => {
      shoppingCart.addToCart(product1, 1);
      shoppingCart.updateQuantity(product1.id, 2);
      expect(shoppingCart.getCartContent()).toContainEqual({
        ...product1,
        quantity: 2,
      });
    });

    it("should calculate the total correctly", () => {
      shoppingCart.addToCart(product1, 2); // 2000 total
      shoppingCart.addToCart(product2, 1); // 500 total
      const total = shoppingCart.calculateTotal();
      expect(total).toEqual(2500);
    });

    it("should handle adding product with insufficient stock", () => {
      expect(() => shoppingCart.addToCart(product1, 100)).toThrow(
        "There is not enough stock for this product"
      );
    });
  });
});
