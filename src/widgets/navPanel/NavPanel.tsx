'use client';

import { HandCoins, Package, ShoppingCart, Users2 } from 'lucide-react';
import { usePathname } from 'next/navigation';

import NavItem from './_ui/navItem/NavItem';

const navItems = [
  { href: '/manager/orders', icon: <ShoppingCart />, label: 'Заказы' },
  { href: '/manager/products', icon: <Package />, label: 'Товары' },
  { href: '/manager/buyers', icon: <Users2 />, label: 'Покупатели' },
  { href: '/manager/payments', icon: <HandCoins />, label: 'Оплаты' },
];

const NavPanel: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => (
        <NavItem
          key={item.href}
          href={item.href}
          icon={item.icon}
          label={item.label}
          isActive={pathname === item.href}
        />
      ))}
    </>
  );
};

export default NavPanel;
