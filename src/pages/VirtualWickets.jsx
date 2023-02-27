import React, { Component } from "react"
import Arrow from "../assets/svgFunctions/Arrow"
import Ball from "../assets/svgFunctions/Ball"
import Coin from "../assets/svgFunctions/Coin"
import Scoreboard from "../components/Scoreboard"

export default class VirtualWickets extends Component {
    state = {
        chooseToWriteNames: false,
        isCoinFlipped: false,
        start: false,
        announceWinner: false,
        showWarning: false,
        isTeamOneBatting: true,
        outcomeDisplay: "Let's go! 🏏",
        teamOne: "Out Of Formers",
        teamTwo: "Wicket Wizards",
        teamOneScore: 0,
        teamTwoScore: 0,
        teamOneWickets: 0,
        teamTwoWickets: 0,
        teamOneBallsBowled: 0,
        teamTwoBallsBowled: 0,
        winner: "",
    }

    toggleWriteOwnNames = () => {
        this.setState({ writeOwnNames: !this.state.writeOwnNames })
    }

    flipCoin = () => {
        const randomInt = Math.floor(Math.random() * 2) + 1
        if (randomInt === 2) {
            this.setState({ isTeamOneBatting: false })
        }
        this.setState({ isCoinFlipped: true, showWarning: false })
    }

    startGame = () => {
        if (this.state.isCoinFlipped) {
            this.setState({ showWarning: false, start: true })
        } else {
            this.setState({ showWarning: true })
        }
    }

    scrollUp = () => {
        window.scrollTo(0, 0)
    }

    reset = () => {
        this.setState({
            chooseToWriteNames: false,
            isCoinFlipped: false,
            start: false,
            announceWinner: false,
            showWarning: false,
            isTeamOneBatting: true,
            outcomeDisplay: "Let's go! 🏏",
            teamOne: "Out Of Formers",
            teamTwo: "Wicket Wizards",
            teamOneScore: 0,
            teamTwoScore: 0,
            teamOneWickets: 0,
            teamTwoWickets: 0,
            teamOneBallsBowled: 0,
            teamTwoBallsBowled: 0,
            winner: "",
        })
        this.scrollUp()
    }

    //create a series of functions to enable an outcome to be randomly choosen when ball is bowled (each outcome has different probability)

    createWeightedDistribution = (weights, size) => {
        //initialize empty array
        const distribution = []

        //find sum of all weights
        const sum = weights.reduce((a, b) => a + b)

        //determine quantity of each value
        const quantity = size / sum

        //add values to distribution depending on limit value
        for (let i = 0; i < weights.length; i++) {
            const limit = quantity * weights[i]
            for (let j = 0; j < limit; j++) {
                distribution.push(i)
            }
        }
        return distribution
    }

    randomIndex = (distribution) => {
        const index = Math.floor(distribution.length * Math.random())
        return distribution[index]
    }

    randomItem = (array, distribution) => {
        const index = this.randomIndex(distribution)
        return array[index]
    }

    bowlBall = () => {
        const outcomeArray = [
            0,
            1,
            2,
            3,
            4,
            6,
            "Bowled!",
            "LBW!",
            "Caught!",
            "Run Out!",
            "Stumped!",
        ]

        const outcomeWeights = [
            0.2, 0.6, 0.2, 0.2, 0.5, 0.1, 0.2, 0.1, 0.2, 0.02, 0.02,
        ]

        const outcomeDistribution = this.createWeightedDistribution(
            outcomeWeights,
            100
        )

        // randomly select an outcome from the distribution
        const outcome = this.randomItem(outcomeArray, outcomeDistribution)

        // update score or wickets depending on the outcome and which team is batting
        if (this.state.isTeamOneBatting) {
            if (typeof outcome === "number") {
                this.setState({
                    teamOneScore: this.state.teamOneScore + outcome,
                })
            } else {
                if (this.state.teamOneWickets < 10) {
                    this.setState({
                        teamOneWickets: this.state.teamOneWickets + 1,
                    })
                    if (this.state.teamOneWickets === 9) {
                        this.setState({ isTeamOneBatting: false })
                    }
                }
            }
        } else {
            if (typeof outcome === "number") {
                this.setState({
                    teamTwoScore: this.state.teamTwoScore + outcome,
                })
            } else {
                if (this.state.teamTwoWickets < 10) {
                    this.setState({
                        teamTwoWickets: this.state.teamTwoWickets + 1,
                    })
                    if (this.state.teamTwoWickets === 9) {
                        this.setState({ isTeamOneBatting: true })
                    }
                }
            }
        }

        // update ball count depending on what team is batting
        if (this.state.isTeamOneBatting) {
            this.setState({
                teamTwoBallsBowled: this.state.teamTwoBallsBowled + 1,
            })
        } else {
            this.setState({
                teamOneBallsBowled: this.state.teamOneBallsBowled + 1,
            })
        }

        let outcomeDisplay = ""
        switch (outcome) {
            case 0:
                outcomeDisplay = `Dot Ball 😴`
                this.setState({ outcomeDisplay: outcomeDisplay })
                break
            case 1:
                outcomeDisplay = `Single 🙂`
                this.setState({ outcomeDisplay: outcomeDisplay })
                break
            case 2:
                outcomeDisplay = `2 Runs! 😉`
                this.setState({ outcomeDisplay: outcomeDisplay })
                break
            case 3:
                outcomeDisplay = `3 Runs! 😁`
                this.setState({ outcomeDisplay: outcomeDisplay })
                break
            case 4:
                outcomeDisplay = `Four! 😍`
                this.setState({ outcomeDisplay: outcomeDisplay })
                break
            case 6:
                outcomeDisplay = `Six! 🤩`
                this.setState({ outcomeDisplay: outcomeDisplay })
                break
            case "Bowled!":
                outcomeDisplay = `Bowled! 😭`
                this.setState({ outcomeDisplay: outcomeDisplay })
                break
            case "LBW!":
                outcomeDisplay = `LBW! 😬`
                this.setState({ outcomeDisplay: outcomeDisplay })
                break
            case "Caught!":
                outcomeDisplay = `Caught! 😩`
                this.setState({ outcomeDisplay: outcomeDisplay })
                break
            case "Run Out!":
                outcomeDisplay = `Run Out! 😵`
                this.setState({ outcomeDisplay: outcomeDisplay })
                break
            case "Stumped!":
                outcomeDisplay = `Stumped! 😵`
                this.setState({ outcomeDisplay: outcomeDisplay })
                break
            default:
                break
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            teamOneWickets,
            teamTwoWickets,
            teamOneScore,
            teamTwoScore,
            announceWinner,
        } = this.state

        if (!announceWinner && teamOneWickets === 10 && teamTwoWickets === 10) {
            const winner =
                teamOneScore > teamTwoScore
                    ? this.state.teamOne
                    : teamTwoScore > teamOneScore
                    ? this.state.teamTwo
                    : "It's a draw!"
            this.setState({ announceWinner: true, winner: winner })
        } else if (
            !announceWinner &&
            teamOneWickets === 10 &&
            teamTwoScore > teamOneScore
        ) {
            this.setState({ announceWinner: true, winner: this.state.teamTwo })
        } else if (
            !announceWinner &&
            teamTwoWickets === 10 &&
            teamOneScore > teamTwoScore
        ) {
            this.setState({ announceWinner: true, winner: this.state.teamOne })
        }
    }

    render() {
        return (
            <div className="flex items-center justify-center">
                {!this.state.start ? (
                    <div>
                        <div className="flex flex-col items-center gap-8 p-12 text-gray-700 md:gap-12">
                            <h1 className="text-center font-spaceMono text-3xl font-bold">
                                Virtual Wickets
                            </h1>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                    <p className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
                                        1
                                    </p>
                                    <p>
                                        Choose two teams from the drop-down list
                                        or create your own.
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
                                        2
                                    </p>
                                    <p>Flip the coin to see who bats first.</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
                                        3
                                    </p>
                                    <p>
                                        Click the "play" button to start the
                                        game.
                                    </p>
                                </div>
                            </div>
                            <a href="#name">
                                <Arrow className="h-10 w-10 cursor-pointer" />
                            </a>
                            <div id="name" className="flex flex-col gap-10">
                                <div className="flex flex-wrap justify-center gap-8 md:gap-24">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-center font-bold underline">
                                            TEAM ONE
                                        </h1>
                                        {this.state.writeOwnNames ? (
                                            <input
                                                type="text"
                                                maxLength={20}
                                                placeholder="Custom Name"
                                                className="bg-gray-200 px-2 py-2"
                                                onChange={(e) => {
                                                    this.setState({
                                                        teamOne: e.target.value,
                                                    })
                                                }}
                                            />
                                        ) : (
                                            <select
                                                name="teamOne"
                                                value={this.state.teamOne}
                                                onChange={(e) => {
                                                    this.setState({
                                                        teamOne: e.target.value,
                                                    })
                                                }}
                                                className="px-4 py-2"
                                            >
                                                <option value="Out Of Formers">
                                                    Out Of Formers
                                                </option>
                                                <option value="Boundary Bashers">
                                                    Boundary Bashers
                                                </option>
                                                <option value="Swing Kings">
                                                    Swing Kings
                                                </option>
                                                <option value="Chin Music Crew">
                                                    Chin Music Crew
                                                </option>
                                                <option value="Run Makers">
                                                    Run Makers
                                                </option>
                                                <option value="Bowled and the Beautiful">
                                                    Bowled and the Beautiful
                                                </option>
                                                <option value="Six Appealers">
                                                    Six Appealers
                                                </option>
                                                <option value="Caught In The Act">
                                                    Caught In The Act
                                                </option>
                                                <option value="Wicketest Link">
                                                    Wicketest Link
                                                </option>
                                            </select>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-center font-bold underline">
                                            TEAM TWO
                                        </h1>
                                        {this.state.writeOwnNames ? (
                                            <input
                                                type="text"
                                                maxLength={20}
                                                placeholder="Custom Name"
                                                className="bg-gray-200 px-2 py-2"
                                                onChange={(e) => {
                                                    this.setState({
                                                        teamOne: e.target.value,
                                                    })
                                                }}
                                            />
                                        ) : (
                                            <select
                                                name="teamTwo"
                                                value={this.state.teamTwo}
                                                onChange={(e) => {
                                                    this.setState({
                                                        teamTwo: e.target.value,
                                                    })
                                                }}
                                                className="px-4 py-2"
                                            >
                                                <option value="Wicket Wizards">
                                                    Wicket Wizards
                                                </option>
                                                <option value="Straight Shooters">
                                                    Straight Shooters
                                                </option>
                                                <option value="Batting Brigade">
                                                    Batting Brigade
                                                </option>
                                                <option value="One Hit Wonders">
                                                    One Hit Wonders
                                                </option>
                                                <option value="Spin Doctors">
                                                    Spin Doctors
                                                </option>
                                                <option value="Mighty Bails">
                                                    Mighty Bails
                                                </option>
                                                <option value="Wicketkeeper's Union">
                                                    Wicketkeeper's Union
                                                </option>
                                                <option value="Stumped Squad">
                                                    Stumped Squad
                                                </option>
                                                <option value="Slippery Sliders">
                                                    Slippery Sliders
                                                </option>
                                            </select>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <span className="font-medium">
                                        Or, would you like to:
                                    </span>
                                    <button
                                        onClick={this.toggleWriteOwnNames}
                                        className="rounded-lg bg-green-500 px-6 py-3 font-bold text-white hover:bg-green-600 active:bg-green-500"
                                    >
                                        {this.state.writeOwnNames
                                            ? "CHOOSE NAMES"
                                            : "WRITE CUSTOM NAMES"}
                                    </button>
                                </div>
                            </div>
                            <a href="#coin">
                                <Arrow className="my-4 h-10 w-10 cursor-pointer" />
                            </a>
                            <div
                                id="coin"
                                className="flex flex-col items-center gap-4"
                            >
                                {this.state.isCoinFlipped ? (
                                    <div className="flex h-36 w-36 items-center justify-center md:h-48 md:w-48">
                                        <h1 className="text-7xl md:text-8xl">
                                            🎉
                                        </h1>
                                    </div>
                                ) : (
                                    <button onClick={this.flipCoin}>
                                        <Coin className="active:emerald-500 h-36 w-36 cursor-pointer fill-emerald-500 hover:fill-emerald-600 md:h-48 md:w-48" />
                                    </button>
                                )}
                                {!this.state.isCoinFlipped ? (
                                    <p className="text-2xl font-medium">
                                        Click to flip.
                                    </p>
                                ) : (
                                    <p className="text-2xl">
                                        <span className="font-bold">
                                            {this.state.isTeamOneBatting
                                                ? this.state.teamOne
                                                : this.state.teamTwo}
                                        </span>{" "}
                                        bat first!
                                    </p>
                                )}
                            </div>
                            <a href="#play">
                                <Arrow className="my-4 h-10 w-10 cursor-pointer" />
                            </a>

                            <div
                                id="play"
                                className="flex flex-col items-center gap-4"
                            >
                                <div className="flex h-12 w-full items-end justify-center gap-2">
                                    {this.state.showWarning ? (
                                        <p className="p-2 text-xl font-medium">
                                            Flip the coin first!{" "}
                                            <span className="text-6xl">☝️</span>
                                        </p>
                                    ) : (
                                        <p className="text-xl font-medium">
                                            Are you ready?
                                        </p>
                                    )}
                                </div>
                                <button
                                    onClick={this.startGame}
                                    className="w-48 rounded-lg bg-green-500 px-6 py-3 text-center font-bold text-white hover:bg-green-600 active:bg-green-500"
                                >
                                    PLAY!
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={this.reset}
                                    className="rounded-lg bg-red-500 px-6 py-3 font-bold text-white hover:bg-red-600 active:bg-red-500"
                                >
                                    RESET
                                </button>
                            </div>
                        </div>
                    </div>
                ) : this.state.start && !this.state.announceWinner ? (
                    <div className="flex flex-col items-center gap-6 p-4 sm:gap-14">
                        <h2 className="text-center text-4xl font-bold text-gray-700">
                            {this.state.outcomeDisplay}
                        </h2>
                        <div className="flex flex-wrap justify-center gap-10">
                            <Scoreboard
                                teamName={this.state.teamOne}
                                score={this.state.teamOneScore}
                                wickets={this.state.teamOneWickets}
                                ballsBowled={this.state.teamTwoBallsBowled}
                            />

                            <Scoreboard
                                teamName={this.state.teamTwo}
                                score={this.state.teamTwoScore}
                                wickets={this.state.teamTwoWickets}
                                ballsBowled={this.state.teamOneBallsBowled}
                            />
                        </div>
                        <button
                            onClick={this.bowlBall}
                            className="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-bold text-white hover:bg-green-600 active:bg-orange-500"
                        >
                            BOWL <Ball className="h-6 w-6" />
                        </button>
                    </div>
                ) : (
                    <div>
                        {this.state.winner === "It's a draw!" ? (
                            <div className="flex flex-col items-center justify-center gap-10">
                                <div className="flex flex-col items-center gap-4">
                                    <span className="text-8xl">😂</span>
                                    <h1 className="text-center text-4xl font-bold text-gray-700">
                                        It's a draw!
                                    </h1>
                                </div>
                                <button
                                    onClick={this.reset}
                                    className="rounded-lg bg-red-500 px-6 py-3 font-bold text-white hover:bg-red-600 active:bg-red-500"
                                >
                                    RESET
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-16 p-4 text-center">
                                <div className="flex flex-col items-center justify-center">
                                    <span className="text-9xl">👑</span>
                                    <h1 className="text-4xl font-bold uppercase text-gray-700">
                                        {this.state.winner}
                                    </h1>
                                </div>
                                <div
                                    className={`${
                                        this.state.winner === this.state.teamOne
                                            ? "flex-col"
                                            : "flex-col-reverse"
                                    } flex gap-6`}
                                >
                                    <div className="w-full">
                                        <h2 className="text-xl">
                                            {this.state.teamOne} -{" "}
                                            <span>
                                                {this.state.teamOneScore}
                                            </span>
                                        </h2>
                                    </div>
                                    <span className="text-2xl font-extrabold">
                                        DEFEATED
                                    </span>
                                    <div>
                                        <h2 className="text-xl">
                                            {this.state.teamTwo} -{" "}
                                            <span>
                                                {this.state.teamTwoScore}
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                                <button
                                    onClick={this.reset}
                                    className="rounded-lg bg-red-500 px-6 py-3 font-bold text-white hover:bg-red-600 active:bg-red-500"
                                >
                                    RESET
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}
