import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import SignIn from './pages/publicpage/SignIn'
import Content from './pages/privatePages/cms/Content'
import AddContent from "./pages/privatePages/cms/AddContent"
import Blog from "./pages/privatePages/cms/Blog"
import AddBlog from "./pages/privatePages/cms/AddBlog"
import Invoices from "./pages/privatePages/dashboard/Invoices"
import DashboardLight from "./pages/privatePages/dashboard/DasboardLight"
import Transaction from "./pages/privatePages/dashboard/Transaction"
import TransactionDetails from "./pages/privatePages/dashboard/TransactionDetails"
import Profile from "./pages/privatePages/apps/Profile"
import EditProfile from "./pages/privatePages/apps/EditProfile"
import PostDetails from "./pages/privatePages/apps/PostDetails"
import FormElements from './pages/privatePages/forms/formElements'
import Tables from './pages/privatePages/tables/Tables'
import Login from './pages/publicpage/LogIn'
import Register from "./pages/publicpage/Register"
import ProtectedRoutes from './routes/ProtectedRoutes'
import Charts from './pages/privatePages/charts/Charts'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public */}
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* protected */}

        <Route path='/content' element={<ProtectedRoutes> <Content /> </ProtectedRoutes>} />
        <Route path='/addContent' element={<ProtectedRoutes> <AddContent /> </ProtectedRoutes>} />
        <Route path='/blog' element={<ProtectedRoutes> <Blog /> </ProtectedRoutes>} />
        <Route path='/addBlog' element={<ProtectedRoutes> <AddBlog /> </ProtectedRoutes>} />

        <Route path='/dashboardLight' element={<ProtectedRoutes> <DashboardLight /> </ProtectedRoutes>} />
        <Route path='/invoices' element={<ProtectedRoutes> <Invoices /> </ProtectedRoutes>} />
        <Route path='/transaction' element={<ProtectedRoutes> <Transaction /> </ProtectedRoutes>} />
        <Route path='/transactionDetails' element={<ProtectedRoutes> <TransactionDetails /> </ProtectedRoutes>} />
        <Route path="/transaction-details/:id" element={<TransactionDetails />} />        <Route path='/profile' element={<ProtectedRoutes> <Profile /> </ProtectedRoutes>} />
        <Route path='/editProfile' element={<ProtectedRoutes> <EditProfile /> </ProtectedRoutes>} />
        <Route path='/postDetails' element={<ProtectedRoutes> <PostDetails /> </ProtectedRoutes>} />


        <Route path='/formElements' element={<ProtectedRoutes> <FormElements /> </ProtectedRoutes>} />
        <Route path='/charts' element={<ProtectedRoutes> <Charts /> </ProtectedRoutes>} />
        <Route path='/tables' element={<ProtectedRoutes> <Tables /> </ProtectedRoutes>} />





      </Routes>
    </BrowserRouter>
  )
}
