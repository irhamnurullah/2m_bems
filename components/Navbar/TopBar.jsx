'use client';
import { useScrollspy } from '@/hooks/useScrollspy';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const sections = ['Home', 'Pricing', 'Faq', 'Contact'];

const TopBar = () => {
  const activeId = useScrollspy(sections, 200); // 54 is navigation height
  return (
    <nav className="py-5">
      <ul className="flex items-center justify-center space-x-8">
        {sections.map((item, key) => (
          <li className={`${key === activeId ? 'text-red-500 font-bold' : ''}`} name={item.toLocaleLowerCase()} key={`item-${key}`}>
            <Link href={`#${item.toLocaleLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopBar;
