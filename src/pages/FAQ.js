import '../css/FAQ.css'

import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function FAQ() {
    return (
        <div className='FAQ'>
            <div className="FAQmainContainer">
                <div className='SecondaryContainer'>
                    <div className='Heading'>1. What are Doodle Noodles?</div>
                    <div className='subHeading'>Doodle Noodles are designed to be 3333 collectable snake based art NFTs looking to make
                        Hisstory on the Ethereum blockchain. They were created by our founder Grin and generated
                        from billions of possible combinations in order to produce a varied collection of amazing art.</div>

                    <div className='subHeading'>Please find below some of the goals of our project, all dependent on sales goals in our
                        Roadmap (linked above):</div>

                    <div className='listing'>
                        <li>
                            At multiple sales milestones we will be donating to OneTreePlanted meaning that on
                            sellout every Noodle plants three trees!
                        </li>
                        <li>
                            Upon sellout of the collection our Doodle Noodle Ramen will drop physical ramen to
                            holders.
                        </li>
                        <li>
                            5 lucky minters will have the chance of getting a Golden Rune! Allowing them to have
                            their own custom Noodle created and minted for them.
                        </li>
                        <li>
                            3 trips to Japan given away to holders.
                        </li>
                        <li>
                            At multiple sales milestones we will be donating to OneTreePlanted meaning that on
                            sellout every Noodle plants three trees!
                        </li>
                    </div>

                    <div className='subHeading'>Join the Twitter and Discord to get involved, we’d love to meet you and hope you enjoy being
                        part of our community. For full details of the sales milestones required for us to be able to
                        deliver the above goals please have a look at our roadmap which is available in the link at the
                        top of the page or on our Twitter and Discord.</div>


                    <div className='Heading'>2. Where did Doodle Noodles come from?</div>
                    <div className='subHeading'>We are two ordinary Scottish guys, passionate about NFTs and the world of blockchain. Grin is
                        our Founder, Artist and Blockchain developer and Buttery is our web wizard dealing with our
                        website!</div>

                    <div className='subHeading'>This project is looking to bring something new to the NFT space and build an amazing
                        community centered around creativity and innovation. Let’s have some fun together.</div>


                    <div className='Heading'>3. What is the mint price &amp; Limit?</div>
                    <div className='subHeading'>Mint Price is set at 0.06ETH and mint limit at 5 Noodles per wallet. These are subject to change
                        but we will try to keep things consistent!</div>

                    <div className='Heading'>4. What can we use our Noodles for?</div>
                    <div className='subHeading'>You are free to use the Noodles you have purchased however you wish for personal use!</div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;