import React from 'react'
import Nav from '../Component/Nav'
import UpperBanner from '../Component/UpperBanner'
import CommonSec from '../Component/CommonSec'
import AtService from '../Component/AtService'
import Footer from '../Component/Footer'

const Home = () => {
    return (
        <div>
            <UpperBanner />
            <Nav />
            <CommonSec
                direction="straight"
                img="../Images/freshproduce.png"
                head="Every night, our market fills up with seasonal fruits and vegetables sourced from all corners of the globe."
                para="To delight your customers, you need great products and our wholesale traders work with select growers around the world to provide a diverse and unmatchable range of premium fresh produce. "
                subhead="Our fresh produce"
            />
            <div id="about">
                <CommonSec
                    direction="reverse"
                    img="../Images/Discover.png"
                    head="You want your customers to taste the Indian sun in every bite of mango and see the gorgeous sunset reds of a Sicilian blood orange."
                    para="You want them to enjoy the experience of lesser-known lines like kaffir limes, coral fungus or Rosa di Friuli. Our traders can provide you with virtually any fruit or vegetable, provided it's in season somewhere."
                    subhead="Discover the world"
                />
            </div>
            <CommonSec
                direction="reverse"
                img="../Images/Service.png"
                head="You can buy from us in whatever way best suits your own business."
                para="Walk our world-renowned buyers walk, meet the traders and select your own fruit and veg, or have our experienced and passionate professionals cherry-pick the best fresh produce on the Market for you and deliver it direct to your door."
                subhead="At your service"
            />
            <div id="products">
                <AtService />
            </div>
            <div id="contact">
                <Footer />
            </div>
        </div>
    )
}

export default Home