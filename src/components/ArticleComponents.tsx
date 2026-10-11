'use client';
import React, { useState, useEffect } from 'react';

export function PromptBlock({ id, label, text }: { id: string; label?: string; text: string }) {
  const [btnText, setBtnText] = useState('Copier');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      document.body.removeChild(textArea);
    }
    setBtnText('Copié !');
    setTimeout(() => setBtnText('Copier'), 1600);
  };

  return (
    <div className="pr">
      <div className="pt">
        <span>{label || 'PROMPT À ADAPTER'}</span>
        <button className="cp" onClick={handleCopy} aria-live="polite">
          {btnText}
        </button>
      </div>
      <pre>{text}</pre>
    </div>
  );
}

export function ArticleHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <>
      <span className="kick">{kicker}</span>
      <h1 className="at">{title}</h1>
    </>
  );
}

export function ProgressBar() {
  return <div id="pg" data-d="0"></div>;
}

export function Toc({ sections, onProgress }: { sections: { id: string; title: string }[]; onProgress: (p: number) => void }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const articleEl = document.querySelector('article');
      if (!articleEl) return;

      const rect = articleEl.getBoundingClientRect();
      const height = Math.max(1, rect.height - window.innerHeight * 0.6);
      const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.3 - rect.top) / height));

      setPercent(Math.round(progress * 100));
      onProgress(progress);

      let currentId = null;
      const headings = document.querySelectorAll('article h2');
      headings.forEach((h) => {
        if (h.getBoundingClientRect().top < window.innerHeight * 0.4) {
          currentId = h.id;
        }
      });
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [onProgress]);

  const trackRef = React.useRef<HTMLDivElement>(null);

  // Centrage automatique horizontal UNIQUEMENT dans le conteneur .toc-track (sans perturber le scroll vertical de la page)
  useEffect(() => {
    if (activeId && trackRef.current) {
      const activeEl = trackRef.current.querySelector(`a[href="#${activeId}"]`) as HTMLElement;
      if (activeEl) {
        const track = trackRef.current;
        const targetLeft = activeEl.offsetLeft - (track.clientWidth - activeEl.clientWidth) / 2;
        track.scrollTo({ left: targetLeft, behavior: 'smooth' });
      }
    }
  }, [activeId]);

  const scrollToc = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = Math.max(180, Math.round(trackRef.current.clientWidth * 0.75));
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <aside className="toc">
      <b>Sommaire</b>
      <button
        type="button"
        className="toc-arrow prev"
        aria-label="Titre précédent"
        onClick={() => scrollToc('left')}
      >
        ‹
      </button>
      <div className="toc-track" ref={trackRef}>
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={activeId === s.id ? 'on' : ''}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {s.title}
          </a>
        ))}
        <a
          href="#sources"
          className={activeId === 'sources' ? 'on' : ''}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('sources')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Sources et note éditoriale
        </a>
      </div>
      <button
        type="button"
        className="toc-arrow next"
        aria-label="Titre suivant"
        onClick={() => scrollToc('right')}
      >
        ›
      </button>
      <span className="pct">{percent} %</span>
    </aside>
  );
}

export function ArticleBody({ blocks }: { blocks: any[] }) {
  const renderInline = (item: any) => {
    if (typeof item === 'string') return item;
    if (item.b) return <strong>{item.b}</strong>;
    if (item.link) return <a href={item.href} target="_blank" rel="noopener">{item.link}</a>;
    if (item.note) return <sup className="fn"><a href={`#src${item.note}`}>{item.note}</a></sup>;
    return '';
  };

  const renderBlock = (block: any, index: number) => {
    switch (block.type) {
      case 'p':
        return (
          <p className={block.lead ? 'lead' : ''}>
            {block.content.map((i: any, idx: number) => <React.Fragment key={idx}>{renderInline(i)}</React.Fragment>)}
          </p>
        );
      case 'list':
        const Tag = block.ordered ? 'ol' : 'ul';
        return (
          <Tag>
            {block.items.map((item: any[], idx: number) => (
              <li key={idx}>
                {item.map((i: any, iIdx: number) => <React.Fragment key={iIdx}>{renderInline(i)}</React.Fragment>)}
              </li>
            ))}
          </Tag>
        );
      case 'table':
        return (
          <div className="tbl">
            <table>
              <thead>
                <tr>{block.head.map((h: string, i: number) => <th key={i}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {block.rows.map((row: string[], i: number) => (
                  <tr key={i}>{row.map((cell: string, j: number) => <td key={j}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'quote':
        return (
          <blockquote>
            {block.before && <span>{block.before} </span>}
            <mark>{block.mark}</mark>
            {block.after && <span> {block.after}</span>}
          </blockquote>
        );
      case 'prompt':
        return <PromptBlock key={block.id} id={block.id} label={block.label} text={block.text} />;
      default:
        return null;
    }
  };

  return (
    <>
      {blocks.map((block, i) => <React.Fragment key={i}>{renderBlock(block, i)}</React.Fragment>)}
    </>
  );
}
