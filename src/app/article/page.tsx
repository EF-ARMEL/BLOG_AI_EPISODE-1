'use client';
import React, { useState, useEffect } from 'react';
import { article } from '@/content/article';
import { ArticleHeader, ArticleBody, Toc, ProgressBar } from '@/components/ArticleComponents';

export default function Page() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const artEl = document.querySelector('article');
      if (!artEl) return;
      const r = artEl.getBoundingClientRect();
      const h = Math.max(1, r.height - window.innerHeight * 0.6);
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.3 - r.top) / h));
      setProgress(p);

      const pg = document.getElementById('pg');
      if (pg) {
        pg.style.opacity = (r.top < window.innerHeight && r.bottom > 0) ? '1' : '0';
        pg.style.setProperty('--p', p.toString());
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const kicker = `Création avec l'IA · ${article.publishedAt} · ≈ ${Math.ceil(JSON.stringify(article.sections).length / 200)} min · par ${article.author}`;

  return (
    <div className="pg d0">
      <ProgressBar />
      <section className="art" id="art">
        <Toc
          sections={article.sections.map(s => ({ id: s.id, title: s.title }))}
          onProgress={setProgress}
        />
        <article>
          <ArticleHeader kicker={kicker} title={article.title} />
          <ArticleBody blocks={article.intro} />
          {article.sections.map((s, i) => (
            <div key={s.id}>
              <h2 id={s.id}>{s.title}</h2>
              <ArticleBody blocks={s.blocks} />
            </div>
          ))}
          <section className="src" id="sources">
            <h2>Sources et note éditoriale</h2>
            <ArticleBody blocks={article.sourcesNote} />
            <ol>
              {article.sources.map((s, i) => (
                <li key={i}><a href={s.href} target="_blank" rel="noopener">{s.label}</a></li>
              ))}
            </ol>
          </section>
        </article>
      </section>
      {/* Section Contact intégrée en bas de l'article comme dans la maquette */}
      <section className="ct">
        <h2>Écris à Nousdev</h2>
        <form className="f" onSubmit={(e) => e.preventDefault()}>
          <label className="fld"><span>Nom</span><input name="n" placeholder="Ton nom" /></label>
          <label className="fld"><span>Email</span><input name="e" type="email" placeholder="ton@email.com" /></label>
          <label className="fld"><span>Message</span><textarea name="m" rows={5} placeholder="Ton message…" /></label>
          <p className="err" aria-live="polite"></p>
          <button className="cta" type="submit">Envoyer</button>
        </form>
        <div className="ok" aria-live="polite"></div>
      </section>
    </div>
  );
}
