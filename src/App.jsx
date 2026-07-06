import { useState, useEffect } from 'react'
import IndexPage from './pages/IndexPage.jsx'
import BaselinePage from './baseline/BaselinePage.jsx'
import TastePage from './taste/TastePage.jsx'

function getRoute() {
  const hash = window.location.hash
  if (hash === '#/baseline') return 'baseline'
  if (hash === '#/taste') return 'taste'
  return 'index'
}

function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    function onHashChange() {
      setRoute(getRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (route === 'baseline') return <BaselinePage />
  if (route === 'taste') return <TastePage />
  return <IndexPage />
}

export default App
