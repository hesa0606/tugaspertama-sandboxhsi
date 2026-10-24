"use client";

import { CartItem } from "../types";
import { formatRupiah, sendToWhatsApp } from "../utils";

interface CartSummaryProps {
  items: CartItem[];
  onRemoveItem: (id: number) => void;
}

export default function CartSummary({ items, onRemoveItem }: CartSummaryProps) {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const PHONE_NUMBER = "6283869661072";

  const handleCheckout = () => {
    sendToWhatsApp(items, PHONE_NUMBER);
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm sticky top-6">
      <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 mb-3">
        Keranjang Belanja
      </h2>

      {items.length === 0 ? (
        <p className="text-slate-400 text-sm py-6 text-center border border-dashed border-slate-200 rounded-lg">
          Keranjang masih kosong
        </p>
      ) : (
        <div className="space-y-3">
          <ul className="divide-y divide-slate-100 max-h-60 overflow-y-auto">
            {items.map((item) => (
              <li key={item.id} className="py-2.5 flex justify-between items-center text-sm">
                <div>
                  <p className="font-medium text-slate-700">{item.name}</p>
                  <p className="text-xs text-slate-400">
                    {formatRupiah(item.price)} &times; {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-800">
                    {formatRupiah(item.price * item.quantity)}
                  </span>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-slate-400 hover:text-red-500 font-bold px-1"
                  >
                    &times;
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-slate-100 pt-3 mt-3">
            <div className="flex justify-between items-center font-bold text-slate-800 mb-3">
              <span>Total:</span>
              <span className="text-blue-600">{formatRupiah(totalPrice)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.842-1.001z" />
              </svg>
              Checkout via WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
