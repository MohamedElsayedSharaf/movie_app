import { useState } from 'react'
import Homes from '../components/homes/Homes'
import Upcomming from '../components/upcomming/Upcomming'
import { latest, recommended, upcome } from '../Data'
import Trending from '../components/trending/Trending'

const HomePage = () => {
    const [items, setItems] = useState(upcome)
    const [item, setItem] = useState(latest)
    const [rec, setRec] = useState(recommended)
    return (
        <>
            <Homes />
            <Upcomming items={items} title='Upcomming Movies'/>
            <Upcomming items={item} title='Latest Movies'/>
            <Trending />
            <Upcomming items={rec} title='Recommended Movies'/>
        </>
    )
}

export default HomePage
