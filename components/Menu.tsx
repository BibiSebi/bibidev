'use client';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const navigation = [
  { name: 'About me', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

const Menu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="px-6 pt-6 lg:px-8">
      <nav
        className="flex items-center justify-between"
        aria-label="Navigation Menu"
      >
        <div className="flex lg:flex-1">
          <a href="@/components/Menu#" className="-m-1.5 p-1.5">
            <img
              className="h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Menu;
