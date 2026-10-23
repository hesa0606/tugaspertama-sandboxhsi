export const formatRupiah = (amount: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

export const sendToWhatsApp = (items: CartItem[], phoneNumber: string) => {
  if (items.length === 0) return;

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  let message = `Halo, saya ingin memesan produk berikut:\n\n`;
  items.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* (${item.quantity}x) - ${formatRupiah(item.price * item.quantity)}\n`;
  });
  message += `\n*Total Pembayaran: ${formatRupiah(totalPrice)}*`;

  const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(message);

  window.open(`https://wa.me/${cleanPhone}?text=${encodedMessage}`, "_blank");
};
