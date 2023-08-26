import React, { useState } from "react"
import "./Home.css"
import { homeData } from "../../Data"
import Home from "./Home"

const Homes = () => {
    const [items, setItems] = useState(homeData)

    return (
        <>
            <section className='home'>
                <Home items={items} />
            </section>
            <div className='margin'></div>
        </>
    )
}

export default Homes