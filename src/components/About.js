import '../css/About.css'
import WhatAreDoodleNoodles from '../imgs/WhatAreDoodleNoodles.png'

function about() {
    return (
        <div className='mainContainer'>
            <div className='secondaryContainer'>
                <img src={WhatAreDoodleNoodles} className='WhatAreDoodleNoodlesLogo'></img>
                <div className="WhatAreDoodleNoodlesContent">
                    <h1 className='Title'>What are Doodle Noodles?</h1>
                    <hr className='hr'></hr>
                    <p className='paragraphFont'>Doodle Noodles are a ~10,000 strong generated NFT project form art
                        made by our resident artist Grin! The images were generated from
                        literally billions of possible combinations
                    </p>
                    <p className='paragraphFont'>Some Noodles are rarer than others and some carry a special Golden
                        Rune(more information below).Follow our planned Journey by looking
                        at our roadmap and get on board!We'd love to welcome you int our
                        new community.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default about;