import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Error extends Component {
    render() {
        return (
            <div className="flex flex-col items-center gap-6 text-center pt-8">
                <h1 className="text-5xl">😮</h1>
                    <h2 className="font-bold text-gray-700 text-2xl">We're Stumped!</h2>
                <h2 className="text-xl text-gray-700 leading-loose">
                    We couldn't find what you were looking for.<br/>Please
                    double-check your request.
                </h2>
                <Link
                    to="/"
                    className="flex items-center gap-2 rounded-lg bg-green-500 px-10 py-3 font-bold text-white hover:bg-green-600 active:bg-green-500"
                >
                    HOME
                </Link>
            </div>
        )
    }
}
