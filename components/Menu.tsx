'use client';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { LightBulbIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Roadmap', href: '/roadmap' },
  { name: 'Resources', href: '/resources' },
];

const Menu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='px-6 pt-6 print:hidden lg:px-8'>
      <nav className='flex items-center ' aria-label='Navigation Menu'>
        <div className='flex flex-1'>
          <a href='/' className='btn-ghost btn gap-0.5 text-xl normal-case'>
            <LightBulbIcon width={26} height={26} />
            BibiDev
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden gap-1 lg:flex'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='btn-ghost btn normal-case '
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog as='div' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className='fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden'>
          <div className='flex items-center justify-between'>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Menu;
