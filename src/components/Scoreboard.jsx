import React, { Component } from "react"

export default class Scoreboard extends Component {
    state = { overs: 0 }

    increaseOvers = () => {
        this.setState({ overs: this.state.overs + 1 })
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.ballsBowled !== this.props.ballsBowled &&
            this.props.ballsBowled % 6 === 0
        ) {
            this.increaseOvers()
        }
    }

    render() {
        const { teamName, score, wickets, ballsBowled } = this.props

        return (
            <div className="flex-1 flex flex-col items-start justify-end bg-zinc-800 p-10 font-medium text-gray-200 gap-4">
                <h1 className="text-2xl font-bold uppercase">{teamName}</h1>
                <div className="flex flex-col w-full">
                    <h2 className="font-bold text-gray-200">TOTAL</h2>
                    <p className="bg-zinc-700 p-2 text-3xl font-black text-yellow-300">
                        {score}
                    </p>
                </div>
                <div className="flex flex-col w-full">
                    <h1 className="font-bold text-gray-200">WKTS</h1>
                    <p className="bg-zinc-700 p-2 text-3xl font-black text-yellow-300">
                        {wickets}
                    </p>
                </div>
                <div className="flex flex-col w-full">
                    <h2 className="font-bold text-gray-200">OVERS</h2>
                    <p className="bg-zinc-700 p-2 text-3xl font-black text-yellow-300">
                        {this.state.overs}
                    </p>
                </div>
            </div>
        )
    }
}
