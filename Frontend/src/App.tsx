import Home from './Pages/Home';
import Course from './Pages/Course'
import Signup from './components/Signup'
import ContactPage from './Pages/ContactPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {useAuth} from './context/AuthProvider.jsx'

function App() {
    const [authUser, setAuthUser] = useAuth()
    console.log(authUser)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/Course" element={authUser? <Course />: <Navigate to= "/Signup" />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  )
}

export default App