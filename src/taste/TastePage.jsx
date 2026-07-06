import { useState } from 'react'
import './TastePage.css'

/* ────────────────────────────────────────────────────────
   Florería Paola AR - TASTE (Redesigned)
   Design Read: Boutique local florist landing for CDMX consumers,
   warm/human/family-owned language, vanilla CSS + restrained motion + sans-serif display.
   Dials: VARIANCE 6, MOTION 4, DENSITY 3
   Accent: #1B3A2D forest green everywhere.
   Typography: Outfit (display) + Karla (body).
   ──────────────────────────────────────────────────────── */

const WA_LINK = 'https://wa.me/525536329416'
const WA_NUMBERS = [
  { label: '55 3632 9416', href: 'https://wa.me/525536329416' },
  { label: '55 1234 5678', href: 'https://wa.me/525512345678' },
  { label: '55 8765 4321', href: 'https://wa.me/525587654321' },
]

const NAV_ITEMS = [
  { label: 'Servicios', id: 'servicios' },
  { label: 'Galería', id: 'galeria' },
  { label: 'Ocasiones', id: 'ocasiones' },
  { label: 'Eventos', id: 'eventos' },
  { label: 'Cómo pedir', id: 'como-pedir' },
]

const GALLERY_IMAGES = [
  { seed: 'floreria-ramo-rosas', h: 400, alt: 'Ramo de rosas rojas' },
  { seed: 'floreria-centro-mesa', h: 320, alt: 'Centro de mesa floral' },
  { seed: 'floreria-boda-deco', h: 480, alt: 'Decoración de boda' },
  { seed: 'floreria-girasoles', h: 360, alt: 'Arreglo de girasoles' },
  { seed: 'floreria-novia-ramo', h: 440, alt: 'Ramo de novia' },
  { seed: 'floreria-xv-anos', h: 340, alt: 'Arreglo para XV años' },
  { seed: 'floreria-tulipanes', h: 420, alt: 'Tulipanes holandeses' },
  { seed: 'floreria-orquideas', h: 380, alt: 'Arreglo de orquídeas' },
]

const OCASIONES = [
  'Cumpleaños', 'Aniversario', 'Día de las madres', 'San Valentín',
  'Graduación', 'Condolencias', 'Nacimiento', 'Agradecimiento', 'Solo porque sí',
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

/* ===== Inline SVG helpers ===== */
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/* ===== HEADER ===== */
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="tp-header">
      <div className="tp-header__inner">
        <div className="tp-header__left">
          <a href="#/" className="tp-header__back">← Volver</a>
          <span className="tp-header__brand">Florería Paola AR</span>
        </div>

        <nav className="tp-header__nav">
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="tp-header__link"
              onClick={(e) => { e.preventDefault(); scrollTo(item.id) }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="tp-btn tp-btn--small tp-header__cta tp-header__cta--desktop"
        >
          WhatsApp
        </a>

        <button
          className="tp-header__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`tp-header__mobile-nav${mobileOpen ? ' tp-header__mobile-nav--open' : ''}`}>
        {NAV_ITEMS.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="tp-header__mobile-link"
            onClick={(e) => { e.preventDefault(); setMobileOpen(false); scrollTo(item.id) }}
          >
            {item.label}
          </a>
        ))}
        <div className="tp-header__mobile-cta">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tp-btn">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

/* ===== HERO ===== */
function Hero() {
  return (
    <section className="tp-hero">
      <div className="tp-container">
        <div className="tp-hero__grid">
          <div className="tp-hero__content">
            <h1 className="tp-headline tp-hero__title">
              Flores para los momentos que <em>importan</em>
            </h1>
            <p className="tp-hero__sub">
              Arreglos personalizados y decoración de eventos en la Ciudad de México. Diseñamos contigo.
            </p>
            <div>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tp-btn">
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/floreria-ramo-premium/640/800"
              alt="Ramo premium de flores frescas"
              className="tp-hero__image"
              width="640"
              height="800"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== TRUST STRIP ===== */
function TrustStrip() {
  const items = [
    'Flores frescas de temporada',
    'Atención directa por WhatsApp',
    'Florería familiar en CDMX',
  ]
  return (
    <section className="tp-trust">
      <div className="tp-container">
        <div className="tp-trust__list">
          {items.map(item => (
            <div key={item} className="tp-trust__item">
              <span className="tp-trust__dot" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== SERVICIOS ===== */
function Servicios() {
  return (
    <section id="servicios" className="tp-servicios tp-section">
      <div className="tp-container">
        <h2 className="tp-headline tp-servicios__headline">Lo que hacemos</h2>

        <div className="tp-servicios__grid-top">
          {/* Large card left */}
          <div className="tp-servicios__card-large">
            <div>
              <h3 className="tp-servicios__card-title">Ramos personalizados</h3>
              <p className="tp-servicios__card-desc">
                Elegimos las flores contigo. Cada ramo es único, armado el mismo día con flores de temporada.
              </p>
            </div>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tp-btn tp-btn--small">
              Pedir ramo
            </a>
          </div>

          {/* 2 stacked right */}
          <div className="tp-servicios__card-stack">
            <div className="tp-servicios__card-stacked">
              <div>
                <h3 className="tp-servicios__card-title">Decoración de eventos</h3>
                <p className="tp-servicios__card-desc">
                  Bodas, fiestas y celebraciones. Montaje completo.
                </p>
              </div>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tp-btn tp-btn--ghost tp-btn--small">
                Cotizar
              </a>
            </div>
            <div className="tp-servicios__card-stacked">
              <div>
                <h3 className="tp-servicios__card-title">Ramos de novia</h3>
                <p className="tp-servicios__card-desc">
                  Diseño personalizado para tu día especial.
                </p>
              </div>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tp-btn tp-btn--ghost tp-btn--small">
                Cotizar
              </a>
            </div>
          </div>
        </div>

        {/* Compact row */}
        <div className="tp-servicios__compact-row">
          {['XV años', 'Centros de mesa', 'Detalles sorpresa'].map(name => (
            <div key={name} className="tp-servicios__compact-item">
              <div className="tp-servicios__compact-name">{name}</div>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tp-servicios__compact-link">
                Pedir por WhatsApp →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== GALERÍA ===== */
function Galeria() {
  return (
    <section id="galeria" className="tp-galeria tp-section">
      <div className="tp-container">
        <span className="tp-eyebrow">Galería</span>
        <h2 className="tp-headline tp-galeria__headline">Trabajos recientes</h2>

        <div className="tp-galeria__masonry">
          {GALLERY_IMAGES.map(img => (
            <div key={img.seed} className="tp-galeria__item">
              <img
                src={`https://picsum.photos/seed/${img.seed}/480/${img.h}`}
                alt={img.alt}
                width="480"
                height={img.h}
                loading="lazy"
              />
              <div className="tp-galeria__overlay">
                <span>Ver</span>
              </div>
            </div>
          ))}
        </div>

        <p className="tp-galeria__note">
          Cada arreglo es único. Escríbenos para ver más ejemplos de nuestro trabajo.
        </p>
      </div>
    </section>
  )
}

/* ===== OCASIONES ===== */
function Ocasiones() {
  return (
    <section id="ocasiones" className="tp-ocasiones tp-section">
      <div className="tp-container">
        <h2 className="tp-headline tp-ocasiones__headline">Para cada momento</h2>
        <div className="tp-ocasiones__pills">
          {OCASIONES.map(name => (
            <a
              key={name}
              href={`${WA_LINK}?text=${encodeURIComponent(`Hola, me interesa un arreglo para: ${name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tp-ocasiones__pill"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== EVENTOS ===== */
function Eventos() {
  const checks = [
    'Asesoría personalizada de colores y estilos',
    'Visita previa al lugar del evento',
    'Montaje y desmontaje incluido',
    'Flores frescas garantizadas',
    'Coordinación con otros proveedores',
  ]

  return (
    <section id="eventos" className="tp-eventos tp-section">
      <div className="tp-container">
        <div className="tp-eventos__grid">
          <div>
            <span className="tp-eyebrow">Eventos</span>
            <h2 className="tp-headline tp-eventos__headline">
              Bodas, XV años y celebraciones
            </h2>
            <div className="tp-eventos__checklist">
              {checks.map(text => (
                <div key={text} className="tp-eventos__check">
                  <span className="tp-eventos__check-icon">
                    <CheckIcon />
                  </span>
                  {text}
                </div>
              ))}
            </div>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tp-btn">
              Cotizar evento
            </a>
          </div>
          <div className="tp-eventos__visual">
            <img
              src="https://picsum.photos/seed/floreria-evento-boda/720/540"
              alt="Decoración floral para evento"
              className="tp-eventos__image"
              width="720"
              height="540"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== CÓMO PEDIR ===== */
function ComoPedir() {
  const steps = [
    {
      num: '01',
      title: 'Escríbenos por WhatsApp',
      desc: 'Cuéntanos la ocasión, tu presupuesto y cualquier preferencia de flores o colores.',
    },
    {
      num: '02',
      title: 'Diseñamos tu arreglo',
      desc: 'Te enviamos propuesta con fotos de referencia. Ajustamos hasta que quede perfecto.',
    },
    {
      num: '03',
      title: 'Entrega o recolección',
      desc: 'Entregamos en CDMX o lo preparamos para que lo recojas. Siempre fresco.',
    },
  ]

  return (
    <section id="como-pedir" className="tp-steps tp-section">
      <div className="tp-container">
        <h2 className="tp-headline tp-steps__headline">Así de fácil</h2>
        <div className="tp-steps__list">
          {steps.map(step => (
            <div key={step.num} className="tp-steps__item">
              <span className="tp-steps__number">{step.num}</span>
              <div className="tp-steps__content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="tp-steps__cta">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tp-btn">
            Empezar mi pedido
          </a>
        </div>
      </div>
    </section>
  )
}

/* ===== PULL QUOTE ===== */
function PullQuote() {
  return (
    <section className="tp-quote tp-section">
      <div className="tp-container">
        <span className="tp-eyebrow">Nuestra filosofía</span>
        <div className="tp-quote__inner">
          <p className="tp-quote__text">
            "Las flores no necesitan explicación. Llegan, dicen lo que hay que decir y transforman el momento."
          </p>
          <p className="tp-quote__attr">
            Florería Paola AR, CDMX
          </p>
        </div>
      </div>
    </section>
  )
}

/* ===== CTA FINAL ===== */
function CtaFinal() {
  return (
    <section className="tp-cta-final">
      <div className="tp-container">
        <div className="tp-cta-final__inner">
          <h2 className="tp-cta-final__headline">
            ¿Lista para tu arreglo?
          </h2>
          <p className="tp-cta-final__sub">
            Escríbenos hoy y diseñamos algo especial para ti. Sin compromiso.
          </p>
          <div className="tp-cta-final__btn">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tp-btn tp-btn--inverted">
              Cotizar por WhatsApp
            </a>
          </div>
          <div className="tp-cta-final__phones">
            {WA_NUMBERS.map(ph => (
              <a key={ph.href} href={ph.href} target="_blank" rel="noopener noreferrer" className="tp-cta-final__phone">
                {ph.label}
              </a>
            ))}
          </div>
          <p className="tp-cta-final__note">
            Respondemos en menos de 2 horas en horario de atención.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ===== FOOTER ===== */
function Footer() {
  return (
    <footer className="tp-footer">
      <div className="tp-container">
        <div className="tp-footer__grid">
          {/* Col 1 - Brand */}
          <div>
            <div className="tp-footer__brand">Florería Paola AR</div>
            <p className="tp-footer__tagline">
              Arreglos florales y decoración de eventos en la Ciudad de México. Florería familiar desde 2018.
            </p>
            <div className="tp-footer__social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="tp-footer__social-link" aria-label="Instagram">
                IG
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="tp-footer__social-link" aria-label="Facebook">
                FB
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="tp-footer__social-link" aria-label="TikTok">
                TK
              </a>
            </div>
          </div>

          {/* Col 2 - Servicios + Ocasiones */}
          <div>
            <div className="tp-footer__col-title">Servicios</div>
            <div className="tp-footer__links">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tp-footer__link">Ramos personalizados</a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tp-footer__link">Decoración de eventos</a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tp-footer__link">Ramos de novia</a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tp-footer__link">XV años</a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tp-footer__link">Centros de mesa</a>
            </div>
          </div>

          {/* Col 3 - Contact */}
          <div>
            <div className="tp-footer__col-title">Contacto</div>
            <div className="tp-footer__links">
              {WA_NUMBERS.map(ph => (
                <a key={ph.href} href={ph.href} target="_blank" rel="noopener noreferrer" className="tp-footer__link">
                  WhatsApp {ph.label}
                </a>
              ))}
              <span className="tp-footer__link">Ciudad de México, CDMX</span>
            </div>
          </div>
        </div>

        <div className="tp-footer__bottom">
          <p className="tp-footer__copy">
            © {new Date().getFullYear()} Florería Paola AR. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ===== WHATSAPP FAB ===== */
function WhatsAppFab() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="tp-fab"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  )
}

/* ===== PAGE COMPONENT ===== */
export default function TastePage() {
  return (
    <div className="taste-page">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Servicios />
        <Galeria />
        <Ocasiones />
        <Eventos />
        <ComoPedir />
        <PullQuote />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
