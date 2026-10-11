import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pg d0" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
      <h1>Page introuvable</h1>
      <p>Cette page n'existe pas ou n'existe plus.</p>
      <Link href="/" className="cta">Retour à l'accueil</Link>
    </div>
  );
}
