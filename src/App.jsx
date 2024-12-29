import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { Layout } from './components/layout/Layout'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<div>Dashboard</div>} />
            <Route path="invoices" element={<div>Invoices</div>} />
            <Route path="customers" element={<div>Customers</div>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App