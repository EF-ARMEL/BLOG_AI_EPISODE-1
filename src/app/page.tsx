'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  useEffect(() => {
    // Ajout de la classe 'in' deux frames après le rendu pour déclencher les animations
    const root = document.querySelector('.pg');
    if (root) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          root.classList.add('in');
        });
      });
    }

    // IntersectionObserver pour révéler les éléments .rv
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const rvs = document.querySelectorAll('.rv');
    rvs.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <div className="pg d0">
      <section className="hero">
        <div className="pn p1">
          <span className="cap">Nousdev présente</span>
          <h1>Créer avec l'IA sans brûler les étapes</h1>
          <Link href="/article" className="cta">
            Lire l'article
          </Link>
        </div>
        <div className="pn p2">
          <div className="bub">
            Un blog pour apprendre à créer avec l'IA, et surtout à vérifier ce qu'elle produit.
          </div>
        </div>
        <div className="pn p3">
          <span className="zap">ZAP !</span>
        </div>
        <div className="pn p4">
          <span className="cap">Épisode 01</span>
          <p style={{ margin: 0 }}>Votre premier projet : un mini-blog, pas à pas.</p>
        </div>
      </section>
    </div>
  );
}
