import React from "react"
import Card from "../Card/Card.jsx"
import data from "/data.js"

export default function Cards() {
    const cards = data.map(trip => {
        return (
            <Card
                className="entries" 
                key={trip.id}
                img={trip.imageUrl}
                {...trip}
            />
        )
    })
    return cards
}