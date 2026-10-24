"use client";

import { Product } from "../types";
import { formatRupiah } from "../utils";

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function ProductList({ products, onAddToCart }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            <div className="w-full h-28 bg-slate-100 rounded-lg mb-3 flex items-center justify-center text-slate-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800">{product.name}</h3>
            <p className="text-blue-600 font-bold mt-1 text-sm">{formatRupiah(product.price)}</p>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-lg text-sm transition-colors flex items-center justify-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Tambahkan ke Keranjang
          </button>
        </div>
      ))}
    </div>
  );
}
