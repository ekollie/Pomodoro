import React from "react"
import TotalTime from "./TotalTime"
import Graph from "./Graph"
import AdditionalStats from "./AdditionalStats"


function Stats() {


    return (
        <div id="stats">
            <TotalTime />
            <Graph />
            <AdditionalStats />
        </div>
    )
}

export default Stats