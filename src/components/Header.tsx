'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="tabs">
      <b>Nousdev</b>
      <nav style={{ display: 'flex', gap: '8px' }}>
        <Link href="/" aria-current={pathname === '/' ? 'page' : undefined} style={{ color: 'inherit', textDecoration: 'none' }}>
          <span
            className={pathname === '/' ? 'active-link' : ''}
            style={{
              padding: '8px 14px',
              borderRadius: '99px',
              border: '2px solid',
              fontSize: '12px',
              fontWeight: 800,
              cursor: 'pointer',
              backgroundColor: pathname === '/' ? 'var(--pk)' : 'transparent',
              color: pathname === '/' ? '#000' : 'var(--wh)',
              borderColor: pathname === '/' ? 'var(--pk)' : '#ffffff33'
            }}>
            Accueil
          </span>
        </Link>
        <Link href="/article" aria-current={pathname === '/article' ? 'page' : undefined} style={{ color: 'inherit', textDecoration: 'none' }}>
          <span
            className={pathname === '/article' ? 'active-link' : ''}
            style={{
              padding: '8px 14px',
              borderRadius: '99px',
              border: '2px solid',
              fontSize: '12px',
              fontWeight: 800,
              cursor: 'pointer',
              backgroundColor: pathname === '/article' ? 'var(--pk)' : 'transparent',
              color: pathname === '/article' ? '#000' : 'var(--wh)',
              borderColor: pathname === '/article' ? 'var(--pk)' : '#ffffff33'
            }}>
            Article
          </span>
        </Link>
        <Link href="/contact" aria-current={pathname === '/contact' ? 'page' : undefined} style={{ color: 'inherit', textDecoration: 'none' }}>
          <span
            className={pathname === '/contact' ? 'active-link' : ''}
            style={{
              padding: '8px 14px',
              borderRadius: '99px',
              border: '2px solid',
              fontSize: '12px',
              fontWeight: 800,
              cursor: 'pointer',
              backgroundColor: pathname === '/contact' ? 'var(--pk)' : 'transparent',
              color: pathname === '/contact' ? '#000' : 'var(--wh)',
              borderColor: pathname === '/contact' ? 'var(--pk)' : '#ffffff33'
            }}>
            Contact
          </span>
        </Link>
      </nav>
    </header>
  );
}
