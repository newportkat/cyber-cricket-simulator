import React, { Component } from "react"
import Arrow from "../assets/svgFunctions/Arrow"
import Scoreboard from "../components/Scoreboard"

export default class Scorekeeper extends Component {
    state = {
        teamOne: "Team One",
        teamTwo: "Team Two",
        teamOneScore: 0,
        teamOneWickets: 0,
        teamTwoScore: 0,
        teamTwoWickets: 0,
        startScoring: false,
        teamOneBallsBowled: 0,
        teamTwoBallsBowled: 0,
    }

    createScoresheet = () => {
        this.setState({ startScoring: true })
    }

    increaseTeamOneWickets = () => {
        if (this.state.teamOneWickets < 10) {
            this.setState({ teamOneWickets: (this.state.teamOneWickets += 1) })
        }
    }
    increaseTeamTwoWickets = () => {
        if (this.state.teamTwoWickets < 10) {
            this.setState({ teamTwoWickets: (this.state.teamTwoWickets += 1) })
        }
    }

    increaseTeamOneScore = (runs) => {
        this.setState({ teamOneScore: (this.state.teamOneScore += runs) })
    }

    increaseTeamTwoScore = (runs) => {
        this.setState({ teamTwoScore: (this.state.teamTwoScore += runs) })
    }

    resetState = () => {
        this.setState({
            teamOne: "Team One",
            teamTwo: "Team Two",
            teamOneScore: 0,
            teamOneWickets: 0,
            teamTwoScore: 0,
            teamTwoWickets: 0,
            startScoring: false,
            teamOneBallsBowled: 0,
            teamTwoBallsBowled: 0,
        })
    }

    render() {
        return (
            <div className="flex items-center">
                {!this.state.startScoring && (
                    <div className="flex flex-col items-center justify-center gap-8 p-12">
                        <h1 className="text-center font-spaceMono text-3xl font-bold">
                            Scorekeeper
                        </h1>

                        <div className="flex flex-col gap-6">
                            <div className="flex gap-3">
                                <p className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
                                    1
                                </p>
                                <p>Record your team names.</p>
                            </div>
                            <div className="flex gap-3">
                                <p className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
                                    2
                                </p>
                                <p>Create a scoresheet!</p>
                            </div>
                            <div className="flex gap-3">
                                <p className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
                                    3
                                </p>
                                <p>
                                    Keep score easily with the click of a
                                    button.
                                </p>
                            </div>
                        </div>

                        <a href="" className="flex items-center">
                            <Arrow className="h-10 w-10 cursor-pointer" />
                        </a>

                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-center font-bold underline">
                                    TEAM ONE
                                </h1>
                                <input
                                    type="text"
                                    maxLength={20}
                                    placeholder="Team One Name"
                                    className="bg-gray-200 px-2 py-2"
                                    onChange={(e) => {
                                        this.setState({
                                            teamOne: e.target.value,
                                        })
                                    }}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-center font-bold underline">
                                    TEAM TWO
                                </h1>
                                <input
                                    type="text"
                                    maxLength={20}
                                    placeholder="Team Two Name"
                                    className="bg-gray-200 px-2 py-2"
                                    onChange={(e) => {
                                        this.setState({
                                            teamOne: e.target.value,
                                        })
                                    }}
                                />
                            </div>
                        </div>

                        <a href="" className="flex items-center">
                            <Arrow className="h-10 w-10 cursor-pointer" />
                        </a>
                        <button
                            onClick={this.createScoresheet}
                            className="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-bold text-white hover:bg-green-600 active:bg-green-500"
                        >
                            CREATE SCORESHEET
                        </button>
                    </div>
                )}
                {this.state.startScoring && (
                    <div className="flex flex-col gap-4 p-8">
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                            <div className="flex flex-1 flex-col items-start justify-end gap-4 bg-zinc-800 p-10 font-medium text-gray-200">
                                <h1 className="text-2xl font-bold uppercase">
                                    {this.state.teamOne}
                                </h1>
                                <div className="flex w-full flex-col">
                                    <h2 className="font-bold text-gray-200">
                                        TOTAL
                                    </h2>
                                    <p className="bg-zinc-700 p-2 text-3xl font-black text-yellow-300">
                                        {this.state.teamOneScore}
                                    </p>
                                </div>
                                <div className="flex w-full flex-col">
                                    <h1 className="font-bold text-gray-200">
                                        WKTS
                                    </h1>
                                    <p className="bg-zinc-700 p-2 text-3xl font-black text-yellow-300">
                                        {this.state.teamOneWickets}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col items-start justify-end gap-4 bg-zinc-800 p-10 font-medium text-gray-200">
                                <h1 className="text-2xl font-bold uppercase">
                                    {this.state.teamTwo}
                                </h1>
                                <div className="flex w-full flex-col">
                                    <h2 className="font-bold text-gray-200">
                                        TOTAL
                                    </h2>
                                    <p className="bg-zinc-700 p-2 text-3xl font-black text-yellow-300">
                                        {this.state.teamTwoScore}
                                    </p>
                                </div>
                                <div className="flex w-full flex-col">
                                    <h1 className="font-bold text-gray-200">
                                        WKTS
                                    </h1>
                                    <p className="bg-zinc-700 p-2 text-3xl font-black text-yellow-300">
                                        {this.state.teamTwoWickets}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col items-center gap-4 sm:flex-row">
                                    <div className=" flex flex-col items-center gap-3 rounded-lg border-4 border-white bg-gray-300 p-4 shadow-md">
                                        <h1 className="font-bebasNeue text-3xl tracking-wider text-gray-700">
                                            {this.state.teamOne.toUpperCase()}
                                        </h1>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => {
                                                    this.increaseTeamOneScore(0)
                                                }}
                                                className="font-xl flex h-8 w-8 flex-wrap items-center justify-center rounded bg-green-600 font-bold text-white shadow-lg hover:bg-green-500 active:bg-green-600"
                                            >
                                                0
                                            </button>
                                            <button
                                                onClick={() => {
                                                    this.increaseTeamOneScore(1)
                                                }}
                                                className="font-xl flex h-8 w-8 flex-wrap items-center justify-center rounded bg-green-600 font-bold text-white shadow-lg hover:bg-green-500 active:bg-green-600"
                                            >
                                                1
                                            </button>
                                            <button
                                                onClick={() => {
                                                    this.increaseTeamOneScore(2)
                                                }}
                                                className="font-xl flex h-8 w-8 flex-wrap items-center justify-center rounded bg-green-600 font-bold text-white shadow-lg hover:bg-green-500 active:bg-green-600"
                                            >
                                                2
                                            </button>
                                            <button
                                                onClick={() => {
                                                    this.increaseTeamOneScore(3)
                                                }}
                                                className="font-xl flex h-8 w-8 flex-wrap items-center justify-center rounded bg-green-600 font-bold text-white shadow-lg hover:bg-green-500 active:bg-green-600"
                                            >
                                                3
                                            </button>
                                            <button
                                                onClick={() => {
                                                    this.increaseTeamOneScore(4)
                                                }}
                                                className="font-xl flex h-8 w-8 flex-wrap items-center justify-center rounded bg-green-600 font-bold text-white shadow-lg hover:bg-green-500 active:bg-green-600"
                                            >
                                                4
                                            </button>
                                            <button
                                                onClick={() => {
                                                    this.increaseTeamOneScore(5)
                                                }}
                                                className="font-xl flex h-8 w-8 flex-wrap items-center justify-center rounded bg-green-600 font-bold text-white shadow-lg hover:bg-green-500 active:bg-green-600"
                                            >
                                                5
                                            </button>
                                            <button
                                                onClick={() => {
                                                    this.increaseTeamOneScore(6)
                                                }}
                                                className="font-xl flex h-8 w-8 flex-wrap items-center justify-center rounded bg-green-600 font-bold text-white shadow-lg hover:bg-green-500 active:bg-green-600"
                                            >
                                                6
                                            </button>
                                        </div>
                                        <button
                                            onClick={
                                                this.increaseTeamOneWickets
                                            }
                                            className="w-32 rounded-lg bg-green-600 p-2 text-center font-bold text-white shadow-lg hover:bg-orange-500 active:bg-orange-600"
                                        >
                                            Wicket
                                        </button>
                                    </div>

                                    <div className=" flex flex-col items-center gap-3 rounded-lg border-4 border-white bg-gray-300 p-4 shadow-md">
                                        <h1 className="font-bebasNeue text-3xl tracking-wider text-gray-700">
                                            {this.state.teamTwo.toUpperCase()}
                                        </h1>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => {
                                                    this.increaseTeamTwoScore(0)
                                                }}
                                                className="font-xl flex h-8 w-8 flex-wrap items-center justify-center rounded bg-green-600 font-bold text-white shadow-lg hover:bg-green-500 active:bg-green-600"
                                            >
                                                0
                                            </button>
                                            <button
                                                onClick={() => {
                                                    this.increaseTeamTwoScore(1)
                                                }}
                                                className="font-xl flex h-8 w-8 flex-wrap items-center justify-center rounded bg-green-600 font-bold text-white shadow-lg hover:bg-green-500 active:bg-green-600"
                                            >
                                                1
                                            </button>
                                            <button
                                                onClick={() => {
                                                    this.increaseTeamTwoScore(2)
                                                }}
                                                className="font-xl flex h-8 w-8 flex-wrap items-center justify-center rounded bg-green-600 font-bold text-white shadow-lg hover:bg-green-500 active:bg-green-600"
                                            >
                                                2
                                            </button>
                                            <button
                                                onClick={() => {
                                                    this.increaseTeamTwoScore(3)
                                                }}
                                                className="font-xl flex h-8 w-8 flex-wrap items-center justify-center rounded bg-green-600 font-bold text-white shadow-lg hover:bg-green-500 active:bg-green-600"
                                            >
                                                3
                                            </button>
                                            <button
                                                onClick={() => {
                                                    this.increaseTeamTwoScore(4)
                                                }}
                                                className="font-xl flex h-8 w-8 flex-wrap items-center justify-center rounded bg-green-600 font-bold text-white shadow-lg hover:bg-green-500 active:bg-green-600"
                                            >
                                                4
                                            </button>
                                            <button
                                                onClick={() => {
                                                    this.increaseTeamTwoScore(5)
                                                }}
                                                className="font-xl flex h-8 w-8 flex-wrap items-center justify-center rounded bg-green-600 font-bold text-white shadow-lg hover:bg-green-500 active:bg-green-600"
                                            >
                                                5
                                            </button>
                                            <button
                                                onClick={() => {
                                                    this.increaseTeamTwoScore(6)
                                                }}
                                                className="font-xl flex h-8 w-8 flex-wrap items-center justify-center rounded bg-green-600 font-bold text-white shadow-lg hover:bg-green-500 active:bg-green-600"
                                            >
                                                6
                                            </button>
                                        </div>
                                        <button
                                            onClick={
                                                this.increaseTeamTwoWickets
                                            }
                                            className="w-32 rounded-lg bg-green-600 p-2 text-center font-bold text-white shadow-lg hover:bg-orange-500 active:bg-orange-600"
                                        >
                                            Wicket
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={this.resetState}
                                    className="rounded-lg bg-red-500 px-6 py-3 font-bold text-white hover:bg-red-600 active:bg-red-500"
                                >
                                    RESET
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
