import '../css/About.css'
import WhatAreDoodleNoodles from '../imgs/WhatAreDoodleNoodles.png'

function about() {
    return (
        <div className='mainContainer'>
            <div className='secondaryContainer'>
                <img src={WhatAreDoodleNoodles} className='WhatAreDoodleNoodlesLogo' alt="Doodle Noodles"></img>
                <div className="WhatAreDoodleNoodlesContent">
                    <h1 className='Title'>What are Doodle Noodles?</h1>
                    <hr className='hr'></hr>
                    <p className='paragraphFont'>Doodle Noodles are 6666 snake NFTs looking to make Hisstory on the Ethereum blockchain. 
                    They were created by our founder Grin and generated from billions of possible combinations in order to produce 
                    a varied collection of amazing art. 
                    </p>
                    <p className='paragraphFont'>Some Noodles are rarer than others and some carry a special Golden Rune (more info below). 
                    Follow our planned journey by looking at our roadmap! For every Noodle minted we plan to plant 3 trees with OneTreePlanted, 
                    totalling 20,000 trees!
                    </p>
                    <p className='paragraphFont'>Join the Twitter and Discord to get involved, we’d love to meet you. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default about;