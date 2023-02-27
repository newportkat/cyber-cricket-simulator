import React, { Component } from "react"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Error from "./components/Error"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Scorekeeper from "./pages/Scorekeeper"
import VirtualWickets from "./pages/VirtualWickets"

const Layout = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex flex-grow justify-center sm:justify-between">
                <div className="hidden w-1/6 bg-green-200 sm:block"></div>
                <Outlet />
                <div className="hidden w-1/6 bg-green-200 sm:block"></div>
            </div>
            <Footer />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/virtualwickets",
                element: <VirtualWickets />,
            },
            {
                path: "/scorekeeper",
                element: <Scorekeeper />,
            },
        ],
    },
])

export default class App extends Component {
    render() {
        return (
            <div className="min-h-screen bg-green-100 tracking-wider">
                <RouterProvider router={router} />
            </div>
        )
    }
}
