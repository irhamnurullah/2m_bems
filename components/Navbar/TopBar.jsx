'use client';
import { useScrollspy } from '@/hooks/useScrollspy';
import ModularLogoSvg from '@/public/logo/modular-logo';
import Link from 'next/link';
import React from 'react';

const sections = ['Home', 'Pricing', 'FAQ', 'Contact'];

const TopBar = () => {
  // const activeId = useScrollspy(sections, 200); // 54 is navigation height
  return (
    <nav className="py-6 px-[120px] sticky top-0 z-50 bg-display backdrop-filter backdrop-blur-md bg-opacity-40">
      <div className="flex justify-between items-center">
        <div>
          <ModularLogoSvg />
        </div>
        <ul className="flex-1 flex items-center justify-end space-x-[60px]">
          {sections.map((item, key) => (
            <li name={item.toLocaleLowerCase()} key={`item-${key}`}>
              <Link href={`#${item.toLocaleLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
