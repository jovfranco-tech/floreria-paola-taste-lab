import React, { useState } from 'react';
import './BaselinePage.css';

const WA = 'https://wa.me/525536329416';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function BaselinePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Servicios', id: 'servicios' },
    { label: 'Galería', id: 'galeria' },
    { label: 'Ocasiones', id: 'ocasiones' },
    { label: 'Eventos', id: 'eventos' },
    { label: 'Cómo pedir', id: 'como-pedir' },
  ];

  return (
    <div className="bl-page">
      {/* ═══ 1. HEADER ═══ */}
      <header className="bl-header">
        <div className="bl-container bl-header__inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="#/" className="bl-header__back" title="Volver a Taste Lab">← Lab</a>
            <div className="bl-header__brand">
              <span className="bl-header__brand-name">Florería Paola AR</span>
              <span className="bl-header__brand-sub">Boutique floral CDMX</span>
            </div>
          </div>

          <nav className="bl-header__nav">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="bl-header__link"
                onClick={(e) => { e.preventDefault(); scrollTo(l.id); }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a href={WA} target="_blank" rel="noopener noreferrer" className="bl-btn bl-btn--primary bl-header__cta desktop-only">
            💬 WhatsApp
          </a>

          <button
            className="bl-header__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile nav */}
      <div className={`bl-mobile-nav ${menuOpen ? 'is-open' : ''}`}>
        {navLinks.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollTo(l.id); }}
          >
            {l.label}
          </a>
        ))}
        <a href={WA} target="_blank" rel="noopener noreferrer" className="bl-btn bl-btn--primary">
          💬 WhatsApp
        </a>
      </div>

      {/* ═══ 2. HERO ═══ */}
      <section className="bl-hero">
        <div className="bl-container">
          <div className="bl-hero__grid">
            <div className="bl-hero__text">
              <p className="bl-hero__eyebrow">Florería boutique en CDMX</p>
              <h1>
                Arreglos florales personalizados y{' '}
                <em>decoración de eventos</em> en CDMX
              </h1>
              <p className="bl-hero__subtext">
                Creamos arreglos con flores frescas para cada ocasión. Desde ramos personalizados
                hasta decoración completa de eventos sociales, con atención directa por WhatsApp.
              </p>
              <div className="bl-hero__ctas">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="bl-btn bl-btn--primary">
                  💬 Cotizar por WhatsApp
                </a>
                <a
                  href="#galeria"
                  className="bl-btn bl-btn--secondary"
                  onClick={(e) => { e.preventDefault(); scrollTo('galeria'); }}
                >
                  Ver galería
                </a>
              </div>
              <p className="bl-hero__micro">
                Respuesta en menos de 2 horas · Envíos en CDMX
              </p>
              <div className="bl-hero__badges">
                <span className="bl-hero__badge"><span role="img" aria-label="flor">🌸</span> Flores frescas</span>
                <span className="bl-hero__badge"><span role="img" aria-label="corazón">💛</span> Atención personalizada</span>
                <span className="bl-hero__badge"><span role="img" aria-label="whatsapp">📱</span> Pedidos por WhatsApp</span>
              </div>
            </div>

            <div className="bl-hero__images">
              <img
                src="https://picsum.photos/seed/ramo-tulipanes-rosa/600/700"
                alt="Ramo de tulipanes rosa"
                className="bl-hero__img bl-hero__img--tall"
              />
              <img
                src="https://picsum.photos/seed/arreglo-rosas-rojas/600/500"
                alt="Arreglo de rosas rojas"
                className="bl-hero__img bl-hero__img--short"
              />
              <div className="bl-hero__float-card bl-hero__float-card--top">
                <span role="img" aria-label="estrella">⭐</span> +500 arreglos entregados
              </div>
              <div className="bl-hero__float-card bl-hero__float-card--bottom">
                <span role="img" aria-label="ubicación">📍</span> Envíos en toda la CDMX
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. TRUST STRIP ═══ */}
      <section className="bl-trust">
        <div className="bl-container">
          <div className="bl-trust__grid">
            {[
              { icon: '🌷', label: 'Flores frescas', desc: 'Seleccionadas a diario' },
              { icon: '💬', label: 'Atención personalizada', desc: 'Directa por WhatsApp' },
              { icon: '📍', label: 'Hechos en CDMX', desc: 'Entrega local confiable' },
              { icon: '📋', label: 'Cotización por WhatsApp', desc: 'Rápida y sin compromiso' },
            ].map((item, i) => (
              <div key={i} className="bl-trust__item">
                <span className="bl-trust__icon" role="img" aria-label={item.label}>{item.icon}</span>
                <span className="bl-trust__label">{item.label}</span>
                <span className="bl-trust__desc">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. SERVICIOS ═══ */}
      <section id="servicios" className="bl-section">
        <div className="bl-container">
          <div className="bl-servicios__head">
            <p className="bl-kicker">Servicios</p>
            <h2 className="bl-headline">
              Lo que podemos crear <em>para ti</em>
            </h2>
            <p className="bl-subtext">
              Cada arreglo es único. Trabajamos contigo para diseñar exactamente lo que necesitas,
              desde un detalle sencillo hasta la decoración completa de tu evento.
            </p>
          </div>

          <div className="bl-servicios__grid">
            {[
              {
                img: 'https://picsum.photos/seed/ramo-personalizado-flores/600/500',
                title: 'Ramos personalizados',
                desc: 'Diseñamos ramos únicos con las flores, colores y estilo que prefieras. Cada ramo es una pieza irrepetible.',
              },
              {
                img: 'https://picsum.photos/seed/decoracion-evento-floral/600/500',
                title: 'Decoración de eventos',
                desc: 'Centros de mesa, arcos florales, caminos y ambientación completa para tu celebración especial.',
              },
              {
                img: 'https://picsum.photos/seed/ramo-novia-blanco/600/500',
                title: 'Ramos de novia',
                desc: 'El ramo perfecto para el día más importante. Clásicos, modernos o bohemios — tú decides.',
              },
              {
                img: 'https://picsum.photos/seed/xv-anos-flores-rosa/600/500',
                title: 'XV años',
                desc: 'Arreglos y decoración floral para quinceañeras. Ramo de la quinceañera, centros de mesa y más.',
              },
            ].map((s, i) => (
              <div key={i} className="bl-service-card">
                <img src={s.img} alt={s.title} className="bl-service-card__img" />
                <div className="bl-service-card__body">
                  <h3 className="bl-service-card__title">{s.title}</h3>
                  <p className="bl-service-card__desc">{s.desc}</p>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="bl-service-card__link">
                    Cotizar →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bl-servicios__minis">
            {[
              { icon: '🎁', text: 'Cajas de regalo florales' },
              { icon: '🏢', text: 'Arreglos corporativos' },
              { icon: '⛪', text: 'Decoración de iglesias' },
              { icon: '🌺', text: 'Coronas y condolencias' },
            ].map((m, i) => (
              <div key={i} className="bl-mini-service">
                <span className="bl-mini-service__icon" role="img" aria-label={m.text}>{m.icon}</span>
                <span className="bl-mini-service__text">{m.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. GALERÍA ═══ */}
      <section id="galeria" className="bl-section bl-section--alt">
        <div className="bl-container">
          <div className="bl-galeria__head">
            <p className="bl-kicker">Galería</p>
            <h2 className="bl-headline">
              Arreglos que ya hicieron <em>feliz a alguien</em>
            </h2>
          </div>

          <div className="bl-galeria__pills">
            {['Todos', 'Ramos', 'Eventos', 'Bodas', 'XV años', 'Condolencias'].map((p, i) => (
              <button key={i} className={`bl-galeria__pill ${i === 0 ? 'is-active' : ''}`}>
                {p}
              </button>
            ))}
          </div>

          <div className="bl-galeria__grid">
            {[
              { seed: 'galeria-ramo-rosas', label: 'Ramo de rosas rojas' },
              { seed: 'galeria-centro-mesa', label: 'Centro de mesa elegante' },
              { seed: 'galeria-arco-floral', label: 'Arco floral para boda' },
              { seed: 'galeria-ramo-girasoles', label: 'Ramo de girasoles' },
              { seed: 'galeria-decoracion-xv', label: 'Decoración XV años' },
              { seed: 'galeria-bouquet-novia', label: 'Bouquet de novia' },
              { seed: 'galeria-arreglo-tulipanes', label: 'Arreglo de tulipanes' },
              { seed: 'galeria-corona-condolencias', label: 'Corona de condolencias' },
              { seed: 'galeria-caja-regalo', label: 'Caja de regalo floral' },
              { seed: 'galeria-mesa-evento', label: 'Mesa de evento' },
              { seed: 'galeria-ramo-mixto', label: 'Ramo mixto colorido' },
              { seed: 'galeria-iglesia-flores', label: 'Decoración de iglesia' },
            ].map((g, i) => (
              <div key={i} className="bl-galeria__item">
                <img
                  src={`https://picsum.photos/seed/${g.seed}/500/600`}
                  alt={g.label}
                />
                <div className="bl-galeria__overlay">
                  <span className="bl-galeria__overlay-text">{g.label}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="bl-galeria__note">
            Cada arreglo es único — los diseños pueden variar según disponibilidad de flores.
          </p>
        </div>
      </section>

      {/* ═══ 6. OCASIONES ═══ */}
      <section id="ocasiones" className="bl-section">
        <div className="bl-container">
          <div className="bl-ocasiones__head">
            <p className="bl-kicker">Ocasiones</p>
            <h2 className="bl-headline">
              Flores para <em>cada momento</em>
            </h2>
            <p className="bl-subtext" style={{ margin: '0 auto' }}>
              No importa la ocasión, tenemos el arreglo perfecto para expresar lo que sientes.
            </p>
          </div>

          <div className="bl-ocasiones__chips">
            {[
              { emoji: '🎂', label: 'Cumpleaños' },
              { emoji: '💕', label: 'Aniversarios' },
              { emoji: '❤️', label: 'San Valentín' },
              { emoji: '👩', label: 'Día de las Madres' },
              { emoji: '🌼', label: 'Flores amarillas' },
              { emoji: '🎓', label: 'Graduaciones' },
              { emoji: '💒', label: 'Bodas' },
              { emoji: '👑', label: 'XV años' },
              { emoji: '🕊️', label: 'Condolencias' },
            ].map((o, i) => (
              <a
                key={i}
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="bl-ocasion-chip"
              >
                <span role="img" aria-label={o.label}>{o.emoji}</span>
                {o.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. CÓMO PEDIR ═══ */}
      <section id="como-pedir" className="bl-section bl-section--alt">
        <div className="bl-container">
          <div className="bl-steps__head">
            <p className="bl-kicker">Cómo pedir</p>
            <h2 className="bl-headline">
              Tu arreglo en <em>3 pasos</em>
            </h2>
          </div>

          <div className="bl-steps__grid">
            {[
              {
                num: '1',
                title: 'Escríbenos por WhatsApp',
                desc: 'Cuéntanos qué ocasión celebras, qué flores te gustan y tu presupuesto. ¡No necesitas saber de flores!',
              },
              {
                num: '2',
                title: 'Recibe tu cotización',
                desc: 'Te enviamos opciones con fotos de referencia y precio. Sin compromiso, ajustamos hasta que quedes feliz.',
              },
              {
                num: '3',
                title: 'Recibe o recoge tu arreglo',
                desc: 'Hacemos envíos en CDMX o puedes recoger. Tu arreglo llega fresco y listo para sorprender.',
              },
            ].map((s, i) => (
              <div key={i} className="bl-step-card">
                <div className="bl-step-card__number">{s.num}</div>
                <h3 className="bl-step-card__title">{s.title}</h3>
                <p className="bl-step-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bl-steps__cta">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="bl-btn bl-btn--primary">
              💬 Empezar mi pedido
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 8. EVENTOS ═══ */}
      <section id="eventos" className="bl-section">
        <div className="bl-container">
          <div className="bl-eventos__grid">
            <div className="bl-eventos__text">
              <p className="bl-kicker">Eventos sociales</p>
              <h2 className="bl-headline bl-eventos__headline">
                Bodas, XV años y celebraciones <em>con alma</em>
              </h2>
              <ul className="bl-eventos__checklist">
                <li>Centros de mesa personalizados</li>
                <li>Arcos y caminos florales</li>
                <li>Ramo de novia y cortejo</li>
                <li>Decoración de iglesia y salón</li>
                <li>Ambientación completa del evento</li>
                <li>Coordinación con tu wedding planner</li>
              </ul>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="bl-btn bl-btn--primary">
                💬 Cotizar mi evento
              </a>
            </div>

            <div className="bl-eventos__photos">
              <img
                src="https://picsum.photos/seed/evento-boda-mesa/500/400"
                alt="Mesa de boda decorada"
                className="bl-eventos__photo"
              />
              <img
                src="https://picsum.photos/seed/evento-arco-flores/500/400"
                alt="Arco de flores para ceremonia"
                className="bl-eventos__photo"
              />
              <img
                src="https://picsum.photos/seed/evento-xv-decoracion/500/400"
                alt="Decoración de XV años"
                className="bl-eventos__photo"
              />
              <img
                src="https://picsum.photos/seed/evento-centro-mesa/500/400"
                alt="Centro de mesa floral"
                className="bl-eventos__photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 9. POR QUÉ ELEGIRNOS ═══ */}
      <section className="bl-section bl-section--alt">
        <div className="bl-container">
          <div className="bl-why__head">
            <p className="bl-kicker">¿Por qué elegirnos?</p>
            <h2 className="bl-headline">
              Lo que nos hace <em>diferentes</em>
            </h2>
          </div>

          <div className="bl-why__grid">
            {[
              {
                icon: '💛',
                title: 'Atención personalizada',
                desc: 'Te atendemos directo por WhatsApp. Sin intermediarios, sin bots. Persona a persona.',
              },
              {
                icon: '🌷',
                title: 'Flores frescas',
                desc: 'Seleccionamos nuestras flores a diario para garantizar frescura y calidad en cada arreglo.',
              },
              {
                icon: '💰',
                title: 'Para todos los presupuestos',
                desc: 'Desde detalles sencillos hasta decoraciones completas. Hay opciones para cada bolsillo.',
              },
              {
                icon: '📱',
                title: 'Cotización directa',
                desc: 'Escríbenos, cuéntanos tu idea y recibe tu cotización con fotos de referencia. Sin compromiso.',
              },
              {
                icon: '🎪',
                title: 'Experiencia en eventos',
                desc: 'Bodas, XV años, bautizos, corporativos — tenemos experiencia decorando todo tipo de celebraciones.',
              },
              {
                icon: '📍',
                title: 'Locales de CDMX',
                desc: 'Somos de aquí. Conocemos la ciudad, los tiempos y las flores que mejor funcionan en cada temporada.',
              },
            ].map((c, i) => (
              <div key={i} className="bl-why-card">
                <div className="bl-why-card__icon" role="img" aria-label={c.title}>{c.icon}</div>
                <h3 className="bl-why-card__title">{c.title}</h3>
                <p className="bl-why-card__desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 10. FRASE EMOCIONAL ═══ */}
      <section className="bl-quote">
        <div className="bl-container">
          <blockquote>
            &ldquo;Las flores no cambian el mundo, pero <em>cambian el día de quien las recibe</em> — y eso ya es mucho.&rdquo;
          </blockquote>
          <p className="bl-quote__attr">— Florería Paola AR · CDMX</p>
        </div>
      </section>

      {/* ═══ 11. CTA FINAL ═══ */}
      <section className="bl-cta-final">
        <div className="bl-container">
          <h2 className="bl-headline">
            ¿Lista para hacer tu pedido?
          </h2>
          <p className="bl-cta-final__sub">
            Escríbenos por WhatsApp y recibe tu cotización personalizada. Sin compromiso, respuesta rápida.
          </p>
          <div className="bl-cta-final__btn">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="bl-btn bl-btn--white">
              💬 Escribir por WhatsApp
            </a>
          </div>
          <div className="bl-cta-final__numbers">
            <a href="https://wa.me/525536329416" target="_blank" rel="noopener noreferrer" className="bl-cta-final__number">
              📱 55 3632 9416
            </a>
            <a href="https://wa.me/525624428572" target="_blank" rel="noopener noreferrer" className="bl-cta-final__number">
              📱 56 2442 8572
            </a>
            <a href="https://wa.me/525516458786" target="_blank" rel="noopener noreferrer" className="bl-cta-final__number">
              📱 55 1645 8786
            </a>
          </div>
          <p className="bl-cta-final__note">
            Horario de atención: Lunes a Sábado, 9:00 – 19:00
          </p>
        </div>
      </section>

      {/* ═══ 12. FOOTER ═══ */}
      <footer className="bl-footer">
        <div className="bl-container">
          <div className="bl-footer__grid">
            <div className="bl-footer__col">
              <p className="bl-footer__brand-name">Florería Paola AR</p>
              <p className="bl-footer__brand-desc">
                Boutique floral en la Ciudad de México. Arreglos personalizados, decoración de eventos
                y flores frescas para cada ocasión.
              </p>
              <div className="bl-footer__social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bl-footer__social-link" aria-label="Facebook">f</a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bl-footer__social-link" aria-label="Instagram">ig</a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="bl-footer__social-link" aria-label="TikTok">tk</a>
              </div>
            </div>

            <div className="bl-footer__col">
              <p className="bl-footer__col-title">Servicios</p>
              <ul>
                <li><a href={WA} target="_blank" rel="noopener noreferrer">Ramos personalizados</a></li>
                <li><a href={WA} target="_blank" rel="noopener noreferrer">Decoración de eventos</a></li>
                <li><a href={WA} target="_blank" rel="noopener noreferrer">Ramos de novia</a></li>
                <li><a href={WA} target="_blank" rel="noopener noreferrer">XV años</a></li>
                <li><a href={WA} target="_blank" rel="noopener noreferrer">Condolencias</a></li>
              </ul>
            </div>

            <div className="bl-footer__col">
              <p className="bl-footer__col-title">Ocasiones</p>
              <ul>
                <li><a href={WA} target="_blank" rel="noopener noreferrer">Cumpleaños</a></li>
                <li><a href={WA} target="_blank" rel="noopener noreferrer">Aniversarios</a></li>
                <li><a href={WA} target="_blank" rel="noopener noreferrer">San Valentín</a></li>
                <li><a href={WA} target="_blank" rel="noopener noreferrer">Día de las Madres</a></li>
                <li><a href={WA} target="_blank" rel="noopener noreferrer">Graduaciones</a></li>
              </ul>
            </div>

            <div className="bl-footer__col">
              <p className="bl-footer__col-title">WhatsApp</p>
              <ul>
                <li><a href="https://wa.me/525536329416" target="_blank" rel="noopener noreferrer">55 3632 9416</a></li>
                <li><a href="https://wa.me/525624428572" target="_blank" rel="noopener noreferrer">56 2442 8572</a></li>
                <li><a href="https://wa.me/525516458786" target="_blank" rel="noopener noreferrer">55 1645 8786</a></li>
              </ul>
            </div>
          </div>

          <div className="bl-footer__bottom">
            © {new Date().getFullYear()} Florería Paola AR · CDMX · Todos los derechos reservados
          </div>
        </div>
      </footer>

      {/* ═══ 13. WHATSAPP FAB ═══ */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="bl-fab"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
