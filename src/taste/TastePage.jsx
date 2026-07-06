import { useState } from 'react'
import './TastePage.css'

/* ────────────────────────────────────────────────────────
   Florería Paola AR - TASTE (Redesigned)
   Design Read: Commercial landing page for a family-owned flower shop
   in CDMX, targeting local consumers who buy ramos, arreglos florales,
   and event decoration. Warm, direct, Spanish-first, artisanal.
   Dials: VARIANCE 6, MOTION 4, DENSITY 3
   Accent: #1B3A2D forest green. Typography: Outfit + Karla.
   ──────────────────────────────────────────────────────── */

const WA = 'https://wa.me/525536329416'
const WA_NUMBERS = [
  { label: '55 3632 9416', href: 'https://wa.me/525536329416' },
  { label: '56 2442 8572', href: 'https://wa.me/525624428572' },
  { label: '55 1645 8786', href: 'https://wa.me/525516458786' },
]

const NAV_ITEMS = [
  { label: 'Servicios', id: 'servicios' },
  { label: 'Galería', id: 'galeria' },
  { label: 'Ocasiones', id: 'ocasiones' },
  { label: 'Eventos', id: 'eventos' },
  { label: 'Cómo pedir', id: 'como-pedir' },
]

const GALLERY = [
  { label: 'Ramo de tulipanes rosas', tone: 'pink' },
  { label: 'Centro de mesa floral', tone: 'sage' },
  { label: 'Rosas fucsia con mariposas', tone: 'fuchsia' },
  { label: 'Girasoles para celebrar', tone: 'gold' },
  { label: 'Ramo de novia elegante', tone: 'cream' },
  { label: 'Decoración para XV años', tone: 'lilac' },
  { label: 'Ramo romántico en tonos rosa', tone: 'rose' },
  { label: 'Arreglo de lirios y rosas', tone: 'peach' },
]

const OCASIONES = [
  { name: 'Cumpleaños', msg: 'Hola, quiero un arreglo floral para cumpleaños.' },
  { name: 'Aniversarios', msg: 'Hola, quiero un arreglo para un aniversario.' },
  { name: 'San Valentín', msg: 'Hola, quiero un arreglo para San Valentín.' },
  { name: 'Día de las Madres', msg: 'Hola, quiero un arreglo para el Día de las Madres.' },
  { name: 'Flores amarillas', msg: 'Hola, quiero un ramo de flores amarillas.' },
  { name: 'Graduaciones', msg: 'Hola, quiero un arreglo para una graduación.' },
  { name: 'Bodas', msg: 'Hola, quiero información para decoración floral de boda.' },
  { name: 'XV años', msg: 'Hola, quiero información de arreglos florales para XV años.' },
  { name: 'Condolencias', msg: 'Hola, quiero un arreglo para condolencias.' },
]

function waLink(msg) {
  return `${WA}?text=${encodeURIComponent(msg)}`
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

/* ===== SVG Icons ===== */
function WaIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
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
          <a href="#/" className="tp-header__back">← Lab</a>
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
          href={waLink('Hola, quiero cotizar un arreglo floral.')}
          target="_blank"
          rel="noopener noreferrer"
          className="tp-btn tp-btn--small tp-header__cta tp-header__cta--desktop"
        >
          <WaIcon size={16} />
          WhatsApp
        </a>

        <button
          className="tp-header__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
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
          <a href={waLink('Hola, quiero cotizar un arreglo floral.')} target="_blank" rel="noopener noreferrer" className="tp-btn">
            <WaIcon /> Cotizar por WhatsApp
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
              <a href={waLink('Hola, quiero cotizar un arreglo floral. Mi ocasión es:')} target="_blank" rel="noopener noreferrer" className="tp-btn">
                <WaIcon /> Cotizar por WhatsApp
              </a>
            </div>
          </div>
          <div>
            <div className="tp-placeholder tp-placeholder--hero tp-placeholder--rose" aria-label="Ramo de flores frescas personalizado">
              <span className="tp-placeholder__label">Ramo personalizado de flores frescas</span>
            </div>
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
          {items.map((item, i) => (
            <div key={item} className="tp-trust__item">
              {i > 0 && <span className="tp-trust__sep" aria-hidden="true" />}
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
          <a href={waLink('Hola, quiero cotizar un ramo personalizado.')} target="_blank" rel="noopener noreferrer" className="tp-servicios__card-large">
            <div className="tp-placeholder tp-placeholder--card tp-placeholder--sage">
              <span className="tp-placeholder__label">Ramos personalizados</span>
            </div>
            <div className="tp-servicios__card-body">
              <h3 className="tp-servicios__card-title">Ramos personalizados</h3>
              <p className="tp-servicios__card-desc">
                Hechos a tu medida: flores, colores y envoltura según lo que quieres decir.
              </p>
              <span className="tp-servicios__card-link">Cotizar <WaIcon size={14} /> </span>
            </div>
          </a>

          {/* 2 stacked right */}
          <div className="tp-servicios__card-stack">
            <a href={waLink('Hola, quiero cotizar decoración floral para un evento.')} target="_blank" rel="noopener noreferrer" className="tp-servicios__card-stacked">
              <div className="tp-placeholder tp-placeholder--card-sm tp-placeholder--fern">
                <span className="tp-placeholder__label">Decoración de eventos</span>
              </div>
              <div className="tp-servicios__card-body">
                <h3 className="tp-servicios__card-title">Decoración de eventos</h3>
                <p className="tp-servicios__card-desc">
                  Ambientación floral para eventos sociales: mesas, entradas y espacios completos.
                </p>
              </div>
            </a>
            <a href={waLink('Hola, quiero cotizar un ramo de novia.')} target="_blank" rel="noopener noreferrer" className="tp-servicios__card-stacked">
              <div className="tp-placeholder tp-placeholder--card-sm tp-placeholder--blush">
                <span className="tp-placeholder__label">Ramos de novia</span>
              </div>
              <div className="tp-servicios__card-body">
                <h3 className="tp-servicios__card-title">Ramos de novia</h3>
                <p className="tp-servicios__card-desc">
                  Elegantes y atemporales, diseñados para acompañarte en el día más importante.
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Compact row */}
        <div className="tp-servicios__compact-row">
          {[
            { name: 'XV años', msg: 'Hola, quiero información de arreglos florales para XV años.' },
            { name: 'Centros de mesa', msg: 'Hola, quiero cotizar centros de mesa.' },
            { name: 'Detalles sorpresa', msg: 'Hola, quiero cotizar un detalle sorpresa.' },
          ].map(s => (
            <a key={s.name} href={waLink(s.msg)} target="_blank" rel="noopener noreferrer" className="tp-servicios__compact-item">
              <div className="tp-servicios__compact-name">{s.name}</div>
              <span className="tp-servicios__compact-link">Cotizar →</span>
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
    <section id="galeria" className="tp-galeria tp-section">
      <div className="tp-container">
        <span className="tp-eyebrow">Galería</span>
        <h2 className="tp-headline tp-galeria__headline">Trabajos recientes</h2>

        <div className="tp-galeria__masonry">
          {GALLERY.map(img => (
            <a
              key={img.label}
              href={waLink(`Hola, me encantó el arreglo "${img.label}" de su galería y quiero cotizarlo.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="tp-galeria__item"
            >
              <div className={`tp-placeholder tp-placeholder--gallery tp-placeholder--${img.tone}`}>
                <span className="tp-placeholder__label">{img.label}</span>
              </div>
              <div className="tp-galeria__overlay">
                <span className="tp-galeria__overlay-title">{img.label}</span>
                <span className="tp-galeria__overlay-cta"><WaIcon size={14} /> Cotizar este arreglo</span>
              </div>
            </a>
          ))}
        </div>

        <p className="tp-galeria__note">
          Cada arreglo se personaliza. La disponibilidad de flores varía por temporada.
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
          {OCASIONES.map(o => (
            <a
              key={o.name}
              href={waLink(o.msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="tp-ocasiones__pill"
            >
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
    'Decoración floral para bodas y XV años',
    'Centros de mesa y arreglos para el lugar',
    'Ramos de novia y accesorios florales',
    'Propuestas para diferentes presupuestos',
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
            <p className="tp-eventos__desc">
              Desde los centros de mesa hasta el ramo de novia: cuidamos que las flores acompañen cada momento de tu evento.
            </p>
            <div className="tp-eventos__checklist">
              {checks.map(text => (
                <div key={text} className="tp-eventos__check">
                  <span className="tp-eventos__check-icon"><CheckIcon /></span>
                  {text}
                </div>
              ))}
            </div>
            <a href={waLink('Hola, quiero cotizar decoración floral para un evento.')} target="_blank" rel="noopener noreferrer" className="tp-btn">
              <WaIcon /> Cotizar mi evento
            </a>
          </div>
          <div className="tp-eventos__visual">
            <div className="tp-placeholder tp-placeholder--event tp-placeholder--fern">
              <span className="tp-placeholder__label">Decoración floral para evento</span>
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
    {
      num: '1',
      title: 'Escríbenos por WhatsApp',
      desc: 'Cuéntanos la ocasión, tu presupuesto y la fecha. Si tienes una foto de inspiración, compártela.',
    },
    {
      num: '2',
      title: 'Diseñamos tu propuesta',
      desc: 'Te sugerimos opciones de flores, colores y tamaños según lo que quieres transmitir.',
    },
    {
      num: '3',
      title: 'Confirmas y listo',
      desc: 'Coordinamos contigo los detalles de tu pedido por el mismo chat, sin complicaciones.',
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
          <a href={waLink('Hola, quiero cotizar un arreglo floral. Mi ocasión es:')} target="_blank" rel="noopener noreferrer" className="tp-btn">
            <WaIcon /> Empezar mi pedido
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
            "Cada flor tiene algo que decir. Nosotras ayudamos a que tu mensaje llegue con amor."
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
            Cuéntanos qué quieres transmitir y lo convertimos en flores
          </h2>
          <p className="tp-cta-final__sub">
            Escríbenos por WhatsApp con la ocasión, tu presupuesto y la fecha. Te respondemos con una propuesta pensada para ti.
          </p>
          <div className="tp-cta-final__btn">
            <a href={waLink('Hola, quiero cotizar un arreglo floral. Mi ocasión es:')} target="_blank" rel="noopener noreferrer" className="tp-btn tp-btn--inverted">
              <WaIcon /> Cotizar por WhatsApp
            </a>
          </div>
          <div className="tp-cta-final__phones">
            {WA_NUMBERS.map(ph => (
              <a key={ph.href} href={`${ph.href}?text=${encodeURIComponent('Hola, quiero cotizar un arreglo floral.')}`} target="_blank" rel="noopener noreferrer" className="tp-cta-final__phone">
                <WaIcon size={14} /> {ph.label}
              </a>
            ))}
          </div>
          <p className="tp-cta-final__note">
            La disponibilidad de flores puede variar según temporada.
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
          <div>
            <div className="tp-footer__brand">Florería Paola AR</div>
            <p className="tp-footer__tagline">
              Ramos personalizados, arreglos florales y decoración para eventos sociales en la Ciudad de México.
            </p>
            <div className="tp-footer__social">
              <a href="https://www.instagram.com/floreriapaolaar" target="_blank" rel="noopener noreferrer" className="tp-footer__social-link" aria-label="Instagram de Florería Paola AR">
                IG
              </a>
              <a href="https://www.facebook.com/FloreriaPaolaAR" target="_blank" rel="noopener noreferrer" className="tp-footer__social-link" aria-label="Facebook de Florería Paola AR">
                FB
              </a>
            </div>
          </div>

          <div>
            <div className="tp-footer__col-title">Servicios</div>
            <div className="tp-footer__links">
              <a href={waLink('Hola, quiero cotizar un ramo personalizado.')} target="_blank" rel="noopener noreferrer" className="tp-footer__link">Ramos personalizados</a>
              <a href={waLink('Hola, quiero cotizar decoración floral para un evento.')} target="_blank" rel="noopener noreferrer" className="tp-footer__link">Decoración de eventos</a>
              <a href={waLink('Hola, quiero cotizar un ramo de novia.')} target="_blank" rel="noopener noreferrer" className="tp-footer__link">Ramos de novia</a>
              <a href={waLink('Hola, quiero información de arreglos florales para XV años.')} target="_blank" rel="noopener noreferrer" className="tp-footer__link">XV años</a>
              <a href={waLink('Hola, quiero cotizar centros de mesa.')} target="_blank" rel="noopener noreferrer" className="tp-footer__link">Centros de mesa</a>
            </div>
          </div>

          <div>
            <div className="tp-footer__col-title">WhatsApp</div>
            <div className="tp-footer__links">
              {WA_NUMBERS.map(ph => (
                <a key={ph.href} href={`${ph.href}?text=${encodeURIComponent('Hola, quiero cotizar un arreglo floral.')}`} target="_blank" rel="noopener noreferrer" className="tp-footer__link">
                  {ph.label}
                </a>
              ))}
              <span className="tp-footer__link tp-footer__link--static">Ciudad de México</span>
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
      href={waLink('Hola, quiero cotizar un arreglo floral.')}
      target="_blank"
      rel="noopener noreferrer"
      className="tp-fab"
      aria-label="Cotizar por WhatsApp"
    >
      <WaIcon size={28} />
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
