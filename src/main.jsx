import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import About from './components/About'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import Shop from './components/Shop'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop></Shop>,
                loader: () => fetch('products.json'),
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
