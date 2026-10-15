"use client";

import React, { useState } from "react";

type Product = {
  id: string | number;
  name: string;
  price: number;
  unit: string;
  description: string;
  category: string;
  badge: string;
};

type CartItem = Product & {
  qty: number;
};

const products = [
  {
    id: 1,
    name: "Print Hitam Putih",
    price: 500,
    unit: "pcs",
    description: "Cetak dokumen standar.",
    category: "Dokumen",
    badge: "Hemat",
  },
  {
    id: 2,
    name: "Print Warna",
    price: 1000,
    unit: "pcs",
    description: "Cetak dokumen warna.",
    category: "Dokumen",
    badge: "Populer",
  },
  {
    id: 3,
    name: "Print Foto 3x4",
    price: 5000,
    unit: "4pcs",
    description: "Pasfoto ukuran 3x4 cm.",
    category: "Foto",
    badge: "Paket",
  },
  {
    id: 4,
    name: "Print Foto 4x6",
    price: 8000,
    unit: "4pcs",
    description: "Pasfoto ukuran 4x6 cm.",
    category: "Foto",
    badge: "Paket",
  },
  {
    id: 5,
    name: "Materai",
    price: 12000,
    unit: "pcs",
    description: "Materai resmi 10000.",
    category: "ATK",
    badge: "Populer",
  },
  {
    id: 6,
    name: "Amplop Coklat",
    price: 5000,
    unit: "pcs",
    description: "amplop coklat dengan desain standar.",
    category: "ATK",
    badge: "Hemat",
  },
];


export default function EtalaseToko() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find((item) => item.id === product.id);
    if (existingItem) {
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
    }
    return [...prevCart, { ...product, qty: 1 }];
  });
};

  const removeFromCart = (productId: string | number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (!existingItem) return prevCart;

      if (existingItem.qty === 1) {
        return prevCart.filter((item) => item.id !== productId);
      }
      return prevCart.map((item) =>
        item.id === productId ? { ...item, qty: item.qty - 1 } : item,
      );
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;

    let message = `Halo, saya mau pesan jasa cetak/print berikut:\n\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* (${item.qty} x ${formatRupiah(item.price)}/${item.unit}) = ${formatRupiah(item.price * item.qty)}\n`;
    });
    message += `\n*Total Pembayaran: ${formatRupiah(calculateTotal())}*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6283869661072?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen text-slate-800 p-4 md:p-8">
      <header className="max-w-5xl mx-auto mb-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 border-b pb-6 border-slate-200">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Etalase Jasa Print</h1>
          <p className="text-slate-500 text-sm mt-1">Layanan cetak cepat, rapi, dan terjangkau</p>
        </div>
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 border border-blue-200">
          <span>📞</span> Buka Setiap Hari (06.00 - 22.00)
        </div>
      </header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
                    {product.category}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                    {product.badge}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-slate-900">{product.name}</h3>
                <p className="text-sm text-slate-500 mt-1 mb-4">{product.description}</p>
              </div>
              <div>
                <div className="mb-4">
                  <span className="text-xl font-extrabold text-blue-600">
                    {formatRupiah(product.price)}
                  </span>
                  <span className="text-xs text-slate-400 font-normal"> / {product.unit}</span>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <span className="font-bold text-base">+</span> Tambah ke Pesanan
                </button>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-fit sticky top-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3 border-slate-100">
            <span>🛍️</span> Ringkasan Pesanan
          </h2>
          {cart.length === 0 ? (
            <div className="text-center py-8 text-slate-400">
              <p className="text-sm">Belum ada item yang dipilih.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <ul className="divide-y divide-slate-100 max-h-60 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <li key={item.id} className="py-3 flex justify-between items-center text-sm">
                    <div>
                      <p className="font-semibold text-slate-800">{item.name}</p>
                      <p className="text-xs text-slate-400">
                        {formatRupiah(item.price)} / {item.unit}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-slate-200 rounded-md">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="px-2 py-0.5 text-slate-500 hover:text-slate-800 font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 font-medium text-xs">{item.qty}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="px-2 py-0.5 text-slate-500 hover:text-slate-800 font-bold"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-semibold text-slate-700 min-w-[60px] text-right">
                        {formatRupiah(item.price * item.qty)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-slate-200 pt-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-slate-700">Total Harga:</span>
                  <span className="text-xl font-black text-blue-600">
                    {formatRupiah(calculateTotal())}
                  </span>
                </div>
                <button
                  onClick={handleCheckoutWhatsApp}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg text-sm transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <span>💬</span> Pesan via WhatsApp
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
