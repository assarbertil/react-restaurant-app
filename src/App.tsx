import { Route, Routes } from 'react-router-dom'
import { Layout } from 'components/Layout'
import { Home } from 'routes/Home'
import { globalCss } from 'stitches.config'
import { Contact } from 'routes/Contact'
import { Booking } from 'routes/Booking'
import { Admin } from 'routes/Admin'
import { NotFound } from 'routes/NotFound'
import './i18n'

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  html: {
    fontFamily: '$body',
    color: '$foreground',
    backgroundColor: '$background'
  },

  a: {
    textDecoration: 'none'
  }
})

function App() {
  globalStyles()

  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/boka" element={<Booking />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
