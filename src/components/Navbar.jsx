import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <div className="flex flex-col items-center gap-4 bg-green-600 py-8">
                <Link
                    to="/"
                    className="border-b-4 border-white font-bebasNeue text-5xl text-white"
                >
                    Cyber Cricket
                </Link>
            </div>
        )
    }
}
