"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorit } from "@/context/favorit-context";

export default function Menu() {
  const pathname = usePathname();
  const { daftar } = useFavorit();

  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/tentang" },
    { name: "Etalase Toko", href: "/etalasetoko" },
    { name: "Kontak", href: "/kontak" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="border-b border-gray-200 bg-white px-4 py-3">
      <ul className="flex space-x-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-indigo-600 border-b-2 border-blue-600 pb-1" 
                    : "text-gray-600 hover:text-gray-900" 
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <li> <span>Favorit: {daftar.length}</span></li>
      </ul>
    </nav>
  );
}
