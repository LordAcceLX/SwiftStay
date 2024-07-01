import './App.css'
import { Route , Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage.jsx'
import Layout from './Layout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage.jsx'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5173'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<IndexPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}
export default App
