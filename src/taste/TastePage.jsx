import { useState } from 'react'
import './TastePage.css'

/* ──────────────────────────────────────────────
   Florería Paola AR — Taste Redesign
   Domain: Florist / flower shop / CDMX
   Skill: design-taste-frontend (advisory only)
   ────────────────────────────────────────────── */

const WA = 'https://wa.me/525536329416'
const WA_NUMBERS = [
  { label: '55 3632 9416', href: 'https://wa.me/525536329416' },
  { label: '56 2442 8572', href: 'https://wa.me/525624428572' },
  { label: '55 1645 8786', href: 'https://wa.me/525516458786' },
]

const NAV = [
  { label: 'Servicios', id: 'servicios' },
  { label: 'Galería', id: 'galeria' },
  { label: 'Ocasiones', id: 'ocasiones' },
  { label: 'Eventos', id: 'eventos' },
  { label: 'Cómo pedir', id: 'como-pedir' },
]

/* Unsplash CDN — stable photo IDs of real flowers */
const IMG = {
  hero: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=640&h=800&q=80',
  ramos: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=560&h=420&q=80',
  eventos: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=540&h=360&q=80',
  novia: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=540&h=360&q=80',
  eventoBig: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=720&h=540&q=80',
  gallery: [
    { src: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=480&h=600&q=80', alt: 'Tulipanes rosas', tag: 'Ramo de Tulipanes' },
    { src: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=480&h=400&q=80', alt: 'Centro de mesa floral', tag: 'Centros de Mesa' },
    { src: 'https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?auto=format&fit=crop&w=480&h=520&q=80', alt: 'Ramo de flores variadas', tag: 'Ramo Especial' },
    { src: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=480&h=480&q=80', alt: 'Rosas rojas', tag: 'Ramo de Rosas' },
    { src: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=480&h=560&q=80', alt: 'Arreglo rosa y blanco', tag: 'Arreglos Florales' },
    { src: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=480&h=420&q=80', alt: 'Flores de temporada', tag: 'Temporada' },
    { src: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=480&h=500&q=80', alt: 'Rosas en tonos pastel', tag: 'Ramo de Novia' },
    { src: 'https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=480&h=440&q=80', alt: 'Ramo romántico', tag: 'Detalle Sorpresa' },
  ],
}

const OCASIONES = [
  { name: 'Cumpleaños 🎂', msg: 'Hola, quiero un arreglo floral para un cumpleaños.' },
  { name: 'Aniversarios 💖', msg: 'Hola, quiero un arreglo para un aniversario.' },
  { name: 'San Valentín 🌹', msg: 'Hola, quiero un arreglo para San Valentín.' },
  { name: 'Día de las Madres 👩', msg: 'Hola, quiero un arreglo para el Día de las Madres.' },
]


function wa(msg) {
  return `${WA}?text=${encodeURIComponent(msg)}`
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

/* ---- SVG icons ---- */
function WaIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function CheckSvg() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function LeafSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22c-4-4-8-7.5-8-12a8 8 0 0116 0c0 4.5-4 8-8 12z" />
      <path d="M12 10v6" />
    </svg>
  )
}

/* ===== HEADER ===== */
function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="t-header">
      <div className="t-header__inner">
        <div className="t-header__left">
          <a href="#/" className="t-header__back" aria-label="Volver al lab">←</a>
          <a href="#/taste" className="t-header__brand">
            <LeafSvg />
            Florería Paola AR
          </a>
        </div>

        <nav className="t-header__nav" aria-label="Navegación principal">
          {NAV.map(n => (
            <a key={n.id} href={`#${n.id}`} className="t-header__link"
              onClick={e => { e.preventDefault(); scrollTo(n.id) }}>
              {n.label}
            </a>
          ))}
        </nav>

        <a href={wa('Hola, quiero cotizar un arreglo floral.')} target="_blank" rel="noopener noreferrer"
          className="t-btn t-btn--sm t-header__cta t-header__cta--desk">
          <WaIcon size={15} /> Cotizar
        </a>

        <button className={`t-header__burger${open ? ' t-header__burger--open' : ''}`}
          onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <nav className="t-header__mobile" aria-label="Menú móvil">
          {NAV.map(n => (
            <a key={n.id} href={`#${n.id}`} className="t-header__mobile-link"
              onClick={e => { e.preventDefault(); setOpen(false); scrollTo(n.id) }}>
              {n.label}
            </a>
          ))}
          <a href={wa('Hola, quiero cotizar un arreglo floral.')} target="_blank" rel="noopener noreferrer"
            className="t-btn" style={{ marginTop: 16, alignSelf: 'stretch', justifyContent: 'center' }}>
            <WaIcon /> Cotizar por WhatsApp
          </a>
        </nav>
      )}
    </header>
  )
}

/* ===== HERO ===== */
function Hero() {
  return (
    <section className="t-hero">
      <div className="t-container t-hero__grid">
        <div className="t-hero__text">
          <div className="t-badge-local">
            <span className="t-badge-local__dot"></span>
            Taller Floral Familiar en CDMX
          </div>
          <h1 className="t-h1">
            Diseños florales con alma y flores frescas de temporada
          </h1>
          <p className="t-hero__sub">
            En <strong>Florería Paola AR</strong> creamos ramos personalizados y decoración artesanal para tus momentos más especiales. Haz tu pedido hoy con atención cercana y directa por WhatsApp.
          </p>
          <div className="t-hero__tags" aria-label="Nuestras especialidades florales">
            <span className="t-hero__tag-item">Ramos personalizados</span>
            <span className="t-hero__tag-item">Eventos</span>
            <span className="t-hero__tag-item">Novia</span>
            <span className="t-hero__tag-item">XV años</span>
            <span className="t-hero__tag-item">Condolencias</span>
          </div>
          <a href={wa('Hola, quiero cotizar un arreglo floral personalizado.')} target="_blank" rel="noopener noreferrer" className="t-btn">
            <WaIcon /> Cotizar arreglo por WhatsApp
          </a>
        </div>
        <div className="t-hero__media">
          <div className="t-hero__img-frame">
            <img src={IMG.hero} alt="Arreglo floral artesanal en CDMX" className="t-hero__img" width="640" height="800" loading="eager" />
            <div className="t-hero__note-badge">Hecho a mano en CDMX</div>
          </div>
        </div>
      </div>
    </section>
  )
}


/* ===== TRUST ===== */
function Trust() {
  return (
    <div className="t-trust">
      <div className="t-container t-trust__inner">
        <span className="t-trust__item"><LeafSvg /> Flores frescas de temporada</span>
        <span className="t-trust__sep" aria-hidden="true" />
        <span className="t-trust__item"><LeafSvg /> Atención personal por WhatsApp</span>
        <span className="t-trust__sep" aria-hidden="true" />
        <span className="t-trust__item"><LeafSvg /> Florería familiar en CDMX</span>
      </div>
    </div>
  )
}

/* ===== SERVICIOS ===== */
function Servicios() {
  return (
    <section id="servicios" className="t-section">
      <div className="t-container">
        <h2 className="t-h2">Nuestros servicios florales</h2>
        <p className="t-section__sub">Cada detalle cuenta. Diseñamos contigo la propuesta ideal.</p>

        {/* Top: 1 large + 2 stacked (asymmetric layout) */}
        <div className="t-srv__top">
          <a href={wa('Hola, quiero cotizar un ramo personalizado.')} target="_blank" rel="noopener noreferrer" className="t-srv__main">
            <div className="t-srv__img-wrap">
              <img src={IMG.ramos} alt="Ramo de flores frescas personalizadas" className="t-srv__img" width="560" height="420" loading="lazy" />
              <span className="t-srv__badge">Servicio estrella</span>
            </div>
            <div className="t-srv__body">
              <h3 className="t-srv__title">Ramos personalizados</h3>
              <p className="t-srv__desc">Tú eliges los tonos y envolturas; nosotros seleccionamos las mejores flores del día para armar una pieza única.</p>
              <span className="t-srv__link">Cotizar ramo →</span>
            </div>
          </a>

          <div className="t-srv__side">
            <a href={wa('Hola, quiero cotizar decoración floral para un evento.')} target="_blank" rel="noopener noreferrer" className="t-srv__card">
              <img src={IMG.eventos} alt="Decoración de eventos familiares en CDMX" className="t-srv__img-sm" width="540" height="360" loading="lazy" />
              <div className="t-srv__body">
                <h3 className="t-srv__title">Decoración de eventos</h3>
                <p className="t-srv__desc">Bodas, XV años y reuniones familiares. Diseñamos la ambientación completa a tu presupuesto.</p>
              </div>
            </a>
            <a href={wa('Hola, quiero cotizar un ramo de novia.')} target="_blank" rel="noopener noreferrer" className="t-srv__card">
              <img src={IMG.novia} alt="Ramos de novia hechos a mano" className="t-srv__img-sm" width="540" height="360" loading="lazy" />
              <div className="t-srv__body">
                <h3 className="t-srv__title">Ramos de novia</h3>
                <p className="t-srv__desc">Diseño exclusivo y delicado para tu gran día. Combinamos texturas y follajes de temporada.</p>
              </div>
            </a>
          </div>
        </div>

        {/* Trust microcopy */}
        <div className="t-srv__microcopy">
          <p>
            💡 <strong>Atención CDMX:</strong> No trabajamos con catálogos industriales fijos. Nos compartes tu idea por WhatsApp, tu presupuesto y fecha de entrega, y te asesoramos para elegir las flores ideales que transmitan tu mensaje.
          </p>
        </div>

        {/* Bottom: compact row (no equal cards - chip layout) */}
        <div className="t-srv__row">
          {[
            { n: 'XV años 🌸', m: 'Hola, quiero información de arreglos florales para XV años.' },
            { n: 'Centros de mesa 🍽️', m: 'Hola, quiero cotizar centros de mesa.' },
            { n: 'Arreglos florales 💐', m: 'Hola, quiero cotizar un arreglo floral.' },
            { n: 'Detalles sorpresa 🎁', m: 'Hola, quiero cotizar un detalle floral sorpresa.' },
          ].map(s => (
            <a key={s.n} href={wa(s.m)} target="_blank" rel="noopener noreferrer" className="t-srv__chip">
              {s.n} <span className="t-srv__chip-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== GALERÍA ===== */
function Galeria() {
  return (
    <section id="galeria" className="t-section t-section--alt">
      <div className="t-container">
        <span className="t-kicker">Galería de arreglos</span>
        <h2 className="t-h2">Diseños que ya entregamos con amor</h2>
        <p className="t-section__sub">Fotos reales de trabajos entregados en CDMX. Hacemos cada diseño único.</p>

        <div className="t-gal">
          {IMG.gallery.map(img => (
            <a key={img.alt} href={wa(`Hola, me interesó el diseño "${img.alt}" de su galería y quiero cotizar uno similar.`)}
              target="_blank" rel="noopener noreferrer" className="t-gal__item">
              <img src={img.src} alt={img.alt} loading="lazy" className="t-gal__img" />
              <div className="t-gal__over">
                <span className="t-gal__tag">{img.tag}</span>
                <span className="t-gal__title">{img.alt}</span>
                <span className="t-gal__location">📍 Taller CDMX</span>
                <span className="t-gal__cta"><WaIcon size={13} /> Cotizar por WhatsApp</span>
              </div>
            </a>
          ))}
        </div>

        <p className="t-gal__note">Cada arreglo es personalizado y hecho desde cero. El follaje y tipo de flor exacto puede cambiar de acuerdo a la época del año para garantizar frescura.</p>
      </div>
    </section>
  )
}

/* ===== OCASIONES ===== */
function Ocasiones() {
  return (
    <section id="ocasiones" className="t-section">
      <div className="t-container">
        <h2 className="t-h2">Arreglos para cada momento</h2>
        <p className="t-section__sub">Escríbenos por WhatsApp la fecha y tipo de ocasión; te enviaremos sugerencias personalizadas.</p>
        <div className="t-oca">
          {OCASIONES.map(o => (
            <a key={o.name} href={wa(o.msg)} target="_blank" rel="noopener noreferrer" className="t-oca__pill">
              {o.name}
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
    'Diseño a medida de bodas, XV años y bautizos',
    'Centros de mesa personalizados y arreglos para la mesa de dulces',
    'Ramos de novia especiales y tocados de flores naturales',
    'Opciones adaptadas a diferentes presupuestos y estilos de recintos',
  ]

  return (
    <section id="eventos" className="t-section t-section--alt">
      <div className="t-container">
        <div className="t-evt__grid">
          <div className="t-evt__text">
            <span className="t-kicker">Eventos familiares</span>
            <h2 className="t-h2">Bodas, XV años y celebraciones familiares en CDMX</h2>
            <p className="t-evt__desc">
              Cuidamos que la decoración floral cuente tu historia. Desde el ramo de novia hasta el arreglo más pequeño de las mesas, todo es diseñado de forma artesanal y colocado a mano el día del evento.
            </p>
            <ul className="t-evt__checks">
              {checks.map(c => (
                <li key={c} className="t-evt__check">
                  <span className="t-evt__check-icon"><CheckSvg /></span>
                  {c}
                </li>
              ))}
            </ul>
            <a href={wa('Hola, quiero cotizar la decoración floral para mi evento en CDMX.')} target="_blank" rel="noopener noreferrer" className="t-btn">
              <WaIcon /> Cotizar mi evento
            </a>
          </div>
          <div className="t-evt__media">
            <div className="t-evt__img-frame">
              <img src={IMG.eventoBig} alt="Decoración de bodas en Ciudad de México" className="t-evt__img" width="720" height="540" loading="lazy" />
              <div className="t-evt__badge-note">Decoración Floral CDMX</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== CÓMO PEDIR ===== */
function ComoPedir() {
  const steps = [
    { n: '1', title: 'Cuéntanos tu idea por WhatsApp', desc: 'Dinos qué ocasión celebras, la fecha de entrega en CDMX, tu presupuesto aproximado y cualquier tono o tipo de flor de preferencia.' },
    { n: '2', title: 'Diseñamos tu propuesta única', desc: 'Te sugerimos el tipo de arreglo y flores ideales de temporada. Te enviamos fotos de referencia hasta definir el diseño final.' },
    { n: '3', title: 'Confirmas y entregamos', desc: 'Una vez de acuerdo, coordinamos el pago y preparamos tu arreglo para entregarlo fresco directamente a domicilio.' },
  ]

  return (
    <section id="como-pedir" className="t-section">
      <div className="t-container">
        <h2 className="t-h2">Tu arreglo personalizado en 3 pasos</h2>
        <p className="t-section__sub">Hacer tu pedido es fácil, rápido y con trato humano directo.</p>
        <div className="t-steps">
          {steps.map(s => (
            <div key={s.n} className="t-steps__item">
              <span className="t-steps__num">{s.n}</span>
              <div>
                <h3 className="t-steps__title">{s.title}</h3>
                <p className="t-steps__desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="t-steps__cta">
          <a href={wa('Hola, quiero hacer un pedido de flores. Mi idea es:')} target="_blank" rel="noopener noreferrer" className="t-btn">
            <WaIcon /> Empezar mi pedido
          </a>
        </div>
      </div>
    </section>
  )
}

/* ===== QUOTE ===== */
function Quote() {
  return (
    <section className="t-section t-quote-section">
      <div className="t-container">
        <span className="t-kicker">Filosofía familiar</span>
        <blockquote className="t-quote">
          <p className="t-quote__text">
            "Cada flor tiene algo que decir. Nosotras ayudamos a que tu mensaje llegue con amor."
          </p>
          <footer className="t-quote__attr">Florería Paola AR, CDMX</footer>
        </blockquote>
      </div>
    </section>
  )
}

/* ===== CTA FINAL ===== */
function CtaFinal() {
  return (
    <section className="t-cta">
      <div className="t-container t-cta__inner">
        <h2 className="t-cta__h">Cuéntanos qué quieres transmitir y lo convertimos en flores</h2>
        <p className="t-cta__sub">Escríbenos por WhatsApp. Cotiza tu arreglo o evento familiar con entrega en la Ciudad de México y zona metropolitana.</p>
        <a href={wa('Hola, quiero cotizar un arreglo floral.')} target="_blank" rel="noopener noreferrer" className="t-btn t-btn--inv">
          <WaIcon /> Cotizar arreglo por WhatsApp
        </a>
        <div className="t-cta__phones">
          {WA_NUMBERS.map(p => (
            <a key={p.href} href={`${p.href}?text=${encodeURIComponent('Hola, quiero cotizar un arreglo floral personalizado.')}`}
              target="_blank" rel="noopener noreferrer" className="t-cta__phone">
              <WaIcon size={14} /> {p.label}
            </a>
          ))}
        </div>
        <p className="t-cta__note">Arreglos artesanales con entrega a domicilio en CDMX. La disponibilidad de flores varía según la temporada.</p>
      </div>
    </section>
  )
}

/* ===== FOOTER ===== */
function Footer() {
  return (
    <footer className="t-footer">
      <div className="t-container t-footer__grid">
        <div>
          <div className="t-footer__brand"><LeafSvg /> Florería Paola AR</div>
          <p className="t-footer__tagline">Ramos personalizados, arreglos florales y decoración para bodas, XV años y eventos familiares en la Ciudad de México.</p>
          <div className="t-footer__social">
            <a href="https://www.instagram.com/floreriapaolaar" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            <a href="https://www.facebook.com/FloreriaPaolaAR" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
          </div>
        </div>
        <div>
          <h4 className="t-footer__title">Servicios</h4>
          <ul className="t-footer__links">
            <li><a href={wa('Hola, quiero cotizar un ramo personalizado.')}>Ramos personalizados</a></li>
            <li><a href={wa('Hola, quiero cotizar decoración floral para un evento.')}>Decoración de eventos</a></li>
            <li><a href={wa('Hola, quiero cotizar un ramo de novia.')}>Ramos de novia</a></li>
            <li><a href={wa('Hola, quiero información de arreglos florales para XV años.')}>XV años</a></li>
            <li><a href={wa('Hola, quiero cotizar centros de mesa.')}>Centros de mesa</a></li>
          </ul>
        </div>
        <div>
          <h4 className="t-footer__title">WhatsApp Directo</h4>
          <ul className="t-footer__links">
            {WA_NUMBERS.map(p => (
              <li key={p.href}><a href={`${p.href}?text=${encodeURIComponent('Hola, quiero cotizar un arreglo floral.')}`} target="_blank" rel="noopener noreferrer">{p.label}</a></li>
            ))}
            <li><span>Ciudad de México</span></li>
          </ul>
        </div>
      </div>
      <div className="t-container">
        <div className="t-footer__bottom">© {new Date().getFullYear()} Florería Paola AR. Todos los derechos reservados. Diseños florales artesanales en CDMX.</div>
      </div>
    </footer>
  )
}

/* ===== FAB ===== */
function Fab() {
  return (
    <a href={wa('Hola, quiero cotizar un arreglo floral personalizado.')} target="_blank" rel="noopener noreferrer"
      className="t-fab" aria-label="Cotizar por WhatsApp">
      <WaIcon size={28} />
    </a>
  )
}

/* ===== PAGE ===== */
export default function TastePage() {
  return (
    <div className="taste-page">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Servicios />
        <Galeria />
        <Ocasiones />
        <Eventos />
        <ComoPedir />
        <Quote />
        <CtaFinal />
      </main>
      <Footer />
      <Fab />
    </div>
  )
}

