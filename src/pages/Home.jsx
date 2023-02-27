import React, { Component } from "react"
import { Link } from "react-router-dom"
import Bat from "../assets/svgFunctions/Bat"
import Wickets from "../assets/svgFunctions/Wickets"

export default class Home extends Component {
    render() {
        return (
            <div className="text-gray-700">
                <div className="flex items-center justify-center md:p-10">
                    <div className="flex flex-col items-center gap-6 p-8">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-center font-spaceMono text-3xl font-bold">
                                Virtual Wickets
                            </h1>
                            <h2 className="text-center font-semibold italic">
                                A Digital Cricket Game
                            </h2>
                        </div>
                        <div className="md:hidden">
                            <Wickets className="h-10 w-10" />
                        </div>
                        <div className="flex flex-col items-center leading-loose">
                            <p className="max-w-2xl leading-9">
                                Get ready to step up to the crease and take your
                                shot in the ultimate{" "}
                                <span className="font-bold">
                                    CYBER CRICKET EXPERIENCE!{" "}
                                </span>
                                With every ball, you never know what will happen
                                - will you score a six or get clean bowled? Play
                                now and find out!
                            </p>
                        </div>
                        <Link
                            to="/virtualwickets"
                            className="rounded-lg bg-green-500 px-6 py-3 font-bold text-white hover:bg-green-600 active:bg-green-500"
                        >
                            NEW GAME
                        </Link>
                    </div>
                    <div className="hidden p-8 md:flex">
                        <Wickets className="h-96 w-96" />
                    </div>
                </div>

                <div className="h-1 w-full bg-green-900"></div>

                <div className="flex items-center justify-center md:p-10">
                    <div className="hidden p-8 md:flex">
                        <Bat className="h-96 w-96" />
                    </div>
                    <div className="flex flex-col items-center gap-6 p-8">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-center font-spaceMono text-3xl font-bold">
                                Scorekeeper
                            </h1>
                            <h2 className="text-center font-semibold italic">
                                Track the scores of your own live match!
                            </h2>
                        </div>
                        <div className="md:hidden">
                            <Bat className="h-10 w-10" />
                        </div>
                        <div className="flex flex-col items-center leading-loose">
                            <p className="max-w-2xl leading-9">
                                Whether you're a spectator at the game or
                                following from afar, you can update the score
                                with a click of a button. This tool is perfect
                                for local cricket clubs to keep their
                                scoreboards updated and accurate throughout the
                                game. Don't miss a single moment of the action -
                                start tracking the live scores now!
                            </p>
                        </div>
                        <Link
                            to="/scorekeeper"
                            className="rounded-lg bg-green-500 px-6 py-3 font-bold text-white hover:bg-green-600 active:bg-green-500"
                        >
                            TRACK SCORE{" "}
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
