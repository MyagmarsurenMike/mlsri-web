'use client';

import React, { JSX, useState, useEffect } from 'react'; // Added useEffect
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import { Menu, Drawer, Button } from 'antd';
import type { MenuProps } from 'antd';
import Image from 'next/image';
import { MenuOutlined } from '@ant-design/icons';
import { TbPhoneCall } from "react-icons/tb";


// Define menu items with explicit typing
interface MenuItemType { 
  label: JSX.Element;
  key: string;
  path: string;
  icon?: JSX.Element; // Optional icon property
  children?: MenuItemType[]; // Optional children property for nested menus
}

const menuItems: MenuItemType[] = [
  { label: <Link href="/">Нүүр</Link>, key: 'home', path: '/' },
  { label: <Link href="/about">Бидний тухай</Link>, key: 'about', path: '/about', 
    children: [
      { label: <Link href="/about/history">Түүх</Link>, key: 'about-history', path: '/about/history' },
      { label: <Link href="/about/team">Баг</Link>, key: 'about-team', path: '/about/team' },
      { label: <Link href="/about/mission">Алсын хараа</Link>, key: 'about-mission', path: '/about/mission' },
    ],
  },
  { label: <Link href="/academics">Сургалт</Link>, key: 'academics', path: '/academics' },
  // { label: <Link href="/professions">Эрдэм шинжилгээ</Link>, key: 'professions', path: '/professions' },
  { label: <Link href="/news">Мэдээлэл</Link>, key: 'news', path: '/news' },
  { label: <Link href="/admissions">Элсэлт</Link>, key: 'admissions', path: '/admissions' },
  { label: <Link href="/contact">Холбоо барих </Link>, key: 'contact', path: '/contact', icon: <TbPhoneCall /> },
];

const NavBar: React.FC = () => {
  const pathname = usePathname(); // Get current pathname
  const [drawerVisible, setDrawerVisible] = useState(false);
  // Initialize current state based on the current pathname
  const [current, setCurrent] = useState<string>(() => {
    const activeItem = menuItems.find(item => item.path === pathname);
    return activeItem ? activeItem.key : 'home'; // Default to 'home' if no match
  });

  // Effect to update 'current' state when pathname changes
  useEffect(() => {
    const activeItem = menuItems.find(item => item.path === pathname);
    if (activeItem) {
      setCurrent(activeItem.key);
    } else {
      const defaultActiveItem = menuItems.find(item => pathname.startsWith(item.path) && item.path !== '/');
      if (defaultActiveItem) {
        setCurrent(defaultActiveItem.key);
      } else if (pathname === '/') {
        setCurrent('home');
      }
    }
  }, [pathname]); // Rerun effect when pathname changes

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setDrawerVisible(false);
  };

  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between w-full px-4 py-2 bg-white shadow-lg sm:px-6 lg:px-8">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/" aria-label="Home">
          <Image
            src="/logo.png"
            alt="School Logo"
            width={80}
            height={80}
            priority
            className="object-contain"
          />
        </Link>
      </div>

      <div className='w-full flex justify-end items-center'>
        {/* Desktop Menu (visible on large screens) */}
        <Menu
          mode="horizontal"
          selectedKeys={[current]} // This will now reflect the actual page
          onClick={handleMenuClick} // Still useful if you have non-Link items or other actions
          items={menuItems}
          className="navbar-menu"
          style={{ width: 'auto', flex: '1 1 auto', justifyContent: 'flex-end' }}
        />

        {/* Mobile/Tablet Menu Button (hidden on desktop via style) */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setDrawerVisible(true)}
          aria-label="Toggle menu"
          className="menu-toggle-button"
        />

        {/* Mobile/Tablet Drawer (hidden on desktop) */}
        <Drawer
          title="Цэс"
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          className="lg:hidden" // This class hides the drawer on large screens
          width={250}
        >
          <Menu
            mode="vertical"
            selectedKeys={[current]} // This will also reflect the actual page
            onClick={handleMenuClick}
            items={menuItems}
            className="border-b-0"
          />
        </Drawer>
      </div>
    </nav>
  );
};

export default NavBar;