'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLink = (href: string, label: string) => {
    const active = pathname === href;
    return (
      <Link href={href} aria-current={active ? 'page' : undefined} className={`nav-link${active ? ' nav-link-active' : ''}`}>
        {label}
      </Link>
    );
  };

  return (
    <header className="tabs">
      <Link href="/" className="logo-link"><b>Nousdev</b></Link>
      <nav className="tabs-nav">
        {navLink('/', 'Accueil')}
        {navLink('/article', 'Article')}
        {navLink('/contact', 'Contact')}
      </nav>
    </header>
  );
}
