import "../css/About.css";
import WhatAreDoodleNoodles from "../imgs/WhatAreDoodleNoodles.png";

function about() {
  return (
    <div className="mainContainer">
      <div className="secondaryContainer">
        <img
          src={WhatAreDoodleNoodles}
          className="WhatAreDoodleNoodlesLogo"
          alt="Doodle Noodles"
        ></img>
        <div className="WhatAreDoodleNoodlesContent">
          <h1 className="Title">What are Doodle Noodles?</h1>
          <hr className="hr"></hr>
          <p className="paragraphFont">
            Doodle Noodles are 3333 snake NFTs looking to make Hisstory on the
            Ethereum blockchain. They were created by our founder Grin and
            generated from billions of possible combinations in order to produce
            a varied collection of amazing art.
          </p>
          <p className="paragraphFont">
            -Every Noodle plants three trees with OneTreePlanted!
            <br/>
            - Our Doodle Noodle Ramen will drop physical ramen to holders.
            <br/>
            - We’re opening a Ramen & Merch store in The Sandbox!
            <br/>
            - New Evolving NFTs will be dropped to holders and used in our upcoming Trading Card
            Game!
            <br/>
            - 5 lucky minters will have the chance of getting a Golden Rune! Allowing them to have
            their own custom Noodle created and minted for them.
          </p>
          <p className="paragraphFont">
            Join the Twitter and Discord to get involved, we’d love to meet you.
          </p>

          <b><p className="paragraphFont">
            Read more about our goals and milestones in our Roadmap linked Above. Roadmap 2.0 coming soon!
          </p></b>
        </div>
      </div>
    </div>
  );
}

export default about;
