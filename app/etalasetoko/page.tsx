"use client";

import { useState } from "react";
import ProductList from "./_components/ProductList";
import CartSummary from "./_components/CartSummary";
import { INITIAL_PRODUCTS } from "./data";
import { Product, CartItem } from "./types";

export default function EtalaseTokoPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-200 relative">
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none select-none p-4">
        <img
          src="/hesaprintbg.jpeg"
          alt="Hesa Print Online Watermark"
          className="w-[500px] max-w-[85vw] object-contain opacity-10"
        />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto py-8 px-4 sm:px-6">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Etalase Toko</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <ProductList products={INITIAL_PRODUCTS} onAddToCart={handleAddToCart} />
          </div>
          <div className="md:col-span-1">
            <CartSummary items={cart} onRemoveItem={handleRemoveItem} />
          </div>
        </div>
      </main>
    </div>
  );
}
