import '../css/FAQ.css'
import FAQimg from '../imgs/FAQ.png'

function FAQ() {
    return (
        <div className='FQAMainContainer'>
            <div className='secondaryContainer'>
                <div className='FQA-header'>
                    <img src={FAQimg} className='FQALogo' alt="FQA"></img>
                    <div className="FQAcontent">
                        <h2 className='listItem'>1. When will the Noodles launch?</h2>
                        <p className='FQAParagraphFont'>We will be having a presale for our whitelisted members
                            of the first 3000 Noodles. Then a few days later the public sale will go live.
                            <b>The date of the presale will be announced on our Discord & Twitter!</b>
                        </p>
                        <h2 className='listItem'>2. How can I join the whitelist for Pre-Sale?</h2>
                        <p className='FQAParagraphFont'>For more information on the events where you can join
                            the whitelist, keep up to date and active on this server and on our twitter!
                        </p>
                        <h2 className='listItem'>3. What is the mint price & Limit?</h2>
                        <p className='FQAParagraphFont'>It's important to us that the community has their say on
                            these and so the mint price and the mint limit per wallet address will be confirmed closer
                            to the launch date by our team.
                        </p>
                        <h2 className='listItem'>4. Do we own the licences to our Noodles?</h2>
                        <p className='FQAParagraphFont'>Yes! You are free to use the Noodles you have purchased
                            however you wish - however the only way to transfer the licence is through selling.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;