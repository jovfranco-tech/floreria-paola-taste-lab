import './IndexPage.css'

function IndexPage() {
  return (
    <div className="idx">
      <header className="idx-header">
        <h1>Florería Paola AR</h1>
        <p className="idx-sub">Taste Lab - Comparación de diseño</p>
      </header>

      <main className="idx-main">
        <p className="idx-desc">
          Dos versiones de la misma landing page. Mismo contenido, diferente ejecución de diseño.
        </p>

        <div className="idx-cards">
          <a href="#/baseline" className="idx-card idx-card--baseline">
            <span className="idx-card-label">Baseline</span>
            <h2>Versión original</h2>
            <p>Clon fiel de la página actual. Estructura, colores y tipografía preservados tal cual.</p>
            <span className="idx-card-cta">Ver baseline →</span>
          </a>

          <a href="#/taste" className="idx-card idx-card--taste">
            <span className="idx-card-label">Taste</span>
            <h2>Versión rediseñada</h2>
            <p>Rediseño guiado por el skill design-taste-frontend. Misma información, mejor ejecución visual.</p>
            <span className="idx-card-cta">Ver rediseño →</span>
          </a>
        </div>
      </main>

      <footer className="idx-footer">
        <p>Laboratorio de comparación de diseño. No es un sitio de producción.</p>
      </footer>
    </div>
  )
}

export default IndexPage
