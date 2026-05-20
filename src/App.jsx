import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Collection = lazy(() => import('./Pages/CollectionPage'))
const Detail = lazy(() => import('./Pages/DetailPage'))
const Cart = lazy(() => import('./Pages/CartPage'))
const CheckoutPage = lazy(() => import('./Pages/Checkout'))
const ProfilePage = lazy(() => import('./Pages/Profile'))
const LoginPage = lazy(() => import('./Pages/Login'))
const SignupPage = lazy(() => import('./Pages/Signup'))
const locationPage = lazy(() => import('./Pages/LocationPage'))
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      <Suspense fallback={<div><h3>loading....</h3></div>}>
        <Routes>
          <Route path='/' element={<Collection />} />
          <Route path='/DetailPage/:id' element={<Detail />} />
          <Route path='/CartPage' element={<Cart />} />
          <Route path='/Checkout' element={<CheckoutPage />} />
          <Route path='/Profile' element={<ProfilePage />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Signup' element={<SignupPage />} />
          <Route path='/LocationPage' element={<locationPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App
