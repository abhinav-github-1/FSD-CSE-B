import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserDashboard from './pages/UserDashboard'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<UserDashboard/>}>
        <Route path="/login"element={<h1>Login Page</h1>}></Route>
        <Route path="/register"element={<h1>Register Here</h1>}></Route>
        <Route path="/cart"element={<h1>View Cart</h1>}></Route>
        <Route path="/order"element={<h1>View Order</h1>}></Route>
        <Route path="*"element={<h1>404 Error Page</h1>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
