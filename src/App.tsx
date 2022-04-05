import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './routes/Home'

import { globalCss } from 'stitches.config'
import { Contact } from './routes/Contact'
import { Booking } from './routes/Booking'

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  html: {
    fontFamily: '$body',
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
      </Routes>
    </Layout>
  )
}

export default App
