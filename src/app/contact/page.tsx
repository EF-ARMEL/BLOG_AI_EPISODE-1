'use client';
import React, { useState } from 'react';

export default function Page() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const validate = () => {
    if (!formData.name.trim()) return { field: 'name', msg: 'Dis-moi ton nom.' };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) return { field: 'email', msg: 'Cette adresse e-mail semble incorrecte.' };
    if (formData.message.trim().length < 10) return { field: 'message', msg: 'Ton message est un peu court (10 caractères minimum).' };
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setErrorMsg(err.msg);
      setStatus('idle');
      // Focus on the field (manual focus via DOM)
      const input = document.getElementsByName(err.field)[0] as HTMLInputElement;
      input?.focus();
      return;
    }

    setErrorMsg('');
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, website: '' }),
      });
      const data = await res.json();

      if (data.ok) {
        setStatus('sent');
      } else {
        const msgs: any = {
          rate_limited: "Trop de messages. Réessaie plus tard.",
          mail_failed: "L'envoi a échoué. Réessaie dans un instant."
        };
        setErrorMsg(msgs[data.error] || "Une erreur est survenue. Réessaie.");
        setStatus('idle');
      }
    } catch {
      setErrorMsg("Une erreur est survenue. Réessaie.");
      setStatus('idle');
    }
  };

  return (
    <div className={`pg d0 ${status === 'sent' ? 'sent' : ''}`}>
      <section className="ct">
        <h2>Écris à Nousdev</h2>
        {status === 'sent' ? (
          <div className="ok">
            <div className="boom">BOUM !</div>
            <p>Message envoyé. Nousdev te répond vite.</p>
          </div>
        ) : (
          <form className="f" onSubmit={handleSubmit}>
            <label className="fld">
              <span>Nom</span>
              <input
                name="name"
                placeholder="Ton nom"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </label>
            <label className="fld">
              <span>Email</span>
              <input
                name="email"
                type="email"
                placeholder="ton@email.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </label>
            <label className="fld">
              <span>Message</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Ton message…"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              />
            </label>
            <input type="text" name="website" style={{ position: 'absolute', left: '-9999px' }} tabIndex={-1} aria-hidden="true" />
            <p className="err" aria-live="polite">{errorMsg}</p>
            <button className="cta" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Envoi...' : 'Envoyer'}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
