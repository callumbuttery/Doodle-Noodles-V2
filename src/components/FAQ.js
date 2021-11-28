import "../css/FAQ.css";
import FAQimg from "../imgs/FAQ.png";

function FAQ() {
  return (
    <div className="FQAMainContainer">
      <div className="secondaryContainer">
        <div className="FQA-header">
          <img src={FAQimg} className="FQALogo" alt="FQA"></img>
          <div className="FQAcontent">
            <h2 className="listItem">1. When will the Noodles launch?</h2>
            <p className="FQAParagraphFont">
              Our presale will happen for our whitelist members on December
              27th! Our public sale will go live 48 hours later on December
              29th!
              <b>
                 The date of the presale will be announced on our Discord &
                Twitter!
              </b>
            </p>
            <h2 className="listItem">
              2. How can I join the whitelist for Pre-Sale?
            </h2>
            <p className="FQAParagraphFont">
              <b>Join our Discord to be whitelisted!</b> We will be giving out
              whitelist spots to active members, winners of giveaways and in
              random whitelisting events before launch - stick around and look
              out!
            </p>
            <h2 className="listItem">3. What is the mint price & Limit?</h2>
            <p className="FQAParagraphFont">
              Mint Price is set at 0.06ETH and mint limit at 5 Noodles per
              wallet. These are subject to change but we will try to keep things
              consistent up till launch!
            </p>
            <h2 className="listItem">
              4. Do we own the licences to our Noodles?
            </h2>
            <p className="FQAParagraphFont">
              Yes! You are free to use the Noodles you have purchased however
              you wish - however the only way to transfer the licence is through
              selling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
